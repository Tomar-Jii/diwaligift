/**
 * Faah.fun - High-Performance Asset Cache Service Worker
 * 
 * Provides persistent browser caching for images, videos, audio, and static assets
 * across page navigations and revisits without altering existing loading timings.
 * 
 * Capabilities:
 * - Cache-First for static assets (/assets/*, images, videos, audio, fonts)
 * - Full support for HTTP 206 Partial Content (Range requests) for <video> and <audio>
 * - Network-First for HTML navigations (ensures SEO and content freshness)
 * - Zero repeated network requests for already-cached assets
 */

const CACHE_NAME = 'faah-assets-v1';

// File extensions eligible for persistent caching
const CACHEABLE_EXTENSIONS = /\.(mp4|webm|mp3|wav|ogg|jpg|jpeg|png|gif|svg|webp|ico|woff2|woff|ttf|otf)$/i;

// 1. INSTALL EVENT: Activate immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// 2. ACTIVATE EVENT: Clean up any old caches and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. FETCH EVENT: Intercept asset requests & serve from Cache API
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Only handle standard GET requests
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Never cache the service worker itself
  if (url.pathname === '/sw.js') return;

  const isSameOrigin = url.origin === self.location.origin;
  const isStaticAsset = isSameOrigin && (
    url.pathname.startsWith('./assets/') ||
    url.pathname.startsWith('/favicon') ||
    CACHEABLE_EXTENSIONS.test(url.pathname)
  );
  const isExternalFont = url.hostname === 'fonts.gstatic.com' || url.hostname === 'fonts.googleapis.com';

  // A. Static Assets (Images, Videos, Audio, Fonts): Cache-First Strategy
  if (isStaticAsset || isExternalFont) {
    event.respondWith(handleAssetRequest(request));
    return;
  }

  // B. HTML Documents / Page Navigation: Network-First Strategy
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(
      fetch(request).catch(() => caches.match(request))
    );
    return;
  }
});

/**
 * Handle Asset Requests:
 * - If cached: return from Cache (handling Range requests if required)
 * - If not cached: fetch from network and store in Cache API once loaded
 */
async function handleAssetRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  const rangeHeader = request.headers.get('range');

  // Use normalized URL without query string as the cache key
  const cleanUrl = request.url.split('?')[0];
  const cacheKey = new Request(cleanUrl, { method: 'GET' });

  const cachedResponse = await cache.match(cacheKey);

  // 1. ASSET ALREADY CACHED: Reuse directly from Cache API (Zero network request!)
  if (cachedResponse) {
    if (rangeHeader) {
      return createRangeResponse(cachedResponse, rangeHeader);
    }
    return cachedResponse;
  }

  // 2. ASSET NOT CACHED: Fetch from network
  try {
    if (rangeHeader) {
      // For initial video/audio range request, stream from network
      // and in parallel cache the complete asset so future page navigations hit Cache API
      const networkResponse = await fetch(request);
      warmFullAsset(cache, cacheKey, cleanUrl);
      return networkResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse && (networkResponse.status === 200 || networkResponse.status === 0)) {
      // Cache successful response for future navigations and revisits
      cache.put(cacheKey, networkResponse.clone()).catch(() => {});
    }
    return networkResponse;
  } catch (error) {
    // If network fails (offline), attempt fallback match
    const fallback = await cache.match(cacheKey);
    if (fallback) {
      if (rangeHeader) return createRangeResponse(fallback, rangeHeader);
      return fallback;
    }
    throw error;
  }
}

// In-progress pre-warm set to prevent duplicate simultaneous background fetches
const warmingSet = new Set();

/**
 * Background warm the complete media asset into cache
 */
function warmFullAsset(cache, cacheKey, url) {
  if (warmingSet.has(url)) return;
  warmingSet.add(url);

  fetch(url, { method: 'GET' })
    .then(async (response) => {
      if (response && response.status === 200) {
        await cache.put(cacheKey, response);
      }
    })
    .catch(() => {})
    .finally(() => {
      warmingSet.delete(url);
    });
}

/**
 * Synthesize a 206 Partial Content Response from a full cached Response
 * Enables seamless playback of cached <video> and <audio> elements directly from Cache Storage
 */
async function createRangeResponse(response, rangeHeader) {
  const arrayBuffer = await response.clone().arrayBuffer();
  const totalLength = arrayBuffer.byteLength;

  // Parse Range header (e.g. "bytes=0-" or "bytes=1000-2000")
  const matches = /bytes=(\d*)-(\d*)/.exec(rangeHeader);
  let start = 0;
  let end = totalLength - 1;

  if (matches) {
    if (matches[1] !== '') {
      start = parseInt(matches[1], 10);
    }
    if (matches[2] !== '') {
      end = parseInt(matches[2], 10);
    }
  }

  // Validate bounds
  if (isNaN(start)) start = 0;
  if (isNaN(end) || end >= totalLength) end = totalLength - 1;

  if (start > end || start >= totalLength) {
    return new Response(null, {
      status: 416,
      statusText: 'Range Not Satisfiable',
      headers: {
        'Content-Range': `bytes */${totalLength}`
      }
    });
  }

  const slicedBuffer = arrayBuffer.slice(start, end + 1);
  const headers = new Headers(response.headers);
  headers.set('Content-Range', `bytes ${start}-${end}/${totalLength}`);
  headers.set('Content-Length', String(slicedBuffer.byteLength));
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Cache-Control', 'public, max-age=31536000, immutable');

  return new Response(slicedBuffer, {
    status: 206,
    statusText: 'Partial Content',
    headers: headers
  });
}

