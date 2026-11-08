import{t as e}from"./assetLoader.CHpMhIdz.js";var t=[{id:`the-cricketer`,aliases:[`asli-dhamaka`,`cricketer`],num:`01`,title:`The Cricketer`,subtitle:`धोनी बनने का भूत सवार था... लेकिन दिवाली बॉलर ने सीधा फुलटॉस पे क्लीन बोल्ड कर दिया!`,videoSrc:`./assets/videos/prank vid1.mp4`,thumbPoster:`./assets/images/prank_vid1_thumb.jpg`,isDefault:!1,badge:`NEW`,badgeType:`new`,emoji:`🏏`,thumbBg:`#1e2433`},{id:`magic`,aliases:[`bhoot-bungalow`],num:`02`,title:`Magic`,subtitle:`आंखों का ऐसा जादुई धोखा कि दोस्त 2 मिनट तक सोचेगा — ये सच में जादू था या मेरी लग गई!`,videoSrc:`./assets/videos/prank vid2.mp4`,thumbPoster:`./assets/images/prank_vid2_thumb.jpg`,isDefault:!1,badge:`MAGIC`,badgeType:`danger`,emoji:`🎩`,thumbBg:`#151722`},{id:`the-skyscraper`,aliases:[`aakhri-diya`,`skyscraper`],num:`03`,title:`The Skyscraper`,subtitle:`रॉकेट सीधा 50वीं मंज़िल छूने निकला है! दोस्त की चीख भी लिफ्ट से तेज़ ऊपर जाएगी.`,videoSrc:`./assets/videos/prank vid3.mp4`,thumbPoster:`./assets/images/prank_vid3_thumb.jpg`,isDefault:!0,badge:`DEFAULT`,badgeType:`default`,emoji:`🚀`,thumbBg:`#211a14`},{id:`kuch-khufiya`,aliases:[`raat-ka-mehmaan`,`khufiya`],num:`04`,title:`Kuch Khufiya`,subtitle:`टॉप सीक्रेट दिवाली मिशन! दोस्त को लगेगा नॉर्मल है, पर अंदर फुल 440 वोल्ट का झटका है.`,videoSrc:`./assets/videos/prank vid4.mp4`,thumbPoster:`./assets/images/prank_vid4_thumb.jpg`,isDefault:!1,badge:`TOP SECRET`,badgeType:`star`,emoji:`🤫`,thumbBg:`#131e1c`}];function n(e){if(!e)return t.find(e=>e.isDefault)||t[0];let n=e.trim().toLowerCase();return t.find(e=>e.id===n||e.id.replace(/-/g,``)===n.replace(/-/g,``)||e.aliases&&e.aliases.some(e=>e===n||e.replace(/-/g,``)===n.replace(/-/g,``)))||t.find(e=>e.isDefault)||t[0]}var r=class{constructor(e,t={}){this.container=e,this.options={videoSrc:`./assets/videos/VID_20261025_195022.mp4`,igniteTime:3,explosionTime:37.4,initialFrame:.2,...t},this.state=`idle`,this.callbacks={onReady:()=>{},onIgnite:()=>{},onProgress:e=>{},onExplode:()=>{}},this.videoEl=null,this.guideEl=null,this.triggerBtn=null,this.hasIgnited=!1,this.isMemePlaying=!1,this.igniteTimestamp=0,this.speedResetTimer=null,this.audioYeKaise=null,this.audioRukoJara=null,this.hasStartedAudio1=!1,this.hasStartedAudio2=!1,this.audio1Timer=null,this.audio2EndTimer=null,this.audio1TimeUpdateHandler=null,this.canvas=null,this.ctx=null,this.animRafId=null}init(e={}){this.callbacks={...this.callbacks,...e},this.render(),this.bindEvents(),this.prepareVideo()}render(){this.container.innerHTML=`
      <div class="bomb-stage bomb-video-stage" id="bomb-stage">
        
        <!-- Video Bomb Container with Feathered Edge Mask -->
        <div class="bomb-video-wrapper" id="bomb-video-wrapper">
          
          <!-- Background Glow Effect for Diwali Ambience -->
          <div class="bomb-ambient-glow" aria-hidden="true"></div>

          <!-- Video Element with Blend Mask -->
          <div class="video-blend-container" id="video-blend-container">
            <video
              id="intro-bomb-video"
              class="intro-bomb-video"
              src="${this.options.videoSrc}"
              preload="auto"
              playsinline
              webkit-playsinline
            ></video>

            <!-- Edge Vignette Overlay to blend light corners to pure black -->
            <div class="video-vignette-overlay" aria-hidden="true"></div>
          </div>

          <!-- Clickable Interactive Hitbox -->
          <button 
            class="bomb-video-trigger" 
            id="bomb-video-trigger" 
            type="button" 
            aria-label="Diwali Sutli Bomb - Click karo to ignite"
          ></button>

          <!-- 👆 Interactive Animated Hand Click Guide (User Requested) 👆 -->
          <div class="interactive-click-guide" id="interactive-click-guide" role="button" tabindex="0" aria-label="Click Here to ignite bomb">
            <!-- Radiating Rays / Arrows at the fingertip -->
            <img src="./assets/images/rays_only_gold.png" alt="" class="guide-rays" id="guide-rays" aria-hidden="true">

            <!-- Hand Pointer Graphic -->
            <img src="./assets/images/hand_only_gold.png" alt="" class="guide-hand" id="guide-hand" aria-hidden="true">

            <!-- "Click Here" Glowing Banner / Badge -->
            <div class="guide-click-badge" id="guide-click-badge">
              <span class="guide-badge-text">Click Here</span>
            </div>
          </div>

        </div>

      </div>
    `,this.stageEl=this.container.querySelector(`#bomb-stage`),this.wrapperEl=this.container.querySelector(`#bomb-video-wrapper`),this.videoEl=this.container.querySelector(`#intro-bomb-video`),this.guideEl=this.container.querySelector(`#interactive-click-guide`),this.triggerBtn=this.container.querySelector(`#bomb-video-trigger`)}renderBombFrame(){if(!this.canvas||!this.ctx||!this.videoEl)return;let e=this.ctx,t=this.canvas.width,n=this.canvas.height;if(e.clearRect(0,0,t,n),this.videoEl.readyState>=2){let r=(this.videoEl.videoWidth||t)/(this.videoEl.videoHeight||n),i=t,a=n,o=0,s=0;r>1?(i=n*r,o=(t-i)/2):(a=t/r,s=(n-a)/2),e.drawImage(this.videoEl,o,s,i,a),e.globalCompositeOperation=`destination-in`;let c=t*.5,l=n*.5,u=e.createRadialGradient(c,l,t*.3,c,l,t*.49);u.addColorStop(0,`rgba(0, 0, 0, 1)`),u.addColorStop(.85,`rgba(0, 0, 0, 0.95)`),u.addColorStop(1,`rgba(0, 0, 0, 0)`),e.fillStyle=u,e.fillRect(0,0,t,n),e.globalCompositeOperation=`source-over`}}startCanvasLoop(){this.animRafId&&cancelAnimationFrame(this.animRafId);let e=()=>{this.state===`burning`&&this.videoEl&&!this.videoEl.paused&&!this.videoEl.ended&&(this.renderBombFrame(),this.animRafId=requestAnimationFrame(e))};this.animRafId=requestAnimationFrame(e)}stopCanvasLoop(){this.animRafId&&=(cancelAnimationFrame(this.animRafId),null)}prepareVideo(){if(!this.videoEl)return;this.videoEl.load();let e=()=>{this.videoEl.currentTime=this.options.initialFrame,this.videoEl.pause(),this.state=`settled`,this.guideEl&&this.guideEl.classList.add(`visible`),this.triggerBtn&&this.triggerBtn.classList.add(`clickable`),this.callbacks.onReady()};this.videoEl.readyState>=1?e():this.videoEl.addEventListener(`loadedmetadata`,e,{once:!0})}bindEvents(){let e=e=>{e&&(e.preventDefault(),e.stopPropagation()),this.hasIgnited||this.ignite()};this.triggerBtn&&(this.triggerBtn.addEventListener(`click`,e),this.triggerBtn.addEventListener(`keydown`,t=>{(t.key===`Enter`||t.key===` `)&&e(t)})),this.guideEl&&(this.guideEl.addEventListener(`click`,e),this.guideEl.addEventListener(`keydown`,t=>{(t.key===`Enter`||t.key===` `)&&e(t)})),this.wrapperEl&&this.wrapperEl.addEventListener(`click`,e),this.videoEl&&(this.videoEl.addEventListener(`timeupdate`,()=>{if(this.state!==`burning`)return;let e=this.videoEl.currentTime,t=this.options.igniteTime,n=this.options.explosionTime,r=(this.igniteTimestamp?(Date.now()-this.igniteTimestamp)/1e3:0)<8?3:1.5;if(this.videoEl.playbackRate!==r&&(this.videoEl.playbackRate=r),e>=t){let r=Math.min((e-t)/(n-t),1);this.callbacks.onProgress(r)}e>=Math.max(t,n-1)&&!this.hasStartedAudio1&&this.startAudioSequence(),e>=n&&this.handleFuseFizzled()}),this.videoEl.addEventListener(`ended`,()=>{this.state===`burning`&&(this.hasStartedAudio1||this.startAudioSequence(),this.handleFuseFizzled())}),this.videoEl.addEventListener(`error`,e=>{console.warn(`Intro video error:`,e),this.triggerExplosion()}))}async ignite(){if(!this.hasIgnited){if(this.hasIgnited=!0,this.state=`burning`,this.hasStartedAudio1=!1,this.hasStartedAudio2=!1,this.audio1Timer&&=(clearTimeout(this.audio1Timer),null),this.audio2EndTimer&&=(clearTimeout(this.audio2EndTimer),null),this.audioYeKaise||=e.getAudio(`./assets/audio/ye_kaise_ho_gaya.mp3`,1),this.audioRukoJara||=e.getAudio(`./assets/audio/ruko_jara_sabar_karo.mp3`,1),this.guideEl&&(this.guideEl.style.display=`none`,this.guideEl.remove()),this.triggerBtn&&this.triggerBtn.classList.remove(`clickable`),this.videoEl)try{this.igniteTimestamp=Date.now(),this.videoEl.currentTime=this.options.igniteTime,this.videoEl.muted=!1,this.videoEl.volume=.7,this.videoEl.playbackRate=3,await this.videoEl.play(),this.startCanvasLoop(),this.speedResetTimer&&clearTimeout(this.speedResetTimer),this.speedResetTimer=setTimeout(()=>{this.videoEl&&this.state===`burning`&&(this.videoEl.playbackRate=1.5)},8e3)}catch(e){console.warn(`Autoplay with audio blocked, attempting muted play:`,e);try{this.videoEl.muted=!0,this.videoEl.playbackRate=3,await this.videoEl.play(),this.speedResetTimer&&clearTimeout(this.speedResetTimer),this.speedResetTimer=setTimeout(()=>{this.videoEl&&this.state===`burning`&&(this.videoEl.playbackRate=1.5)},8e3)}catch(e){console.error(`Video playback failed:`,e)}}this.callbacks.onIgnite()}}startAudioSequence(){if(this.hasStartedAudio1)return;this.hasStartedAudio1=!0,this.isMemePlaying=!0;try{this.audioYeKaise.currentTime=0,this.audioYeKaise.volume=1,this.audioYeKaise.play().catch(e=>{console.warn(`Audio 1 play error:`,e),this.startSecondMemeAudio()})}catch(e){console.warn(`Audio 1 play exception:`,e),this.startSecondMemeAudio()}let e=()=>{let e=this.audioYeKaise.duration&&!isNaN(this.audioYeKaise.duration)&&isFinite(this.audioYeKaise.duration)?this.audioYeKaise.duration:1.992,t=Math.max(50,(e-1)*1e3);this.audio1Timer&&clearTimeout(this.audio1Timer),this.audio1Timer=setTimeout(()=>{this.startSecondMemeAudio()},t)};this.audioYeKaise.readyState>=1||this.audioYeKaise.addEventListener(`loadedmetadata`,e,{once:!0}),e(),this.audio1TimeUpdateHandler&&this.audioYeKaise.removeEventListener(`timeupdate`,this.audio1TimeUpdateHandler),this.audio1TimeUpdateHandler=()=>{let e=this.audioYeKaise.duration||1.992;this.audioYeKaise.currentTime>=Math.max(0,e-1)&&(this.audio1TimeUpdateHandler&&=(this.audioYeKaise.removeEventListener(`timeupdate`,this.audio1TimeUpdateHandler),null),this.startSecondMemeAudio())},this.audioYeKaise.addEventListener(`timeupdate`,this.audio1TimeUpdateHandler),this.audioYeKaise.addEventListener(`ended`,()=>{this.audio1TimeUpdateHandler&&=(this.audioYeKaise.removeEventListener(`timeupdate`,this.audio1TimeUpdateHandler),null),this.startSecondMemeAudio()},{once:!0})}startSecondMemeAudio(){if(!this.hasStartedAudio2){this.hasStartedAudio2=!0,this.audio1Timer&&=(clearTimeout(this.audio1Timer),null);try{this.audioRukoJara.currentTime=0,this.audioRukoJara.volume=1,this.audioRukoJara.play().catch(e=>{console.warn(`Audio 2 play error:`,e),this.triggerExplosion()})}catch(e){console.warn(`Audio 2 play exception:`,e),this.triggerExplosion()}this.audioRukoJara.addEventListener(`ended`,()=>{this.audio2EndTimer&&clearTimeout(this.audio2EndTimer),this.audio2EndTimer=setTimeout(()=>{this.triggerExplosion()},250)},{once:!0})}}handleFuseFizzled(){this.state!==`fizzled`&&this.state!==`exploded`&&(this.state=`fizzled`,this.videoEl&&!this.videoEl.paused&&(this.videoEl.playbackRate=1,this.videoEl.pause()),this.hasStartedAudio1||this.startAudioSequence())}triggerExplosion(){this.state!==`exploded`&&(this.state=`exploded`,this.videoEl&&(this.videoEl.playbackRate=1,this.videoEl.pause()),setTimeout(()=>{this.stageEl&&(this.stageEl.style.display=`none`)},1e3),this.callbacks.onExplode())}destroy(){this.videoEl&&(this.videoEl.playbackRate=1,this.videoEl.pause(),this.videoEl.src=``),this.audio1Timer&&=(clearTimeout(this.audio1Timer),null),this.audio2EndTimer&&=(clearTimeout(this.audio2EndTimer),null),this.audio1TimeUpdateHandler&&this.audioYeKaise&&(this.audioYeKaise.removeEventListener(`timeupdate`,this.audio1TimeUpdateHandler),this.audio1TimeUpdateHandler=null),this.audioYeKaise&&(this.audioYeKaise.pause(),this.audioYeKaise.currentTime=0),this.audioRukoJara&&(this.audioRukoJara.pause(),this.audioRukoJara.currentTime=0),this.speedResetTimer&&=(clearTimeout(this.speedResetTimer),null),this.hasStartedAudio1=!1,this.hasStartedAudio2=!1,this.isMemePlaying=!1,this.container.innerHTML=``}},i=class{constructor(e,t={}){if(this.container=e,this.options={animationDuration:1800,...t},this.callbacks={onReady:()=>{},onOpening:()=>{},onOpened:()=>{},...t.callbacks},this.canvas=null,this.ctx=null,this.openBtn=null,this.openActionEl=null,this.posterBg=null,this.cloudEl=null,this.loadingWrapEl=null,this.loadingBarEl=null,this.loadingPctEl=null,this.isLoadingFrontAssets=!1,this.isOpened=!1,this.displayedProgress=0,this.loadStartTime=0,this.loadingRafId=null,this.animationRafId=null,this.safetyTimer=null,this.frames=[],this.currentFrameIdx=0,this.recipientName=t.recipientName||``,!this.recipientName&&typeof window<`u`){let e=new URLSearchParams(window.location.search);this.recipientName=(e.get(`name`)||e.get(`to`)||e.get(`n`)||``).trim()}}init(t={}){this.callbacks={...this.callbacks,...t},this.container&&(this.canvas=this.container.querySelector(`#curtain-canvas`),this.openBtn=this.container.querySelector(`#curtain-open-btn`),this.openActionEl=this.container.querySelector(`#curtain-open-action`),this.posterBg=this.container.querySelector(`#curtain-poster-bg`),this.cloudEl=this.container.querySelector(`#curtain-cloud-callout`),this.loadingWrapEl=this.container.querySelector(`#curtain-loading-wrap`),this.loadingBarEl=this.container.querySelector(`#curtain-loading-bar`),this.loadingPctEl=this.container.querySelector(`#curtain-loading-pct`),this.canvas&&(this.ctx=this.canvas.getContext(`2d`,{alpha:!0}),this.canvas.width=1280,this.canvas.height=720),this.setupCloudCallout(),this.bindEvents(),e.loadCurtainFrames().then(e=>{this.frames=e,!this.isOpened&&this.ctx&&e[0]&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(e[0],0,0,this.canvas.width,this.canvas.height))}),typeof this.callbacks.onReady==`function`&&this.callbacks.onReady())}setupCloudCallout(){if(this.cloudEl){if(this.recipientName){let e=this.cloudEl.querySelector(`.curtain-cloud-name`);if(e){e.textContent=this.recipientName;let t=this.recipientName.length;t>18?e.style.fontSize=`clamp(1.1rem, 2.2vw, 1.4rem)`:t>12?e.style.fontSize=`clamp(1.35rem, 2.7vw, 1.7rem)`:t>7?e.style.fontSize=`clamp(1.6rem, 3.4vw, 2.05rem)`:e.style.fontSize=`clamp(1.9rem, 4.2vw, 2.5rem)`}this.cloudEl.style.display=`flex`,this.cloudEl.removeAttribute(`aria-hidden`)}else this.cloudEl.style.display=`none`,this.cloudEl.setAttribute(`aria-hidden`,`true`)}}bindEvents(){let e=e=>{e&&e.stopPropagation(),this.startLoadingAndOpen()};this.openBtn&&this.openBtn.addEventListener(`click`,e),this.cloudEl&&(this.cloudEl.addEventListener(`click`,t=>{e(t)}),this.cloudEl.style.cursor=`pointer`),this.container&&this.container.addEventListener(`click`,e=>{!this.isOpened&&!this.isLoadingFrontAssets&&this.startLoadingAndOpen()})}startLoadingAndOpen(){if(this.isOpened||this.isLoadingFrontAssets)return;this.isLoadingFrontAssets=!0;let{progress:t,isReady:n}=e.getFrontLoadingProgress();this.loadingWrapEl&&(this.loadingWrapEl.style.display=`flex`,this.loadingWrapEl.offsetHeight,this.loadingWrapEl.classList.add(`is-visible`),this.loadingWrapEl.removeAttribute(`aria-hidden`)),this.openBtn&&this.openBtn.classList.add(`is-loading`),this.loadStartTime=performance.now(),this.displayedProgress=0,this.renderProgressBar(0),this.tickLoadingProgress()}tickLoadingProgress(){if(this.isOpened)return;let t=performance.now()-this.loadStartTime,{progress:n,isReady:r}=e.getFrontLoadingProgress(),i=r?280:500,a=Math.min(1,t/i),o=r?a:Math.min(a,Math.max(.15,n));t>4500&&(o=1);let s=.05+(o-this.displayedProgress)*.28;this.displayedProgress=Math.min(o,this.displayedProgress+s),this.renderProgressBar(this.displayedProgress),this.displayedProgress>=.99&&(r||t>4500)&&t>=i?(this.displayedProgress=1,this.renderProgressBar(1),setTimeout(()=>{this.completeLoadingAndOpen()},120)):this.loadingRafId=requestAnimationFrame(()=>this.tickLoadingProgress())}renderProgressBar(e){let t=Math.min(100,Math.max(0,Math.round(e*100)));this.loadingBarEl&&(this.loadingBarEl.style.width=`${t}%`,this.loadingBarEl.setAttribute(`aria-valuenow`,String(t))),this.loadingPctEl&&(this.loadingPctEl.textContent=`${t}%`)}completeLoadingAndOpen(){this.loadingRafId&&=(cancelAnimationFrame(this.loadingRafId),null),this.isLoadingFrontAssets=!1,this.openCurtain()}openCurtain(){if(this.isOpened)return;this.isOpened=!0,this.openActionEl&&this.openActionEl.classList.add(`curtain-action-dismiss`),this.posterBg&&(this.posterBg.style.opacity=`0`),typeof this.callbacks.onOpening==`function`&&this.callbacks.onOpening(),this.safetyTimer=setTimeout(()=>{this.finishCurtain()},3200),this.frames=e.getCurtainFrames();let t=this.frames.length||47,n=this.options.animationDuration,r=performance.now(),i=e=>{if(!this.container)return;let a=e-r,o=Math.min(1,a/n),s=Math.min(t-1,Math.floor(o*t)),c=this.frames[s];c&&this.ctx&&this.canvas&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(c,0,0,this.canvas.width,this.canvas.height)),o<1?this.animationRafId=requestAnimationFrame(i):this.finishCurtain()};this.animationRafId=requestAnimationFrame(i)}finishCurtain(){this.safetyTimer&&=(clearTimeout(this.safetyTimer),null),this.animationRafId&&=(cancelAnimationFrame(this.animationRafId),null),this.loadingRafId&&=(cancelAnimationFrame(this.loadingRafId),null),this.container&&(this.container.classList.add(`curtain-dissolve`),setTimeout(()=>{this.container&&=(this.container.style.display=`none`,this.container.setAttribute(`aria-hidden`,`true`),this.container.remove(),null),typeof this.callbacks.onOpened==`function`&&this.callbacks.onOpened()},350))}},a=new class{constructor(){this.ctx=null,this.sizzleNode=null,this.sizzleGain=null,this.isMuted=!1}ensureContext(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume().catch(()=>{}),this.ctx}startFuseSizzle(){let e=this.ensureContext();if(!e)return;this.stopFuseSizzle();let t=e.sampleRate*2,n=e.createBuffer(1,t,e.sampleRate),r=n.getChannelData(0),i=0,a=0,o=0;for(let e=0;e<t;e++){let t=Math.random()*2-1;i=.99886*i+t*.0555179,a=.99332*a+t*.0750759,o=.969*o+t*.153852;let n=i+a+o+t*.5362;Math.random()<.008&&(n+=(Math.random()*2-1)*3.5),r[e]=n*.15}let s=e.createBufferSource();s.buffer=n,s.loop=!0;let c=e.createBiquadFilter();c.type=`highpass`,c.frequency.setValueAtTime(1200,e.currentTime);let l=e.createBiquadFilter();l.type=`bandpass`,l.frequency.setValueAtTime(3200,e.currentTime),l.Q.setValueAtTime(3,e.currentTime);let u=e.createGain();u.gain.setValueAtTime(.01,e.currentTime),u.gain.linearRampToValueAtTime(.28,e.currentTime+.3),s.connect(c),c.connect(l),l.connect(u),u.connect(e.destination),s.start(),this.sizzleNode=s,this.sizzleGain=u}stopFuseSizzle(){if(this.sizzleGain&&this.ctx)try{this.sizzleGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.05),setTimeout(()=>{this.sizzleNode&&=(this.sizzleNode.stop(),this.sizzleNode.disconnect(),null)},60)}catch{}}playExplosion(){let e=this.ensureContext();if(!e)return;this.stopFuseSizzle();let t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type=`sine`,n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(25,t+.6),r.gain.setValueAtTime(.8,t),r.gain.exponentialRampToValueAtTime(.001,t+.7),n.connect(r),r.connect(e.destination),n.start(t),n.stop(t+.7);let i=Math.floor(e.sampleRate*.8),a=e.createBuffer(1,i,e.sampleRate),o=a.getChannelData(0);for(let t=0;t<i;t++)o[t]=(Math.random()*2-1)*Math.exp(-t/(e.sampleRate*.18));let s=e.createBufferSource();s.buffer=a;let c=e.createBiquadFilter();c.type=`lowpass`,c.frequency.setValueAtTime(800,t),c.frequency.exponentialRampToValueAtTime(120,t+.5);let l=e.createGain();l.gain.setValueAtTime(.7,t),l.gain.exponentialRampToValueAtTime(.001,t+.8),s.connect(c),c.connect(l),l.connect(e.destination),s.start(t)}playRoll(){let e=this.ensureContext();if(!e)return;let t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type=`triangle`,n.frequency.setValueAtTime(65,t),n.frequency.exponentialRampToValueAtTime(45,t+.8),r.gain.setValueAtTime(.05,t),r.gain.linearRampToValueAtTime(.001,t+.9),n.connect(r),r.connect(e.destination),n.start(t),n.stop(t+.9)}playSpotlightMove(){let e=this.ensureContext();if(!e)return;let t=e.currentTime,n=e.createOscillator(),r=e.createOscillator(),i=e.createGain();n.type=`sine`,r.type=`sine`,n.frequency.setValueAtTime(1400,t),n.frequency.exponentialRampToValueAtTime(2100,t+.16),n.frequency.exponentialRampToValueAtTime(1550,t+.38),r.frequency.setValueAtTime(1750,t),r.frequency.exponentialRampToValueAtTime(2600,t+.16),r.frequency.exponentialRampToValueAtTime(1950,t+.38),i.gain.setValueAtTime(.001,t),i.gain.linearRampToValueAtTime(.18,t+.07),i.gain.exponentialRampToValueAtTime(.001,t+.42),n.connect(i),r.connect(i);let a=Math.floor(e.sampleRate*.42),o=e.createBuffer(1,a,e.sampleRate),s=o.getChannelData(0);for(let e=0;e<a;e++)s[e]=(Math.random()*2-1)*Math.sin(e/a*Math.PI);let c=e.createBufferSource();c.buffer=o;let l=e.createBiquadFilter();l.type=`bandpass`,l.frequency.setValueAtTime(2400,t),l.frequency.exponentialRampToValueAtTime(3200,t+.16),l.frequency.exponentialRampToValueAtTime(2e3,t+.38),l.Q.setValueAtTime(4.2,t);let u=e.createGain();u.gain.setValueAtTime(.001,t),u.gain.linearRampToValueAtTime(.24,t+.07),u.gain.exponentialRampToValueAtTime(.001,t+.42),c.connect(l),l.connect(u);let d=e.createGain();d.gain.setValueAtTime(1,t),i.connect(d),u.connect(d),d.connect(e.destination),n.start(t),r.start(t),c.start(t),n.stop(t+.45),r.stop(t+.45),c.stop(t+.45)}playSpotlightExpandWhoosh(){let e=this.ensureContext();if(!e)return;let t=e.currentTime,n=.95,r=Math.floor(e.sampleRate*n),i=e.createBuffer(1,r,e.sampleRate),a=i.getChannelData(0);for(let e=0;e<r;e++){let t=e/r,n=Math.sin(t*Math.PI);a[e]=(Math.random()*2-1)*n}let o=e.createBufferSource();o.buffer=i;let s=e.createBiquadFilter();s.type=`lowpass`,s.frequency.setValueAtTime(220,t),s.frequency.exponentialRampToValueAtTime(3200,t+n*.55),s.frequency.exponentialRampToValueAtTime(1200,t+n),s.Q.setValueAtTime(2.2,t);let c=e.createOscillator();c.type=`sine`,c.frequency.setValueAtTime(75,t),c.frequency.exponentialRampToValueAtTime(140,t+n*.4),c.frequency.exponentialRampToValueAtTime(50,t+n);let l=e.createGain();l.gain.setValueAtTime(.001,t),l.gain.linearRampToValueAtTime(.38,t+n*.4),l.gain.exponentialRampToValueAtTime(.001,t+n),c.connect(l),l.connect(e.destination);let u=e.createGain();u.gain.setValueAtTime(.001,t),u.gain.linearRampToValueAtTime(.58,t+n*.45),u.gain.exponentialRampToValueAtTime(.001,t+n),o.connect(s),s.connect(u),u.connect(e.destination),c.start(t),o.start(t),c.stop(t+n),o.stop(t+n)}},o=class{constructor(e,t={}){this.overlayEl=e,this.canvas=e,this.ctx=e&&typeof e.getContext==`function`?e.getContext(`2d`):null,this.options=t,this.dpr=1,this.width=0,this.height=0,this.rafId=null,this.startTime=null,this.isPlaying=!1,this.onCompleteCallback=null,this.playedSoundStages=new Set,this.boundTick=this.tick.bind(this),this.boundResize=this.handleResize.bind(this),this.waypoints=null,this.fairyLightsRevealed=!1}init(){this.overlayEl&&(this.handleResize(),this.ctx&&this.canvas&&(this.ctx.fillStyle=`rgba(0, 0, 0, 1)`,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)),this.overlayEl.style.display=`block`,this.overlayEl.style.opacity=`1`,window.addEventListener(`resize`,this.boundResize))}handleResize(){this.dpr=Math.min(window.devicePixelRatio||1,2),this.width=window.innerWidth,this.height=window.innerHeight,this.canvas&&this.ctx&&(this.canvas.width=Math.round(this.width*this.dpr),this.canvas.height=Math.round(this.height*this.dpr),!this.isPlaying&&this.overlayEl&&this.overlayEl.classList.contains(`is-dark-curtain`)&&(this.ctx.fillStyle=`rgba(0, 0, 0, 1)`,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height))),this.isPlaying&&(this.waypoints=this.calculateWaypoints())}renderCanvas(e,t,n,r,i){if(!this.canvas||!this.ctx)return;let a=this.ctx,o=this.dpr||1,s=this.canvas.width,c=this.canvas.height;if(a.clearRect(0,0,s,c),!(i<=0)){if(a.save(),a.scale(o,o),n<=2)a.fillStyle=`rgba(0, 0, 0, ${i})`,a.fillRect(0,0,this.width,this.height);else{let o=a.createRadialGradient(e,t,Math.max(0,n*.4),e,t,Math.max(1,n));if(o.addColorStop(0,`rgba(0, 0, 0, 0)`),o.addColorStop(.5,`rgba(0, 0, 0, ${.4*i})`),o.addColorStop(.85,`rgba(0, 0, 0, ${.88*i})`),o.addColorStop(1,`rgba(0, 0, 0, ${i})`),a.fillStyle=o,a.fillRect(0,0,this.width,this.height),r>.01){a.globalCompositeOperation=`screen`;let o=a.createRadialGradient(e,t,0,e,t,n*.9);o.addColorStop(0,`rgba(255, 255, 255, ${.28*r*i})`),o.addColorStop(.35,`rgba(255, 255, 255, ${.08*r*i})`),o.addColorStop(.7,`rgba(255, 255, 255, ${.02*r*i})`),o.addColorStop(1,`rgba(255, 255, 255, 0)`),a.fillStyle=o,a.fillRect(0,0,this.width,this.height)}}a.restore()}}calculateWaypoints(){let e=typeof window<`u`&&(window.innerWidth<768||window.matchMedia(`(max-width: 767px)`).matches),t=document.querySelector(`.hanuman-sun-orb`)||document.querySelector(`.sacred-silhouette-stage`),n=document.querySelector(`.namaste-img`)||document.querySelector(`.namaste-artwork-container`),r=document.querySelector(`.swagatam-calligraphy-img`)||document.querySelector(`.landing-welcome-title`),i=document.querySelector(`.sacred-silhouette-stage`),a=document.querySelector(`.bomb-video-wrapper`)||document.getElementById(`bomb-container`),o=window.innerWidth,s=window.innerHeight,c={x:o*.22,y:s*.58};if(t){let e=t.getBoundingClientRect();e.width>0&&e.height>0&&(c={x:e.left+e.width*.5,y:e.top+e.height*.5})}if(e){let e={x:o*.6,y:s*.18};if(n){let t=n.getBoundingClientRect();t.width>0&&t.height>0&&(e={x:t.left+t.width*.5,y:t.top+t.height*.5})}let t={x:o*.55,y:s*.08};if(r){let e=r.getBoundingClientRect();e.width>0&&e.height>0&&(t={x:e.left+e.width*.55,y:e.top+e.height*.25})}let l={x:o*.68,y:s*.88};if(i){let e=i.getBoundingClientRect();e.width>0&&e.height>0&&(l={x:Math.max(60,Math.min(e.left+e.width*.68,o-50)),y:Math.min(s-50,e.top+e.height*.82)})}let u={x:o*.28,y:s*.35};if(a){let e=a.getBoundingClientRect();e.width>0&&e.height>0&&(u={x:e.left+e.width*.5,y:e.top+e.height*.5})}return{isMobile:!0,p1:c,p2:e,p3:t,p4:l,p5:u}}{let e={x:o*.5,y:s*.22};if(r){let t=r.getBoundingClientRect();t.width>0&&t.height>0&&(e={x:t.left+t.width*.5,y:t.top+t.height*.42})}let t={x:o*.46,y:s*.72};if(i){let e=i.getBoundingClientRect();e.width>0&&e.height>0&&(t={x:Math.max(70,Math.min(e.left+e.width*.49,o*.58)),y:Math.min(s-70,e.top+e.height*.68)})}let n={x:o*.75,y:s*.58};if(a){let e=a.getBoundingClientRect();e.width>0&&e.height>0&&(n={x:e.left+e.width*.5,y:e.top+e.height*.5})}return{isMobile:!1,p1:c,p2:e,p3:t,p4:n}}}getNormalRadius(){return typeof window<`u`&&(window.innerWidth<768||window.matchMedia(`(max-width: 767px)`).matches)?Math.max(115,Math.min(window.innerWidth*.32,140)):Math.max(155,Math.min(window.innerWidth*.16,185))}startTour(e){this.overlayEl?(this.onCompleteCallback=e,this.waypoints=this.calculateWaypoints(),this.isPlaying=!0,this.startTime=performance.now(),this.playedSoundStages.clear(),a.ensureContext(),this.overlayEl.classList.remove(`is-dark-curtain`),this.handleResize(),this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.boundTick)):typeof e==`function`&&e()}tick(e){if(!this.isPlaying)return;this.startTime||=e;let t=(e-this.startTime)/1e3,n=this.waypoints||this.calculateWaypoints(),r=this.getNormalRadius(),i=n.p1.x,o=n.p1.y,s=r,c=1,l=1;if(n.isMobile){let{p1:e,p2:u,p3:d,p4:f,p5:p}=n;if(t<.5){let n=1-(1-t/.5)**3;i=e.x,o=e.y,s=r*n,c=n}else if(t<1)i=e.x,o=e.y,s=r,c=1;else if(t<2.1){let n=(t-1)/1.1,a=n<.5?4*n*n*n:1-(-2*n+2)**3/2;i=e.x+(u.x-e.x)*a,o=e.y+(u.y-e.y)*a,s=r,c=1}else if(t<2.5)i=u.x,o=u.y,s=r,c=1;else if(t<3.3){let e=(t-2.5)/.8,n=e<.5?4*e*e*e:1-(-2*e+2)**3/2;i=u.x+(d.x-u.x)*n,o=u.y+(d.y-u.y)*n,s=r,c=1}else if(t<3.7)i=d.x,o=d.y,s=r,c=1;else if(t<5){let e=(t-3.7)/1.3,n=e<.5?4*e*e*e:1-(-2*e+2)**3/2;i=d.x+(f.x-d.x)*n,o=d.y+(f.y-d.y)*n,s=r,c=1}else if(t<5.4)i=f.x,o=f.y,s=r,c=1;else if(t<6.7){let e=(t-5.4)/1.3,n=e<.5?4*e*e*e:1-(-2*e+2)**3/2;i=f.x+(p.x-f.x)*n,o=f.y+(p.y-f.y)*n,s=r,c=1}else if(t<7.7){i=p.x,o=p.y;let e=Math.sin((t-6.7)*7)*.04;s=r*(1+e),c=1+e*2}else if(t<8.5){this.playedSoundStages.has(`m_expand_whoosh`)||(this.playedSoundStages.add(`m_expand_whoosh`),a.playSpotlightExpandWhoosh());let e=(t-7.7)/.8,n=1-(1-e)**4;i=p.x,o=p.y,s=r+(Math.max(window.innerWidth,window.innerHeight)*1.5-r)*n,c=Math.max(0,1-e*1.6),e>.4&&this.revealFairyLights(),e>.6&&(l=Math.max(0,1-(e-.6)/.4))}else{this.finishTour();return}}else{let{p1:e,p2:u,p3:d,p4:f}=n;if(t<.6){let n=1-(1-t/.6)**3;i=e.x,o=e.y,s=r*n,c=n}else if(t<1.2)i=e.x,o=e.y,s=r,c=1;else if(t<2.5){let n=(t-1.2)/1.3,a=n<.5?4*n*n*n:1-(-2*n+2)**3/2;i=e.x+(u.x-e.x)*a,o=e.y+(u.y-e.y)*a,s=r,c=1}else if(t<3)i=u.x,o=u.y,s=r,c=1;else if(t<4.3){let e=(t-3)/1.3,n=e<.5?4*e*e*e:1-(-2*e+2)**3/2;i=u.x+(d.x-u.x)*n,o=u.y+(d.y-u.y)*n,s=r,c=1}else if(t<4.8)i=d.x,o=d.y,s=r,c=1;else if(t<6.1){let e=(t-4.8)/1.3,n=e<.5?4*e*e*e:1-(-2*e+2)**3/2;i=d.x+(f.x-d.x)*n,o=d.y+(f.y-d.y)*n,s=r,c=1}else if(t<7.2){i=f.x,o=f.y;let e=Math.sin((t-6.1)*7)*.04;s=r*(1+e),c=1+e*2}else if(t<8.1){this.playedSoundStages.has(`pc_expand_whoosh`)||(this.playedSoundStages.add(`pc_expand_whoosh`),a.playSpotlightExpandWhoosh());let e=(t-7.2)/.9,n=1-(1-e)**4;i=f.x,o=f.y,s=r+(Math.max(window.innerWidth,window.innerHeight)*1.5-r)*n,c=Math.max(0,1-e*1.6),e>.4&&this.revealFairyLights(),e>.6&&(l=Math.max(0,1-(e-.6)/.4))}else{this.finishTour();return}}this.renderCanvas(i,o,s,c,l),this.rafId=requestAnimationFrame(this.boundTick)}revealFairyLights(){this.fairyLightsRevealed||(this.fairyLightsRevealed=!0,this.overlayEl&&this.overlayEl.classList.add(`torch-tour-complete`),document.body.classList.remove(`fairy-lights-waiting`),document.body.classList.add(`fairy-lights-revealed`))}finishTour(){this.isPlaying=!1,this.revealFairyLights(),this.rafId&&=(cancelAnimationFrame(this.rafId),null),window.removeEventListener(`resize`,this.boundResize),this.overlayEl&&(this.overlayEl.style.opacity=`0`,this.overlayEl.style.pointerEvents=`none`,setTimeout(()=>{this.overlayEl.style.display=`none`},300)),typeof this.onCompleteCallback==`function`&&(this.onCompleteCallback(),this.onCompleteCallback=null)}destroy(){this.revealFairyLights(),this.finishTour(),this.overlayEl&&this.overlayEl.remove()}};function s(){return typeof window>`u`?!1:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768||window.matchMedia(`(max-width: 767px)`).matches}var c=class{constructor(){this.stageEl=document.getElementById(`entrance-fireworks-stage`),this.videoEl=document.getElementById(`entrance-fireworks-video`),this.memeVideoWrapperEl=document.getElementById(`floating-meme-video-wrapper`),this.memeVideoEl=document.getElementById(`floating-meme-video`),this.memeStageEl=document.getElementById(`faah-meme-stage`),this.memeCardEl=document.getElementById(`faah-meme-card`),this.skipHintEl=document.getElementById(`fireworks-skip-hint`),this.audioFaah=null,this.rocketAudio=null,this.isPlaying=!1,this.hasEnded=!1,this.faahAlreadyPlayed=!1,this.onCompleteCallback=null,this.fallbackTimer=null,this.memeVideoTimer=null,this.faahEarlyTimer=null,this.isMemeVideoPlaying=!1}init(){if(!this.videoEl)return;let t=s(),n=t?`./assets/videos/Mobile_Firework.mp4`:`./assets/videos/Fireworks_exploding_in_dark_sky_20261027144930.mp4`,r=e.getVideoBlobUrl(n);this.videoEl.src=r||n,this.videoEl.preload=`auto`,this.videoEl.playsInline=!0,this.videoEl.muted=t,t||(this.videoEl.volume=.5);try{this.videoEl.load()}catch{}if(this.memeVideoEl){this.memeVideoEl.src&&this.memeVideoEl.src.includes(`happy%20diwali%20meme.mp4`)||(this.memeVideoEl.src=`./assets/videos/happy diwali meme.mp4`),this.memeVideoEl.preload=`auto`,this.memeVideoEl.playsInline=!0,this.memeVideoEl.volume=1,this.memeVideoEl.muted=!1;try{this.memeVideoEl.load()}catch{}this.memeVideoEl.addEventListener(`timeupdate`,()=>{this.isMemeVideoPlaying&&!this.faahAlreadyPlayed&&this.memeVideoEl.duration>1&&this.memeVideoEl.currentTime>=this.memeVideoEl.duration-.5&&this.playFaahAudioEarly()}),this.memeVideoEl.addEventListener(`ended`,()=>{this.finishFireworks()}),this.memeVideoEl.addEventListener(`error`,e=>{console.warn(`Meme video error:`,e),this.videoEl&&this.videoEl.ended&&this.finishFireworks()})}this.stageEl&&this.stageEl.addEventListener(`click`,()=>{this.isPlaying&&!this.hasEnded&&this.finishFireworks()}),this.videoEl.addEventListener(`ended`,()=>{this.isMemeVideoPlaying||this.finishFireworks()}),this.videoEl.addEventListener(`error`,e=>{console.warn(`Fireworks video error:`,e),this.isMemeVideoPlaying||this.finishFireworks()})}async startFireworks(t){if(this.onCompleteCallback=t,!this.videoEl){this.playFaahMemeMoment();return}this.isPlaying=!0,this.faahAlreadyPlayed=!1,this.stageEl&&this.stageEl.classList.add(`visible`),this.fallbackTimer&&clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(()=>{this.isPlaying&&!this.hasEnded&&this.finishFireworks()},1e4);let n=s(),r=n?`./assets/videos/Mobile_Firework.mp4`:`./assets/videos/Fireworks_exploding_in_dark_sky_20261027144930.mp4`;try{let t=await e.loadVideoBlob(r);t&&this.videoEl&&this.videoEl.src!==t&&(this.videoEl.src=t)}catch{}try{let t=await e.loadVideoBlob(`./assets/videos/happy diwali meme.mp4`);t&&this.memeVideoEl&&this.memeVideoEl.src!==t&&(this.memeVideoEl.src=t)}catch{}if(this.audioFaah||=e.getAudio(`./assets/audio/faaah.mp3`,.8),n&&!this.rocketAudio&&(this.rocketAudio=e.getAudio(`./assets/audio/rocket_firework.wav`,.85)),n&&this.rocketAudio)try{this.rocketAudio.currentTime=0,this.rocketAudio.volume=1,this.rocketAudio.play().catch(e=>console.warn(`Rocket audio play error:`,e)),this.videoEl.onpause=()=>{this.rocketAudio&&!this.hasEnded&&this.rocketAudio.pause()},this.videoEl.onplay=()=>{this.rocketAudio&&!this.hasEnded&&(this.rocketAudio.currentTime=this.videoEl.currentTime,this.rocketAudio.play().catch(()=>{}))}}catch{}let i=n?350:0;this.memeVideoTimer&&clearTimeout(this.memeVideoTimer),i===0?this.startMemeVideo():this.memeVideoTimer=setTimeout(()=>{this.startMemeVideo()},i);try{await this.videoEl.play()}catch(e){console.warn(`Fireworks play with sound blocked, trying muted:`,e);try{this.videoEl.muted=!0,await this.videoEl.play()}catch(e){console.warn(`Fireworks video playback error:`,e),this.isMemeVideoPlaying||this.finishFireworks()}}}async startMemeVideo(){if(this.isPlaying&&!this.hasEnded&&this.memeVideoEl){this.isMemeVideoPlaying=!0,this.memeVideoWrapperEl&&this.memeVideoWrapperEl.classList.add(`active`);try{this.memeVideoEl.currentTime=0,this.memeVideoEl.volume=1,this.memeVideoEl.muted=!1,await this.memeVideoEl.play(),this.scheduleFaahEarly()}catch(e){console.warn(`Meme video unmuted play blocked, trying muted:`,e);try{this.memeVideoEl.muted=!0,await this.memeVideoEl.play(),this.scheduleFaahEarly()}catch(e){console.warn(`Meme video playback failed:`,e),this.isMemeVideoPlaying=!1,this.videoEl&&this.videoEl.ended&&this.finishFireworks()}}}}scheduleFaahEarly(){this.faahEarlyTimer&&=(clearTimeout(this.faahEarlyTimer),null);let e=this.memeVideoEl&&this.memeVideoEl.duration&&!isNaN(this.memeVideoEl.duration)&&this.memeVideoEl.duration>1?this.memeVideoEl.duration:8.01,t=Math.max(0,Math.round((e-.5)*1e3));this.faahEarlyTimer=setTimeout(()=>{this.playFaahAudioEarly()},t)}playFaahAudioEarly(){if(!(this.faahAlreadyPlayed||this.hasEnded)){this.faahAlreadyPlayed=!0;try{this.audioFaah||=e.getAudio(`./assets/audio/faaah.mp3`,.8),this.audioFaah.currentTime=0,this.audioFaah.volume=.8,this.audioFaah.play().catch(e=>console.warn(`Faah early audio play error:`,e))}catch{}}}finishFireworks(){this.hasEnded||(this.hasEnded=!0,this.isPlaying=!1,this.isMemeVideoPlaying=!1,this.fallbackTimer&&=(clearTimeout(this.fallbackTimer),null),this.memeVideoTimer&&=(clearTimeout(this.memeVideoTimer),null),this.faahEarlyTimer&&=(clearTimeout(this.faahEarlyTimer),null),this.videoEl&&this.videoEl.pause(),this.memeVideoEl&&this.memeVideoEl.pause(),this.rocketAudio&&this.rocketAudio.pause(),this.stageEl&&(this.stageEl.classList.add(`fade-out`),setTimeout(()=>{this.stageEl.style.display=`none`,this.stageEl.classList.remove(`visible`,`fade-out`),this.memeVideoWrapperEl&&this.memeVideoWrapperEl.classList.remove(`active`)},400)),this.playFaahMemeMoment())}playFaahMemeMoment(){this.memeStageEl?(this.memeStageEl.style.display=`flex`,this.memeStageEl.classList.add(`active`),this.faahAlreadyPlayed||this.playFaahAudioEarly(),this.memeCardEl&&this.memeCardEl.classList.add(`meme-animate-in`),setTimeout(()=>{this.memeStageEl&&this.memeStageEl.classList.add(`fade-out`),setTimeout(()=>{this.memeStageEl&&(this.memeStageEl.style.display=`none`,this.memeStageEl.classList.remove(`active`,`fade-out`)),this.memeCardEl&&this.memeCardEl.classList.remove(`meme-animate-in`),typeof this.onCompleteCallback==`function`&&(this.onCompleteCallback(),this.onCompleteCallback=null)},350)},1100)):typeof this.onCompleteCallback==`function`&&this.onCompleteCallback()}},l=class{constructor(e,t,n){this.canvas=e,this.ctx=this.canvas?this.canvas.getContext(`2d`):null,this.flashEl=t,this.appContainer=n,this.particles=[],this.confetti=[],this.shockwaveRadius=0,this.shockwaveMaxRadius=0,this.animReqId=null,this.resize(),window.addEventListener(`resize`,()=>this.resize())}resize(){this.canvas&&(this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width*window.devicePixelRatio,this.canvas.height=this.height*window.devicePixelRatio,this.ctx&&this.ctx.scale(window.devicePixelRatio,window.devicePixelRatio))}explode(e={}){let t=e.originX===void 0?this.width/2:e.originX,n=e.originY===void 0?this.height/2:e.originY;this.shockwaveRadius=5,this.shockwaveMaxRadius=Math.max(this.width,this.height)*.8,this.flashEl&&(this.flashEl.classList.remove(`active`),this.flashEl.offsetWidth,this.flashEl.classList.add(`active`)),this.appContainer&&(this.appContainer.classList.add(`screen-shake`),setTimeout(()=>{this.appContainer&&this.appContainer.classList.remove(`screen-shake`)},450)),e.onTransitionPoint&&setTimeout(()=>{e.onTransitionPoint()},70),this.particles=[];let r=[`#ffffff`,`#ffea00`,`#ffaa00`,`#ff6000`,`#ff0055`,`#ffe57f`];for(let e=0;e<90;e++){let e=Math.random()*Math.PI*2,i=4+Math.random()*16;this.particles.push({x:t,y:n,vx:Math.cos(e)*i,vy:Math.sin(e)*i,size:2.5+Math.random()*4.5,alpha:1,color:r[Math.floor(Math.random()*r.length)],decay:.015+Math.random()*.025,drag:.94+Math.random()*.03,gravity:.22})}this.confetti=[];let i=[`#ff0055`,`#ffb703`,`#06d6a0`,`#118ab2`,`#ffd166`,`#ffffff`];for(let e=0;e<65;e++){let e=Math.random()*Math.PI*2,r=5+Math.random()*14;this.confetti.push({x:t,y:n,vx:Math.cos(e)*r,vy:Math.sin(e)*r-3,width:6+Math.random()*8,height:10+Math.random()*12,rotation:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*.25,color:i[Math.floor(Math.random()*i.length)],alpha:1,decay:.012+Math.random()*.018,drag:.96,gravity:.16})}let a=performance.now(),o=r=>{let i=(r-a)/1200;if(this.ctx){if(this.ctx.clearRect(0,0,this.width,this.height),this.shockwaveRadius<this.shockwaveMaxRadius){this.shockwaveRadius+=(this.shockwaveMaxRadius-this.shockwaveRadius)*.15+4;let e=Math.max(0,1-this.shockwaveRadius/this.shockwaveMaxRadius);this.ctx.save(),this.ctx.strokeStyle=`rgba(255, 230, 150, ${e*.6})`,this.ctx.lineWidth=Math.max(1,14*(1-this.shockwaveRadius/this.shockwaveMaxRadius)),this.ctx.beginPath(),this.ctx.arc(t,n,this.shockwaveRadius,0,Math.PI*2),this.ctx.stroke(),this.ctx.restore()}for(let e=this.particles.length-1;e>=0;e--){let t=this.particles[e];t.vx*=t.drag,t.vy=t.vy*t.drag+t.gravity,t.x+=t.vx,t.y+=t.vy,t.alpha-=t.decay,t.size*=.98,t.alpha<=0||t.size<=.2?this.particles.splice(e,1):(this.ctx.save(),this.ctx.globalAlpha=Math.max(0,t.alpha),this.ctx.fillStyle=t.color,this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.size,0,Math.PI*2),this.ctx.fill(),this.ctx.restore())}for(let e=this.confetti.length-1;e>=0;e--){let t=this.confetti[e];t.vx*=t.drag,t.vy=t.vy*t.drag+t.gravity,t.x+=t.vx,t.y+=t.vy,t.rotation+=t.rotSpeed,t.alpha-=t.decay,t.alpha<=0?this.confetti.splice(e,1):(this.ctx.save(),this.ctx.globalAlpha=Math.max(0,t.alpha),this.ctx.translate(t.x,t.y),this.ctx.rotate(t.rotation),this.ctx.fillStyle=t.color,this.ctx.fillRect(-t.width/2,-t.height/2,t.width,t.height),this.ctx.restore())}i<1&&(this.particles.length>0||this.confetti.length>0)?this.animReqId=requestAnimationFrame(o):(this.ctx.clearRect(0,0,this.width,this.height),e.onComplete&&e.onComplete())}};this.animReqId&&cancelAnimationFrame(this.animReqId),this.animReqId=requestAnimationFrame(o)}destroy(){this.animReqId&&cancelAnimationFrame(this.animReqId),this.ctx&&this.ctx.clearRect(0,0,this.width,this.height)}},u=class{constructor(e,t){this.container=e,this.video=t,this.fallbackBtn=null,this.currentTemplate=null,this.callbacks={onStarted:()=>{},onEnded:()=>{},onError:e=>{}},this.bindEvents()}bindEvents(){this.video&&(this.video.addEventListener(`ended`,()=>{document.body.classList.remove(`prank-video-active`),this.callbacks.onEnded&&this.callbacks.onEnded()}),this.video.addEventListener(`error`,e=>{console.warn(`Prank video error encountered:`,this.video.error),this.callbacks.onError&&this.callbacks.onError(this.video.error)}))}prepare(t){t&&t.videoSrc&&this.video&&(this.currentTemplate=t,e.markVideoLoaded(t.videoSrc),!(this.video.src&&this.video.src.includes(t.videoSrc))&&(this.video.src=t.videoSrc,this.video.preload=`auto`,this.video.playsInline=!0,this.video.setAttribute(`playsinline`,``),this.video.setAttribute(`webkit-playsinline`,``),this.video.load()))}async play(e={}){if(this.callbacks={...this.callbacks,...e},this.video){this.container.classList.add(`visible`),document.body.classList.add(`prank-video-active`);try{this.video.currentTime=0;let e=this.video.play();e!==void 0&&(await e,this.callbacks.onStarted&&this.callbacks.onStarted())}catch(e){console.warn(`Autoplay with sound restricted by browser policy:`,e);try{this.video.muted=!0,await this.video.play(),this.showUnmutePrompt()}catch{this.showTapToPlayPrompt()}}}}showUnmutePrompt(){this.removePrompts();let e=document.createElement(`button`);e.className=`video-unmute-cue`,e.innerHTML=`<span>🔊 Tap for Audio</span>`,e.addEventListener(`click`,()=>{this.video&&(this.video.muted=!1,e.remove())}),this.container.appendChild(e),this.fallbackBtn=e}showTapToPlayPrompt(){this.removePrompts();let e=document.createElement(`button`);e.className=`video-tap-play-cue`,e.innerHTML=`<span>▶️ Click to Continue</span>`,e.addEventListener(`click`,async()=>{if(this.video){this.video.muted=!1;try{await this.video.play(),e.remove()}catch{this.callbacks.onEnded&&this.callbacks.onEnded()}}}),this.container.appendChild(e),this.fallbackBtn=e}removePrompts(){this.fallbackBtn&&=(this.fallbackBtn.remove(),null)}reset(){this.removePrompts(),this.video&&(this.video.pause(),this.video.currentTime=0),this.container.classList.remove(`visible`),document.body.classList.remove(`prank-video-active`)}},d={url:`https://t.me/ananoumusxeraa`,badgeText:`CYBERSECURITY SPECIAL`,headline:`Join For Learning Cybersecurity (Free)`,emoji:`🛡️`,subtitle:`एथिकल हैकिंग, बग बाउंटी, टूल्स और साइबर सिक्योरिटी बिल्कुल फ्री में सीखने के लिए हमारे Telegram चैनल को अभी जॉइन करें!`,ctaButtonText:`Join Telegram Channel (Free) ➔`,floatingBubbleText:`🛡️ Learn Cybersecurity Free!`,trustNote:`100% Free • Learn Cybersecurity Daily`},f=`6200220322`,p={phoneNumber:f,phoneDisplay:`+91 62002 20322`,whatsappUrl:`https://wa.me/91${f}?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87!%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20Diwali Surprise%20%E0%A4%AA%E0%A4%B0%20%E0%A4%85%E0%A4%AA%E0%A4%A8%E0%A4%BE%20Ad%20%2F%20%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A5%89%E0%A4%A8%E0%A5%8D%E0%A4%B8%E0%A4%B0%E0%A4%B6%E0%A4%BF%E0%A4%AA%20%E0%A4%9A%E0%A4%B2%E0%A4%B5%E0%A4%BE%E0%A4%A8%E0%A5%80%20%E0%A4%B9%E0%A5%88%E0%A5%A4%20%E0%A4%95%E0%A5%83%E0%A4%AA%E0%A4%AF%E0%A4%BE%20Ad%20%E0%A4%B8%E0%A5%8D%E0%A4%B2%E0%A5%89%E0%A4%9F%E0%A5%8D%E0%A4%B8%20%E0%A4%94%E0%A4%B0%20%E0%A4%A1%E0%A4%BF%E0%A4%9F%E0%A5%87%E0%A4%B2%E0%A5%8D%E0%A4%B8%20%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%E0%A4%82%E0%A5%A4`,target:`_blank`,badgeText:`BOOK THIS AD SPACE • DIWALI SPECIAL`,headline:`यहाँ सिर्फ दोस्त नहीं, आपका Brand भी धमाका करेगा!`,subtitle:`लाखों लोग यहाँ प्रैंक देखने आ रहे हैं... अपनी दुकान, बिज़नेस या सर्विस का Ad यहाँ लगवाएं और सीधा कस्टमर्स तक पहुँचें! 🎯`,ctaButtonText:`WhatsApp पर Ad बुक करें (Chat Now) ➔`,trustNote:`Limited Festive Slots • 100% Direct Audience`};({...d}),d.url,d.url;var m=class{constructor(e,n={}){this.container=e,this.options=n,this.currentView=`reveal`,this.selectedTemplateId=n.initialTemplateId||t[0].id,this.recipientName=``,this.userHasEditedMessage=!1,this.customMessage=this.getDefaultMessage(``),this.toastTimer=null,this.headerDestroy=null,this.onReplay=n.onReplay||(()=>{}),this.isDealsPopoverOpen=!1,this.hasAutoPeekedDeals=!1,this.userDismissedDeals=!1,this.dealsAutoPeekTimer=null,this.dealsAutoCloseTimer=null,this.isTemplatePickerOpen=!1,this.djAudio=null,this.isDjPlaying=!1,this.likeTimer=null,this.hasLikedDj=typeof localStorage<`u`&&localStorage.getItem(`faah_dj_has_liked`)===`true`,this.djLikeCount=this.calculateCurrentLikes(),this.startLikeUpdater(),this.showMoreJethalal=!1,this.isJethalal2Playing=!1,this.jethalal2Video=null,this.visualizerCanvas=null,this.visualizerCtx=null,this.visualizerAnimationId=null,this.audioCtx=null,this.audioAnalyser=null,this.audioSource=null,this.freqData=null,this.barHeights=null,this.visualizerRotation=0,this.currentBassScale=1,this.numVisualizerBars=72,this.faaahPool=[],this.faaahPoolIndex=0,this.faaahPoolSize=4,this.rawanAudio=null,this.isGiftOpening=!1,this.giftCloseTimeout=null,this.isSponsorRevealed=!1,this.chinTapakAudio=null,this.hasPreparedEndingAssets=!1,this.selectedGiftAmount=100,this.customGiftAmount=300,this.isGiftModalOpen=!1,this.currentMemeIndex=0,this.giftMemes=[`Diwali पर दोस्तों को प्रैंक करके खूब हंसे? अब बेचारे Developer को भी मिठाई और समोसे के पैसे भेज दो! 🍬😂`,`यह पैसा किसी बड़े कॉर्पोरेट को नहीं, दिन-रात कोडिंग करने वाले भूखे Developer को जा रहा है ताकि Website का Server और Wi-Fi बिल भरा जा सके! 💻🪔`,`Developer ने बिना सोए आपके लिए 120 FPS सुतली बम बनाया, अब एक कप चाय और समोसे का गिफ्ट तो बनता है बॉस! ☕🥟`,`भगवान का दिया सब कुछ है... बस सर्वर का भारी बिल और नींद की कमी है! थोड़ा सा गिफ्ट समर्पित करें! 🙏🚀`,`कंजूसी छोड़ो भाई, साल में एक बार ही तो दिवाली आती है! Developer को खुश करो, पुण्य मिलेगा! ✨🧨`],this.boundBackgroundClick=this.handleBackgroundClick.bind(this)}prepareEndingAssets(){this.hasPreparedEndingAssets||(this.hasPreparedEndingAssets=!0,this.djAudio||(this.djAudio=e.getAudio(`./assets/audio/happy diwali dj.mp3`,1),this.djAudio&&(this.djAudio.addEventListener(`ended`,()=>{this.isDjPlaying=!1,this.djAudio.currentTime=0,this.updateDjUI()}),this.djAudio.addEventListener(`pause`,()=>{this.isDjPlaying=!1,this.updateDjUI()}),this.djAudio.addEventListener(`play`,()=>{this.isDjPlaying=!0,this.updateDjUI()}))),this.faaahPool=e.getFaaahPool(4,.7),this.rawanAudio||=e.getAudio(`./assets/audio/rawan.mp3`,1),this.chinTapakAudio||=e.getAudio(`./assets/audio/chin tapak dam dam.mp3`,1),e.loadPhase5())}init(){this.ensureToastMounted(),this.container&&this.container.addEventListener(`click`,this.boundBackgroundClick)}getDefaultMessage(e){return e&&e.trim()?`${e.trim()}, ये दिवाली वाला surprise देखना. Link खोलो, फिर मज़ा आएगा!`:`ये दिवाली वाला surprise देखना. Link खोलो, फिर मज़ा आएगा!`}getSelectedTemplate(){return n(this.selectedTemplateId)}getShareUrl(){let e=new URL(window.location.origin+window.location.pathname);return e.searchParams.set(`surprise`,this.selectedTemplateId),this.recipientName&&this.recipientName.trim()&&e.searchParams.set(`name`,this.recipientName.trim()),e.toString()}goToView(t){t===`templates`&&e.loadPhase6(),this.djAudio&&this.djAudio.pause(),this.visualizerAnimationId&&=(cancelAnimationFrame(this.visualizerAnimationId),null),this.jethalal2Video&&this.jethalal2Video.pause(),this.currentView=t,this.render(),this.bindEvents(),this.ensureDealsWidgetMounted(),window.scrollTo({top:0,behavior:`smooth`})}renderDiyaHeader(){return`
      <!-- 🪔 SACRED FESTIVE DIYA HEADER 🪔 -->
      <div class="ending-diya-header" aria-hidden="true">
        <div class="diya-container ending-diya-container">
          <div class="diya-aura"></div>
          <div class="diya-flame-wrapper">
            <div class="diya-flame-outer">
              <div class="diya-flame-core"></div>
            </div>
          </div>
          <div class="diya-wick"></div>
          <svg class="diya-vessel" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="brassGradientEnding" x1="0" y1="0" x2="48" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#d4af37" />
                <stop offset="40%" stop-color="#8a631d" />
                <stop offset="60%" stop-color="#ffd700" />
                <stop offset="100%" stop-color="#5e4110" />
              </linearGradient>
              <linearGradient id="oilGradientEnding" x1="0" y1="0" x2="0" y2="10">
                <stop offset="0%" stop-color="#3d2105" />
                <stop offset="100%" stop-color="#1a0e02" />
              </linearGradient>
            </defs>
            <path
              d="M4 8C10 20 38 20 44 8C44 8 40 4 24 4C8 4 4 8 4 8Z"
              fill="url(#brassGradientEnding)"
              stroke="#422909"
              stroke-width="1"
            />
            <ellipse cx="24" cy="7" rx="16" ry="3" fill="url(#oilGradientEnding)" />
            <path
              d="M18 19H30L32 23H16L18 19Z"
              fill="url(#brassGradientEnding)"
              stroke="#422909"
              stroke-width="0.8"
            />
          </svg>
        </div>
      </div>
    `}renderDivider(){return`
      <div class="golden-ornamental-divider" aria-hidden="true">
        <span class="divider-line"></span>
        <span class="divider-gem">✦</span>
        <span class="divider-line"></span>
      </div>
    `}getUpiUrl(e){let t=Number(e);return`upi://pay?pa=pawank63599-1@okicici&pn=Pawan%20Kumar&am=${!isNaN(t)&&t>=10?t:10}&cu=INR&tn=Diwali%20Gift%20for%20Diwali%20Surprise%20Developer`}getQrCodeUrl(e){return`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(e)}&margin=8`}renderSponsorSection(){return``}renderFloatingDealsWidget(){return`
      <!-- Floating WhatsApp Deals Widget (Screen Fixed Viewport, Active Across Ending Views) -->
      <aside class="wa-deals-widget" id="wa-deals-widget" aria-label="Official Cybersecurity Telegram Channel">
        
        <!-- Interactive Popover Card -->
        <div class="wa-deals-popover ${this.isDealsPopoverOpen?`is-open`:``}" id="wa-deals-popover" role="dialog" aria-modal="false" aria-hidden="${this.isDealsPopoverOpen?`false`:`true`}">
          <div class="wa-popover-header">
            <div class="wa-popover-tag">
              <span class="wa-live-dot"></span>
              <span>JOIN FOR LEARNING CYBERSECURITY</span>
            </div>
            <button class="wa-popover-close" id="btn-close-wa-popover" type="button" aria-label="Close Deals Card">✕</button>
          </div>

          <h4 class="wa-popover-title">
            Join For Learning Cybersecurity (Free) 🛡️
          </h4>

          <p class="wa-popover-text">
            एथिकल हैकिंग, बग बाउंटी, टूल्स और साइबर सिक्योरिटी बिल्कुल फ्री में सीखने के लिए अभी Telegram चैनल जॉइन करें।
          </p>

          <div class="wa-popover-chips">
            <span class="wa-chip">🛡️ Ethical Hacking</span>
            <span class="wa-chip">💻 Bug Bounty</span>
            <span class="wa-chip">⚡ 100% Free</span>
          </div>

          <a 
            href="${d.url}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-wa-deals-cta"
            id="btn-join-wa-channel"
            aria-label="Join Official Deals WhatsApp Channel"
          >
            <svg class="wa-icon-svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
            <span>Join Telegram Channel (Free) ➔</span>
          </a>

          <div class="wa-popover-footer">
            <span>✦ 100% Free • Learn Cybersecurity Daily ✦</span>
          </div>
        </div>

        <!-- Floating Pill / Trigger Button (Desktop: Pill with text, Mobile: Circle icon + 1 badge) -->
        <button class="wa-deals-pill-btn ${this.isDealsPopoverOpen?`active`:``}" id="btn-toggle-wa-deals" type="button" aria-label="Join Telegram Channel">
          <div class="wa-pill-icon-box">
            <svg class="wa-icon-svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
            <span class="wa-pill-badge-num">1</span>
          </div>
          <span class="wa-pill-text">Join Telegram Channel</span>
        </button>

      </aside>
    `}ensureDealsWidgetMounted(){let e=document.getElementById(`wa-deals-widget`);if(!e){let t=document.createElement(`div`);t.innerHTML=this.renderFloatingDealsWidget(),e=t.firstElementChild,document.body.appendChild(e);let n=e.querySelector(`#btn-toggle-wa-deals`),r=e.querySelector(`#btn-close-wa-popover`);n&&n.addEventListener(`click`,e=>{e.stopPropagation(),this.toggleDealsPopover()}),r&&r.addEventListener(`click`,e=>{e.stopPropagation(),this.closeDealsPopover(!0)}),document.addEventListener(`click`,e=>{this.isDealsPopoverOpen&&!e.target.closest(`#wa-deals-widget`)&&this.closeDealsPopover(!0)})}return e.classList.add(`visible`),e}toggleDealsPopover(){this.isDealsPopoverOpen?this.closeDealsPopover(!0):this.openDealsPopover()}openDealsPopover(){this.isDealsPopoverOpen=!0;let e=document.getElementById(`wa-deals-popover`),t=document.getElementById(`btn-toggle-wa-deals`);e&&(e.classList.add(`is-open`),e.setAttribute(`aria-hidden`,`false`)),t&&t.classList.add(`active`)}closeDealsPopover(e=!1){this.isDealsPopoverOpen=!1,e&&(this.userDismissedDeals=!0,this.dealsAutoCloseTimer&&=(clearTimeout(this.dealsAutoCloseTimer),null));let t=document.getElementById(`wa-deals-popover`),n=document.getElementById(`btn-toggle-wa-deals`);t&&(t.classList.remove(`is-open`),t.setAttribute(`aria-hidden`,`true`)),n&&n.classList.remove(`active`)}triggerDealsAutoPeek(){this.hasAutoPeekedDeals||typeof window>`u`||(this.hasAutoPeekedDeals=!0,this.dealsAutoPeekTimer=setTimeout(()=>{!this.isDealsPopoverOpen&&!this.userDismissedDeals&&(this.openDealsPopover(),this.dealsAutoCloseTimer=setTimeout(()=>{!this.userDismissedDeals&&this.isDealsPopoverOpen&&this.closeDealsPopover(!1)},6e3))},2200))}renderDeveloperGiftSection(){return`
      <!-- Developer Diwali Gift Section (User Requested) -->
      <section class="dev-gift-section" id="section-dev-gift" aria-label="Send Diwali Gift to Developer">
        <div class="dev-gift-card">
          <div class="dev-gift-badge">
            <span class="spark-icon">✦</span>
            <span>DIWALI GIFT FOR DEVELOPER</span>
            <span class="spark-icon">✦</span>
          </div>

          <h3 class="dev-gift-headline">
            डेवलपर को <span class="text-gold">दिवाली गिफ्ट</span> भेजें 🎁🪔
          </h3>

          <p class="dev-gift-paragraph">
            आपको तो दिवाली में मज़ा आ जाएगा, लेकिन डेवलपर दिन-रात मेहनत करके आपके लिए नए-नए प्रैंक्स और वेबसाइट चालू रखेगा! अगर चेहरे पर थोड़ी भी हंसी आई हो, तो डेवलपर को एक छोटा सा दिवाली गिफ्ट भेज दीजिए — वो भी खुश हो जाएगा!
          </p>

          <div class="dev-gift-btn-row">
            <button class="btn btn-luxury-gold btn-open-gift-modal" id="btn-trigger-gift-modal" type="button">
              <span class="btn-gift-icon">🎁</span>
              <span>गिफ्ट चुनें (Select a Gift)</span>
              <span class="btn-arrow-icon">➔</span>
            </button>
          </div>
        </div>
      </section>
    `}renderDeveloperGiftModal(){let e=this.selectedGiftAmount||100,t=this.getUpiUrl(e),n=this.getQrCodeUrl(t);return`
      <!-- Developer Gift / Danpeti Modal Dialog (User Requested) -->
      <div class="gift-modal-overlay" id="dev-gift-modal-overlay" aria-hidden="true">
        <div class="gift-modal-backdrop" id="dev-gift-backdrop"></div>
        
        <div class="gift-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="gift-modal-title">
          
          <!-- Modal Header (User Requested: Developer का दिवाली गिफ्ट) -->
          <div class="gift-modal-header">
            <div class="gift-header-titles">
              <h3 class="gift-modal-title" id="gift-modal-title">
                Developer का दिवाली गिफ्ट 🎁
              </h3>
              <p class="gift-modal-subtitle">
                Diwali Surprise को जीवित रखने और नए प्रैंक्स बनाने हेतु अपनी स्वेच्छा से दिवाली गिफ्ट समर्पित करें!
              </p>
            </div>
            <button class="btn-close-gift-modal" id="btn-close-gift-modal" type="button" aria-label="Close dialog">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <!-- Notice / Meme Box -->
          <div class="gift-notice-card">
            <div class="notice-top-row">
              <span class="notice-badge">⚠️ जरूरी सूचना (Read First)</span>
              <button class="btn-next-meme" id="btn-next-meme" type="button">
                <span>🔄 Next Meme</span>
              </button>
            </div>
            <p class="notice-quote-text" id="gift-meme-quote">
              "${this.giftMemes[this.currentMemeIndex||0]}"
            </p>
          </div>

          <!-- 4 Amount Selection Tabs -->
          <div class="gift-tabs-grid">
            <button class="gift-amount-tab ${e===50?`is-active`:``}" type="button" data-amount="50">
              <span class="tab-amount-val">₹50</span>
              <span class="tab-amount-tag">छोटा धमाका 💥</span>
            </button>

            <button class="gift-amount-tab ${e===100?`is-active`:``}" type="button" data-amount="100">
              <span class="tab-amount-val">₹100</span>
              <span class="tab-amount-tag">मज़ा आ गया! 🎉</span>
            </button>

            <button class="gift-amount-tab ${e===200?`is-active`:``}" type="button" data-amount="200">
              <span class="tab-amount-val">₹200</span>
              <span class="tab-amount-tag">बड़ा धमाका 🚀</span>
            </button>

            <button class="gift-amount-tab ${e===`custom`?`is-active`:``}" type="button" data-amount="custom">
              <span class="tab-amount-val">₹ कस्टम</span>
              <span class="tab-amount-tag">मनपसंद ✍️</span>
            </button>
          </div>

          <!-- Custom Amount Input Field (User Requested: prefilled 300, min 10) -->
          <div class="custom-amount-box" id="custom-amount-box" style="display: ${e===`custom`?`block`:`none`};">
            <label for="custom-gift-input" class="custom-input-label">अपनी इच्छानुसार राशि डालें (Min ₹10):</label>
            <div class="custom-input-wrap">
              <span class="input-currency-prefix">₹</span>
              <input 
                type="number" 
                id="custom-gift-input" 
                class="custom-gift-input" 
                placeholder="300" 
                min="10" 
                value="${this.customGiftAmount||300}" 
              />
            </div>
          </div>

          <!-- Dynamic QR Code Container -->
          <div class="gift-qr-section">
            <div class="qr-heading-bar">
              <svg class="qr-scan-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span id="qr-scan-label">Scan to Gift ₹${e} (All UPI Apps)</span>
            </div>

            <!-- QR Image Box (Compact to fit without scrolling) -->
            <div class="qr-code-frame">
              <img 
                id="gift-qr-image" 
                src="${n}" 
                alt="Diwali Gift UPI QR Code" 
                width="125" 
                height="125" 
              />
            </div>

            <!-- Official Payee UPI ID Display Box -->
            <div class="gift-payee-info-box">
              <span class="payee-title">Official Payee UPI ID (Pawan Kumar):</span>
              <div class="payee-row">
                <span class="payee-upi-address" id="text-payee-upi">pawank63599-1@okicici</span>
                <button class="btn-copy-upi" id="btn-copy-dev-upi" type="button" aria-label="Copy UPI ID">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span id="copy-upi-btn-text">Copy</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Primary Direct UPI Intent Button -->
          <div class="gift-action-wrap">
            <a 
              href="${t}" 
              class="btn-upi-intent" 
              id="btn-upi-intent-link"
            >
              <span class="intent-phone-icon">📱</span>
              <span id="btn-upi-intent-text">UPI Apps से ₹${e} Pay करें ➔</span>
            </a>
          </div>

          <!-- Trust & P2P Reassurance Badge -->
          <div class="gift-trust-footer">
            <span class="lock-icon">🔒</span>
            <span>100% Direct P2P UPI • Min ₹10 • सीधा Developer के खाते में</span>
          </div>

        </div>
      </div>
    `}renderHeader(){return``}renderFooter(){return`
      <footer class="site-footer" id="site-footer">
        <div class="footer-container">
          <div class="footer-grid">
            <!-- Col 1: Brand Info -->
            <div class="footer-col brand-col">
              <div class="footer-brand-header">
                <span class="footer-logo-icon" aria-hidden="true">
                  <svg class="footer-bomb-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="45" cy="62" r="33" fill="#ff1a1a" />
                    <path d="M37 34c0-4 16-4 16 0l1 4H36z" fill="#ff1a1a" />
                    <path d="M45 32c0-12 19-8 22-16" stroke="#ff1a1a" stroke-width="4.5" stroke-linecap="round" fill="none" />
                    <g stroke="#ff1a1a" stroke-width="3" stroke-linecap="round">
                      <line x1="67" y1="9" x2="67" y2="4"/>
                      <line x1="72" y1="11" x2="76" y2="8"/>
                      <line x1="74" y1="14" x2="79" y2="13"/>
                      <line x1="74" y1="18" x2="79" y2="20"/>
                      <line x1="71" y1="22" x2="75" y2="25"/>
                      <line x1="67" y1="23" x2="67" y2="28"/>
                      <line x1="63" y1="22" x2="59" y2="25"/>
                      <line x1="60" y1="18" x2="55" y2="20"/>
                      <line x1="60" y1="14" x2="55" y2="13"/>
                      <line x1="62" y1="10" x2="58" y2="7"/>
                    </g>
                    <path d="M57 47c6 6 7 16 3 25" stroke="#ffffff" stroke-width="6" stroke-linecap="round" fill="none" />
                  </svg>
                </span>
                <span class="footer-brand-title">Diwali<span class="brand-dot"> </span>Surprise</span>
              </div>
              <button class="btn-footer-replay btn-replay-prank" id="btn-replay-prank" type="button" aria-label="Replay Prank">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="1 4 1 10 7 10"></polyline>
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                </svg>
                <span>Replay Prank</span>
              </button>
            </div>

            <!-- Col 2: Contact -->
            <div class="footer-col links-col">
              <h4 class="footer-col-title">Contact</h4>
              <ul class="footer-nav-list">
                <li><a href="https://t.me/ananoumusxeraa" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
              </ul>
            </div>

            <!-- Col 3: Telegram -->
            <div class="footer-col legal-col">
              <h4 class="footer-col-title">Telegram</h4>
              <ul class="footer-nav-list">
                <li><a href="https://t.me/ananoumusxeraa" target="_blank" rel="noopener noreferrer">@ananoumusxeraa</a></li>
              </ul>
            </div>
          </div>

          <!-- Bottom Copyright -->
          <div class="footer-bottom-bar">
            <div class="footer-copyright">
              © 2026 Diwali Surprise • Crafted with love by @ananoumusxeraa
            </div>
          </div>
        </div>
      </footer>
    `}render(){let e=this.getSelectedTemplate(),n=this.getShareUrl(),r=``;this.currentView===`reveal`?r=`
        <div class="ending-experience-container view-reveal-active animate-view-in" id="ending-experience-container">
          
          ${this.renderDiyaHeader()}

          <!-- SECTION 1: HERO EMOTIONAL DAMAGE REVEAL -->
          <section class="ending-section hero-section" id="section-hero" aria-label="Survival Report Reveal">
            
            <h1 class="reveal-huge-headline">
              <span class="headline-part-1">हालत खराब</span><span class="headline-break"><br></span><span class="headline-space"> </span><span class="headline-part-2">हो गई क्या?</span>
            </h1>

            <div class="reveal-cta-wrap">
              <button class="btn btn-wa-share-action" id="btn-reveal-start-prank" type="button" aria-label="अब दोस्त की बारी WhatsApp Share">
                <svg class="wa-action-icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
                <span>अब दोस्त की बारी</span>
                <span class="btn-arrow-icon">➔</span>
              </button>
            </div>

            <!-- Subtle Scroll Down Indicator -->
            <div class="scroll-down-hint" id="scroll-down-hint">
              <span>नीचे स्क्रॉल करें • और भी धमाके हैं</span>
              <span class="scroll-down-arrow">↓</span>
            </div>

          </section>

          ${this.renderDivider()}

          <!-- SECTION 3: JETHALAL HAPPY DIWALI DJ REMIX -->
          <section class="ending-section dj-section" id="section-jethalal-dj" aria-label="Bonus DJ Remix">
            
            <div class="golden-pill-badge dj-pill">
              <span class="dj-badge-fire">🔥</span>
              <span>BONUS DHAMAKA • DJ REMIX</span>
              <span class="dj-badge-fire">🔥</span>
            </div>

            <h2 class="section-gold-heading">
              जेठालाल "Happy Diwali" DJ वर्ज़न! 🎧⚡
            </h2>
            <p class="section-gold-subtitle dj-section-subtitle">
              <span class="dj-sub-line">शुरुआत में जो मीम गाना सुना था, उसका <strong>Full Bass DJ Dhamaka</strong> सुनना है?</span>
              <span class="dj-sub-line">नीचे बटन दबाओ और अभी नाचो!</span>
            </p>

            <div class="jethalal-dj-card ${this.isDjPlaying?`playing`:``}" id="jethalal-dj-card">
              
              <!-- 🎧 Circular Audio Spectrum Visualizer Ring with Jethalal Center Avatar -->
              <div class="dj-visualizer-container" id="dj-thumbnail-wrap" role="button" tabindex="0" aria-label="Play Jethalal DJ Remix">
                <div class="dj-visualizer-stage" id="dj-visualizer-stage">
                  <canvas class="dj-visualizer-canvas" id="dj-visualizer-canvas" width="680" height="680"></canvas>
                  
                  <!-- Central Circular Disc with Jethalal Avatar -->
                  <div class="dj-avatar-disc" id="dj-avatar-shell">
                    <img 
                      src="./assets/images/jethalal_dj_thumbnail.jpg" 
                      alt="Jethalal Happy Diwali Song" 
                      class="dj-avatar-img"
                    />
                    <div class="dj-avatar-glow"></div>
                    <!-- Play / Pause Center Overlay Badge -->
                    <div class="dj-avatar-play-badge ${this.isDjPlaying?`is-playing`:``}" id="dj-avatar-badge">
                      <span class="dj-avatar-badge-icon" id="dj-avatar-badge-icon">${this.isDjPlaying?`⏸`:`▶`}</span>
                    </div>
                  </div>
                </div>

                <!-- Floating DJ Status Tag -->
                <div class="dj-disc-status-tag ${this.isDjPlaying?`active`:``}" id="dj-disc-status-tag">
                  <span class="dj-status-dot"></span>
                  <span id="dj-status-text">${this.isDjPlaying?`BEAT DROPPING ⚡`:`CLICK TO DANCE 🎧`}</span>
                </div>
              </div>

              <!-- ▶ Big Action Play/Pause Button -->
              <button class="btn btn-luxury-gold btn-dj-play-action ${this.isDjPlaying?`is-playing`:``}" id="btn-play-dj-remix" type="button" aria-label="Play DJ Remix">
                <span class="dj-btn-icon" id="dj-btn-icon">${this.isDjPlaying?`⏸`:`▶`}</span>
                <span class="dj-btn-text" id="dj-btn-text">${this.isDjPlaying?`DJ रोकें (Pause)`:`DJ वर्ज़न बजाओ`}</span>
              </button>

              <!-- Sub Actions Row: Like (Left) & More (Right) -->
              <div class="dj-sub-actions-row">
                <button class="btn-dj-sub-action btn-dj-like ${this.hasLikedDj?`has-liked`:``}" id="btn-dj-like" type="button" aria-label="Like this DJ Remix" title="${this.djLikeCount.toLocaleString(`en-IN`)} likes">
                  <span class="dj-sub-icon" id="dj-like-icon">${this.hasLikedDj?`❤️`:`🤍`}</span>
                  <span class="dj-sub-label">Like</span>
                  <span class="dj-like-count-badge" id="dj-like-count">${this.formatLikeCount(this.djLikeCount)}</span>
                </button>

                <button class="btn-dj-sub-action btn-dj-more ${this.showMoreJethalal?`is-active`:``}" id="btn-dj-more" type="button" aria-label="Show more Jethalal videos" aria-expanded="${this.showMoreJethalal?`true`:`false`}">
                  <span class="dj-sub-icon">🎬</span>
                  <span class="dj-sub-label" id="dj-more-text">${this.showMoreJethalal?`Less`:`More`}</span>
                  <span class="dj-more-arrow" id="dj-more-arrow">${this.showMoreJethalal?`▴`:`▾`}</span>
                </button>
              </div>

            </div>

            <!-- Expandable Jethalal 2 Video Card -->
            <div class="jethalal2-expand-wrap ${this.showMoreJethalal?`is-expanded`:``}" id="jethalal2-expand-wrap" aria-hidden="${this.showMoreJethalal?`false`:`true`}">
              <div class="jethalal-dj-card jethalal-video2-card ${this.isJethalal2Playing?`playing`:``}" id="jethalal2-card">
                
                <div class="golden-pill-badge dj-pill jethalal2-pill">
                  <span>BONUS EPISODE • JETHALAL DHAMAKA</span>
                </div>

                <h3 class="jethalal2-card-title">जेठालाल "Happy Diwali" Part 2!</h3>
                <p class="jethalal2-card-desc">जेठालाल का एक और धमाकेदार मोमेंट — नीचे प्ले करें और फुल आवाज़ में मजे लें!</p>

                <div class="dj-thumbnail-wrap jethalal2-thumbnail-wrap" id="jethalal2-video-wrap" role="button" tabindex="0" aria-label="Play Jethalal Part 2 Video">
                  <video 
                    id="jethalal2-video-player" 
                    class="jethalal2-video-element" 
                    playsinline 
                    preload="metadata"
                    poster="./assets/images/jethalal2_thumb.jpg"
                  >
                    <source src="./assets/videos/Jethalal2.mp4" type="video/mp4" />
                  </video>
                </div>

                <!-- ▶ Action Play/Pause Button for Part 2 -->
                <button class="btn btn-luxury-gold btn-dj-play-action ${this.isJethalal2Playing?`is-playing`:``}" id="btn-play-jethalal2" type="button" aria-label="Play Jethalal Part 2">
                  <span class="dj-btn-icon" id="jethalal2-btn-icon">${this.isJethalal2Playing?`⏸`:`▶`}</span>
                  <span class="dj-btn-text" id="jethalal2-btn-text">${this.isJethalal2Playing?`वीडियो रोकें (Pause)`:`वीडियो चलाओ`}</span>
                </button>

              </div>
            </div>

          </section>

          ${this.renderDivider()}

          <!-- SECTION 4: UNEXPECTED GIFT SURPRISE (Reference Images 1 & 2) -->
          <section class="ending-section unexpected-gift-section" id="section-unexpected-gift" aria-label="Unexpected Gift Surprise">
            
            <div class="golden-pill-badge gift-pill">
              <span class="gift-badge-star">✦</span>
              <span>SPECIAL SURPRISE • KHUFIA GIFT</span>
              <span class="gift-badge-star">✦</span>
            </div>

            <h2 class="section-gold-heading gift-heading">
              Unexpected Gift के लिए क्लिक करें!
            </h2>
            <p class="section-gold-subtitle gift-subtitle">
              नीचे दिए गए जादुई डिब्बे पर टैप करें और देखें अंदर क्या छुपा है...
            </p>

            <div class="unexpected-gift-card" id="unexpected-gift-card">
              
              <!-- Tap callout prompt badge -->
              <div class="gift-tap-callout" id="gift-tap-callout">
                <span class="gift-callout-text">डिब्बे पर क्लिक करो!</span>
              </div>

              <!-- Interactive Gift Box Stage -->
              <div class="gift-box-stage" id="gift-box-stage" role="button" tabindex="0" aria-label="Open Unexpected Gift Box">
                
                <!-- Background Golden Glow Aura -->
                <div class="gift-box-aura" aria-hidden="true"></div>

                <!-- 🌟 Pop-up Surprise: Ram And Ravan.jpeg -->
                <div class="gift-surprise-wrapper" id="gift-surprise-wrapper" aria-hidden="true">
                  <div class="gift-surprise-glow"></div>
                  <div class="gift-surprise-frame">
                    <img 
                      src="./assets/images/Ram%20And%20Ravan.jpeg" 
                      alt="Ram and Ravan Festive Surprise" 
                      class="gift-surprise-img" 
                    />
                    <div class="gift-surprise-badge">
                      <span>Unexpected Collab</span>
                    </div>
                  </div>
                </div>

                <!-- Gift Box Lower Body -->
                <div class="gift-box-body-wrap" aria-hidden="true">
                  <img 
                    src="./assets/images/gift_box_body.png" 
                    alt="Gift Box" 
                    class="gift-box-body-img" 
                  />
                </div>

                <!-- Gift Box Lifting Lid -->
                <div class="gift-box-lid-wrap" id="gift-box-lid-wrap" aria-hidden="true">
                  <img 
                    src="./assets/images/gift_box_lid.png" 
                    alt="Gift Box Lid" 
                    class="gift-box-lid-img" 
                  />
                </div>

                <!-- Festive Sparkles -->
                <div class="gift-box-sparkles" aria-hidden="true">
                  <span class="g-sparkle g-s1">✦</span>
                  <span class="g-sparkle g-s2">★</span>
                  <span class="g-sparkle g-s3">✦</span>
                  <span class="g-sparkle g-s4">★</span>
                </div>

              </div>

              <!-- Status Hint below the box -->
              <p class="gift-status-hint" id="gift-status-hint">
                ✦ Tap to unbox the surprise ✦
              </p>

            </div>

            <!-- 1. Diwali Loot Deals Sponsor Section (After Unboxing) -->
            <div class="real-gift-sponsor-card loot-deals-card ${this.isSponsorRevealed?`is-revealed`:``}" id="real-gift-sponsor-card" aria-hidden="${this.isSponsorRevealed?`false`:`true`}">
              <div class="sponsor-card-inner">
                
                <div class="golden-pill-badge sponsor-pill deals-pill">
                  <span class="spark-icon">🛍️</span>
                  <span>${d.badgeText}</span>
                  <span class="spark-icon">⚡</span>
                </div>

                <h3 class="sponsor-headline deals-headline">
                  ${d.headline} <span class="deals-bolt-emoji" aria-hidden="true">${d.emoji||`⚡`}</span>
                </h3>

                <p class="sponsor-subtitle deals-subtitle">
                  ${d.subtitle}
                </p>

                <!-- Visual Deals Showcase Box -->
                <div class="deals-showcase-box">
                  <div class="deals-banner-header">
                    <span class="deals-tag-icon">🔥</span>
                    <span class="deals-tag-text">CYBERSECURITY LEARNING (FREE)</span>
                  </div>
                  <div class="deals-perks-grid">
                    <div class="deal-perk-item">
                      <span class="deal-perk-icon">⚡</span>
                      <span class="deal-perk-title">Ethical Hacking</span>
                      <span class="deal-perk-sub">Free Tutorials & Guides</span>
                    </div>
                    <div class="deal-perk-item">
                      <span class="deal-perk-icon">🛍️</span>
                      <span class="deal-perk-title">Bug Bounty</span>
                      <span class="deal-perk-sub">Tools & Exploits</span>
                    </div>
                    <div class="deal-perk-item">
                      <span class="deal-perk-icon">🎁</span>
                      <span class="deal-perk-title">Cyber Defense</span>
                      <span class="deal-perk-sub">100% Free Forever</span>
                    </div>
                  </div>
                </div>

                <!-- Big Direct Join Button -->
                <a 
                  href="${d.url}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn btn-wa-deals-cta-large"
                  id="btn-sponsor-deals-join"
                  aria-label="Join Official Diwali Deals WhatsApp Channel"
                >
                  <svg class="wa-icon-svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                  <span>${d.ctaButtonText}</span>
                </a>

                <div class="ad-trust-note">
                  <span class="trust-icon">✦</span>
                  <span>${d.trustNote}</span>
                  <span class="trust-icon">✦</span>
                </div>

              </div>
            </div>

            
            </div>

          </section>

        </div>

        ${this.renderFooter()}
      `:this.currentView===`templates`?r=`
        <div class="ending-experience-container view-templates-active animate-view-in" id="ending-experience-container">
          
          ${this.renderDiyaHeader()}

          <!-- Top Navigation: Back to Reveal Screen -->
          <div class="step-nav-bar">
            <button class="btn-step-back" id="btn-back-to-reveal" type="button" aria-label="वापस जाएं">
              <span class="btn-back-arrow">←</span>
              <span class="btn-back-text"> वापस</span>
            </button>
          </div>

          <section class="ending-section template-section" id="section-templates" aria-label="Template Selector">
            
            <h2 class="section-gold-heading">
              एक prank template चुनो
            </h2>
            <p class="section-gold-subtitle">
              Bomb intro सबको वही मिलेगा, surprise fresh रहेगा.
            </p>

            <!-- 4 Prank Template Cards Grid -->
            <div class="template-selection-grid" role="radiogroup" aria-label="Prank Templates">
              ${t.map(e=>{let t=e.id===this.selectedTemplateId;return`
                  <div 
                    class="prank-template-card ${t?`selected`:``}" 
                    data-template-id="${e.id}"
                    role="radio"
                    aria-checked="${t}"
                    tabindex="0"
                  >
                    <div class="card-thumb-preview" style="background-color: ${e.thumbBg};">
                      <!-- Attached Real Prank Video First Frame Image (Static, No Autoplay) -->
                      <div class="thumb-video-wrapper">
                        <img
                          class="card-preview-image"
                          src="${e.thumbPoster}"
                          alt="${e.title} first frame"
                          loading="eager"
                        />
                        <div class="thumb-video-gradient-overlay" aria-hidden="true"></div>
                      </div>

                      <div class="thumb-number">${e.num}</div>

                      <div class="thumb-indicator-wrap">
                        ${t?`
                          <div class="thumb-selected-check" aria-label="Selected">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                          </div>
                        `:`
                          <div class="thumb-unselected-circle"></div>
                        `}
                      </div>
                    </div>

                    <div class="card-content-body">
                      <div class="card-main-title">${e.title}</div>
                      <div class="card-main-desc">${e.subtitle}</div>

                      <div class="card-action-bar">
                        <button 
                          type="button" 
                          class="btn-card-preview-play" 
                          data-preview-src="${e.videoSrc}" 
                          data-preview-title="${e.title}" 
                          data-template-id="${e.id}"
                          aria-label="Play video ${e.title}"
                        >
                          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                          <span>Play Video</span>
                        </button>
                      </div>
                    </div>
                  </div>
                `}).join(``)}
            </div>

            <!-- Bottom Action Bar -->
            <div class="step1-bottom-bar">
              <div class="bottom-selected-chip">
                <span class="chip-label">SELECTED</span>
                <span class="chip-name" id="bottom-selected-name">${e.title}</span>
              </div>
              <button class="btn btn-luxury-gold btn-step-forward" id="btn-go-to-send" type="button">
                <span>आगे बढ़ो (Aim & Send)</span>
                <span class="btn-arrow-icon">➔</span>
              </button>
            </div>

            <p class="bottom-spoiler-disclaimer">
              ✦ हर shared link पहले वही bomb intro दिखाएगा. कोई shortcut नहीं, कोई spoiler नहीं.
            </p>

          </section>

          ${this.renderDivider()}

          <!-- Developer Diwali Gift Pitch Section (User Requested on both templates & send views) -->
          ${this.renderDeveloperGiftSection()}

        </div>

        ${this.renderFooter()}
      `:this.currentView===`send`&&(r=`
        <div class="ending-experience-container view-send-active animate-view-in" id="ending-experience-container">
          
          ${this.renderDiyaHeader()}

          <!-- Top Navigation: Back to Reveal Screen (User Requested) -->
          <div class="step-nav-bar">
            <button class="btn-step-back" id="btn-back-to-reveal" type="button" aria-label="वापस जाएं">
              <span class="btn-back-arrow">←</span>
              <span class="btn-back-text"> वापस</span>
            </button>
          </div>

          <section class="ending-section send-section" id="section-aim-send" aria-label="Customize and Send">

            <h2 class="section-gold-heading">
              किसे फंसाना है?
            </h2>
            <p class="section-gold-subtitle">
              Message अपने हिसाब से edit करो. हाँ, नाम optional है — बिना नाम भी धमाका full है.
            </p>

            <!-- 2-Column / Stacked Send Workspace -->
            <div class="aim-send-workspace">
              
              <!-- Left Column: Customization Card -->
              <div class="aim-card left-customizer-card">
                
                <!-- Chosen Template Header Banner -->
                <div class="chosen-template-bar" id="chosen-template-bar" role="button" tabindex="0" title="Template बदलने के लिए क्लिक करें">
                  <div class="chosen-left-info">
                    <div class="chosen-avatar-video-wrap">
                      <img
                        class="chosen-avatar-img"
                        src="${e.thumbPoster}"
                        alt="${e.title}"
                      />
                    </div>
                    <div class="chosen-meta">
                      <span class="chosen-sub">CHUNA HUA DHAMAKA</span>
                      <span class="chosen-name" id="chosen-template-title">${e.title}</span>
                    </div>
                  </div>
                  <button class="btn-change-template" id="btn-change-template-chip" type="button" aria-label="Template बदलो">
                    बदलो ↑
                  </button>
                </div>

                <!-- Field 1: Recipient Name (Optional & Strictly Private) -->
                <div class="form-group-block">
                  <label class="form-field-label" for="step2-recipient-name">
                    दोस्त का नाम डालो <span class="label-optional">(Optional)</span>
                  </label>
                  <div class="form-input-shell">
                    <input 
                      type="text" 
                      id="step2-recipient-name" 
                      class="step2-text-input" 
                      placeholder="जैसे: राहुल भाई"
                      maxlength="30"
                      value="${this.recipientName}"
                      autocomplete="off"
                    />
                  </div>
                </div>

                <!-- Field 2: Custom WhatsApp Message Textarea -->
                <div class="form-group-block">
                  <label class="form-field-label" for="step2-message-textarea">
                    WhatsApp पर क्या लिखना है?
                  </label>
                  <div class="form-textarea-shell">
                    <textarea 
                      id="step2-message-textarea" 
                      class="step2-textarea" 
                      rows="4"
                      maxlength="240"
                    >${this.customMessage}</textarea>
                  </div>
                  <div class="textarea-bottom-row">
                    <span class="char-counter" id="textarea-char-count">${240-this.customMessage.length} characters left</span>
                  </div>
                </div>

              </div>

              <!-- Right Column: Ready To Send Box & Actions -->
              <div class="aim-card right-send-card">
                
                <div class="send-card-header-tag">
                  <span class="spark-bullet">✦</span> READY TO SEND
                </div>

                <!-- Surprise Link Display Box -->
                <div class="prank-link-display-shell">
                  <div class="link-box-label">SURPRISE LINK</div>
                  <div class="link-box-url" id="display-prank-url">${n}</div>
                </div>

                <!-- Primary Action Buttons -->
                <div class="send-action-buttons">
                  <!-- WhatsApp Share Button -->
                  <button class="btn btn-send-whatsapp" id="btn-step2-whatsapp" type="button">
                    <svg class="btn-svg-icon" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.529 1.776.815 2.791.815 3.179 0 5.766-2.587 5.767-5.766.001-3.18-2.585-5.767-5.767-5.767zm7.508 5.766c-.001 4.14-3.368 7.507-7.508 7.507-1.323 0-2.569-.347-3.655-.953l-4.088 1.072 1.092-3.991c-.702-1.141-1.099-2.483-1.098-3.901.002-4.14 3.37-7.507 7.51-7.507 4.14 0 7.508 3.368 7.508 7.507z"/>
                    </svg>
                    <span>WhatsApp पर भेजो</span>
                  </button>

                  <!-- Copy Link Button -->
                  <button class="btn btn-send-copy" id="btn-step2-copy" type="button">
                    <svg class="btn-svg-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span id="step2-copy-btn-text">Link Copy करो</span>
                  </button>
                </div>

              </div>

            </div>

          </section>

          <!-- Developer Diwali Gift Pitch Section (User Requested) -->
          ${this.renderDeveloperGiftSection()}

          ${this.renderDivider()}

        </div>

        ${this.renderFooter()}
      `),this.container.innerHTML=r,this.updateCharCount()}bindEvents(){let e=this.container.querySelector(`#btn-replay-prank`);if(e&&e.addEventListener(`click`,()=>{this.djAudio&&this.isDjPlaying&&this.djAudio.pause(),typeof this.onReplay==`function`&&this.onReplay(this.selectedTemplateId)}),this.currentView===`reveal`){this.initDjVisualizer();let e=this.container.querySelector(`#btn-reveal-start-prank`);e&&e.addEventListener(`click`,e=>{if(e.stopPropagation(),this.chinTapakAudio)try{this.chinTapakAudio.currentTime=0,this.chinTapakAudio.play().catch(e=>console.warn(`Chin Tapak audio play blocked:`,e))}catch(e){console.warn(`Error playing chin tapak audio:`,e)}this.goToView(`send`)});let t=this.container.querySelector(`#scroll-down-hint`);t&&t.addEventListener(`click`,()=>{let e=this.container.querySelector(`#section-jethalal-dj`);e&&e.scrollIntoView({behavior:`smooth`,block:`start`})});let n=this.container.querySelector(`#btn-play-dj-remix`);n&&n.addEventListener(`click`,e=>{e.stopPropagation(),this.toggleDjAudio()});let r=this.container.querySelector(`#dj-thumbnail-wrap`);if(r){let e=e=>{e.stopPropagation(),this.toggleDjAudio()};r.addEventListener(`click`,e),r.addEventListener(`keydown`,t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),e(t))})}let i=this.container.querySelector(`#btn-dj-like`);i&&i.addEventListener(`click`,e=>{e.stopPropagation(),this.toggleDjLike()});let a=this.container.querySelector(`#btn-dj-more`);a&&a.addEventListener(`click`,e=>{e.stopPropagation(),this.toggleMoreJethalal()}),this.bindJethalal2Events();let o=this.container.querySelector(`#gift-box-stage`);if(o){let e=e=>{e.stopPropagation(),this.triggerGiftUnboxing()};o.addEventListener(`click`,e),o.addEventListener(`keydown`,t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),e(t))})}}else if(this.currentView===`templates`){let e=this.container.querySelector(`#btn-back-to-reveal`);e&&e.addEventListener(`click`,()=>{this.goToView(`reveal`)}),this.container.querySelectorAll(`.prank-template-card`).forEach(e=>{let t=()=>{let t=e.getAttribute(`data-template-id`);this.selectTemplate(t)};e.addEventListener(`click`,t),e.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),t())})}),this.container.querySelectorAll(`.btn-card-preview-play`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.getAttribute(`data-preview-src`),r=e.getAttribute(`data-preview-title`),i=e.getAttribute(`data-template-id`);i&&this.selectTemplate(i),this.openVideoPreviewModal(n,r,i)})});let t=this.container.querySelector(`#btn-go-to-send`);t&&t.addEventListener(`click`,()=>{this.goToView(`send`)});let n=this.container.querySelector(`#btn-trigger-gift-modal`);n&&n.addEventListener(`click`,()=>{this.openGiftModal(this.selectedGiftAmount||100)})}else if(this.currentView===`send`){let e=this.container.querySelector(`#btn-back-to-reveal`);e&&e.addEventListener(`click`,e=>{e.stopPropagation(),this.goToView(`reveal`)});let t=e=>{e&&e.stopPropagation(),this.openTemplatePickerModal()},n=this.container.querySelector(`#btn-change-template-chip`);n&&n.addEventListener(`click`,t);let r=this.container.querySelector(`#chosen-template-bar`);r&&r.addEventListener(`click`,t);let i=this.container.querySelector(`#step2-recipient-name`),a=this.container.querySelector(`#step2-message-textarea`);i&&i.addEventListener(`input`,e=>{this.recipientName=e.target.value,!this.userHasEditedMessage&&a&&(this.customMessage=this.getDefaultMessage(this.recipientName),a.value=this.customMessage,this.updateCharCount());let t=this.container.querySelector(`#display-prank-url`);t&&(t.textContent=this.getShareUrl())}),a&&a.addEventListener(`input`,e=>{this.customMessage=e.target.value,this.userHasEditedMessage=!0,this.updateCharCount()});let o=this.container.querySelector(`#btn-step2-whatsapp`);o&&o.addEventListener(`click`,()=>{try{localStorage.setItem(`faah_has_seen_prank`,`true`),localStorage.setItem(`faah_returning_visitor`,`true`)}catch{}let e=this.getShareUrl(),t=`${this.customMessage}\n\n${e}`,n=encodeURIComponent(t);window.open(`https://api.whatsapp.com/send?text=${n}`,`_blank`)});let s=this.container.querySelector(`#btn-step2-copy`);s&&s.addEventListener(`click`,async()=>{try{localStorage.setItem(`faah_has_seen_prank`,`true`),localStorage.setItem(`faah_returning_visitor`,`true`)}catch{}let e=this.getShareUrl();try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{let t=document.createElement(`textarea`);t.value=e,t.style.position=`fixed`,t.style.opacity=`0`,document.body.appendChild(t),t.select(),document.execCommand(`copy`),t.remove()}this.showToast(`Link Copy हो गया! अब WhatsApp पे भेजो`)}catch{this.showToast(`Copy failed, please manually copy the link`)}});let c=this.container.querySelector(`#btn-trigger-gift-modal`);c&&c.addEventListener(`click`,()=>{this.openGiftModal(this.selectedGiftAmount||100)})}}ensureGiftModalMounted(){let e=document.getElementById(`dev-gift-modal-overlay`);if(!e){let t=document.createElement(`div`);t.innerHTML=this.renderDeveloperGiftModal(),e=t.firstElementChild,document.body.appendChild(e),this.bindGiftModalOverlayEvents(e)}return e}bindGiftModalOverlayEvents(e){if(!e)return;let t=e.querySelector(`#btn-close-gift-modal`);t&&t.addEventListener(`click`,()=>this.closeGiftModal()),e.addEventListener(`touchmove`,e=>{e.preventDefault()},{passive:!1});let n=e.querySelectorAll(`.gift-amount-tab`),r=e.querySelector(`#custom-gift-input`);n.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-amount`);this.updateGiftModalAmount(t===`custom`?`custom`:Number(t))})}),r&&(r.addEventListener(`input`,e=>{let t=Number(e.target.value);this.customGiftAmount=t;let n=!isNaN(t)&&t>=10?t:10;this.refreshQrAndIntent(n)}),r.addEventListener(`blur`,e=>{let t=Number(e.target.value);(!t||t<10)&&(e.target.value=`10`,this.customGiftAmount=10,this.refreshQrAndIntent(10))}));let i=e.querySelector(`#btn-next-meme`),a=e.querySelector(`#gift-meme-quote`);i&&a&&i.addEventListener(`click`,()=>{this.currentMemeIndex=(this.currentMemeIndex+1)%this.giftMemes.length,a.style.opacity=`0`,setTimeout(()=>{a.textContent=`"${this.giftMemes[this.currentMemeIndex]}"`,a.style.opacity=`1`},150)});let o=e.querySelector(`#btn-copy-dev-upi`),s=e.querySelector(`#copy-upi-btn-text`);o&&o.addEventListener(`click`,async()=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(`pawank63599-1@okicici`);else{let e=document.createElement(`input`);e.value=`pawank63599-1@okicici`,document.body.appendChild(e),e.select(),document.execCommand(`copy`),e.remove()}s&&(s.textContent=`✓ Copied!`,o.style.borderColor=`#4caf50`,o.style.color=`#81c784`,setTimeout(()=>{s.textContent=`Copy`,o.style.borderColor=``,o.style.color=``},2e3)),this.showToast(`UPI ID (pawank63599-1@okicici) कॉपी हो गया!`)}catch{this.showToast(`Copy failed: pawank63599-1@okicici`)}})}openGiftModal(e){let t=this.ensureGiftModalMounted();t&&(e!==void 0&&this.updateGiftModalAmount(e),t.classList.add(`is-open`),t.setAttribute(`aria-hidden`,`false`),document.body.classList.add(`gift-modal-locked`),document.documentElement.classList.add(`gift-modal-locked`))}closeGiftModal(){let e=document.getElementById(`dev-gift-modal-overlay`);e&&(e.classList.remove(`is-open`),e.setAttribute(`aria-hidden`,`true`),document.body.classList.remove(`gift-modal-locked`),document.documentElement.classList.remove(`gift-modal-locked`))}updateGiftModalAmount(e){this.selectedGiftAmount=e;let t=document.getElementById(`dev-gift-modal-overlay`);if(!t)return;let n=t.querySelectorAll(`.gift-amount-tab`),r=t.querySelector(`#custom-amount-box`),i=t.querySelector(`#custom-gift-input`);if(n.forEach(t=>{let n=t.getAttribute(`data-amount`),r=e===`custom`&&n===`custom`||Number(e)===Number(n);t.classList.toggle(`is-active`,r)}),e===`custom`){r&&(r.style.display=`block`);let e=300;i&&((!i.value||Number(i.value)<=0)&&(i.value=`300`),e=Number(i.value)||300);let t=!isNaN(e)&&e>=10?e:10;this.refreshQrAndIntent(t),i&&i.focus()}else r&&(r.style.display=`none`),this.refreshQrAndIntent(Number(e))}refreshQrAndIntent(e){let t=document.getElementById(`dev-gift-modal-overlay`);if(!t)return;let n=Number(e),r=!isNaN(n)&&n>=10?n:10,i=this.getUpiUrl(r),a=this.getQrCodeUrl(i),o=t.querySelector(`#gift-qr-image`),s=t.querySelector(`#qr-scan-label`),c=t.querySelector(`#btn-upi-intent-link`),l=t.querySelector(`#btn-upi-intent-text`);o&&(o.src=a),s&&(s.textContent=`Scan to Gift ₹${r} (All UPI Apps)`),c&&(c.href=i),l&&(l.textContent=`UPI Apps से ₹${r} Pay करें ➔`)}renderTemplatePickerModal(){return`
      <!-- Template Picker Modal (User Requested Popup to choose prank template from Send page) -->
      <div class="template-picker-overlay" id="template-picker-modal-overlay" aria-hidden="true">
        <div class="template-picker-backdrop" id="template-picker-backdrop"></div>
        <div class="template-picker-dialog" role="dialog" aria-modal="true" aria-labelledby="template-picker-title">
          
          <!-- Modal Header -->
          <div class="template-picker-header">
            <div class="picker-header-titles">
              <h3 class="template-picker-title" id="template-picker-title">
                एक prank template चुनो
              </h3>
              <p class="template-picker-subtitle">
                Bomb intro सबको वही मिलेगा, surprise fresh रहेगा.
              </p>
            </div>
            <button class="btn-close-picker-modal" id="btn-close-picker-modal" type="button" aria-label="Close dialog">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <!-- 4 Prank Templates Grid -->
          <div class="picker-templates-grid" role="radiogroup" aria-label="Prank Templates">
            ${t.map(e=>{let t=e.id===this.selectedTemplateId;return`
                <div 
                  class="prank-template-card picker-template-card ${t?`selected`:``}" 
                  data-template-id="${e.id}"
                  role="radio"
                  aria-checked="${t}"
                  tabindex="0"
                >
                  <div class="card-thumb-preview" style="background-color: ${e.thumbBg};">
                    <div class="thumb-video-wrapper">
                      <img
                        class="card-preview-image"
                        src="${e.thumbPoster}"
                        alt="${e.title} first frame"
                        loading="eager"
                      />
                      <div class="thumb-video-gradient-overlay" aria-hidden="true"></div>
                    </div>

                    <div class="thumb-number">${e.num}</div>

                    <div class="thumb-indicator-wrap">
                      ${t?`
                        <div class="thumb-selected-check" aria-label="Selected">
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </div>
                      `:`
                        <div class="thumb-unselected-circle"></div>
                      `}
                    </div>
                  </div>

                  <div class="card-content-body">
                    <div class="card-main-title">${e.title}</div>
                    <div class="card-main-desc">${e.subtitle}</div>

                    <div class="card-action-bar">
                      <button 
                        type="button" 
                        class="btn-card-preview-play" 
                        data-preview-src="${e.videoSrc}" 
                        data-preview-title="${e.title}" 
                        data-template-id="${e.id}"
                        aria-label="Play video ${e.title}"
                      >
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                        <span>Play Video</span>
                      </button>
                      <button 
                        type="button"
                        class="btn-picker-select-action ${t?`is-selected`:``}"
                        data-template-id="${e.id}"
                        aria-label="Select ${e.title}"
                      >
                        ${t?`✓ चुना हुआ`:`यह चुनें`}
                      </button>
                    </div>
                  </div>
                </div>
              `}).join(``)}
          </div>

        </div>
      </div>
    `}ensureTemplatePickerModalMounted(){let e=document.getElementById(`template-picker-modal-overlay`);if(e){let t=document.createElement(`div`);t.innerHTML=this.renderTemplatePickerModal();let n=t.firstElementChild;e.innerHTML=n.innerHTML,this.bindTemplatePickerModalEvents(e)}else{let t=document.createElement(`div`);t.innerHTML=this.renderTemplatePickerModal(),e=t.firstElementChild,document.body.appendChild(e),this.bindTemplatePickerModalEvents(e)}return e}bindTemplatePickerModalEvents(e){if(!e)return;let t=e.querySelector(`#btn-close-picker-modal`);t&&t.addEventListener(`click`,e=>{e.stopPropagation(),this.closeTemplatePickerModal()});let n=e.querySelector(`#template-picker-backdrop`);n&&n.addEventListener(`click`,e=>{e.stopPropagation(),this.closeTemplatePickerModal()}),e.querySelectorAll(`.picker-template-card`).forEach(e=>{e.addEventListener(`click`,t=>{if(t.target.closest(`.btn-card-preview-play`))return;t.stopPropagation();let n=e.getAttribute(`data-template-id`);n&&(this.selectTemplate(n),this.closeTemplatePickerModal())})}),e.querySelectorAll(`.btn-card-preview-play`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.getAttribute(`data-preview-src`),r=e.getAttribute(`data-preview-title`),i=e.getAttribute(`data-template-id`);this.openVideoPreviewModal(n,r,i)})})}openTemplatePickerModal(){this.isTemplatePickerOpen=!0;let e=this.ensureTemplatePickerModalMounted();e&&(e.classList.add(`is-open`),e.setAttribute(`aria-hidden`,`false`)),document.body.classList.add(`picker-modal-locked`)}closeTemplatePickerModal(){this.isTemplatePickerOpen=!1;let e=document.getElementById(`template-picker-modal-overlay`);e&&(e.classList.remove(`is-open`),e.setAttribute(`aria-hidden`,`true`)),document.body.classList.remove(`picker-modal-locked`)}selectTemplate(e){this.selectedTemplateId=e;let t=this.getSelectedTemplate();document.querySelectorAll(`.prank-template-card`).forEach(t=>{let n=t.getAttribute(`data-template-id`)===e;t.classList.toggle(`selected`,n),t.setAttribute(`aria-checked`,n?`true`:`false`);let r=t.querySelector(`.thumb-indicator-wrap`);r&&(r.innerHTML=n?`
            <div class="thumb-selected-check" aria-label="Selected">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
          `:`<div class="thumb-unselected-circle"></div>`);let i=t.querySelector(`.btn-picker-select-action`);i&&(i.classList.toggle(`is-selected`,n),i.textContent=n?`✓ चुना हुआ`:`यह चुनें`)});let n=document.querySelector(`#bottom-selected-name`);n&&(n.textContent=t.title);let r=document.querySelector(`.chosen-avatar-img`);r&&(r.src=t.thumbPoster,r.alt=t.title);let i=document.querySelector(`#chosen-template-title`);i&&(i.textContent=t.title);let a=document.querySelector(`#display-prank-url`);a&&(a.textContent=this.getShareUrl())}openVideoPreviewModal(t,n,r){t&&e.loadTemplateVideo(t),this.djAudio&&!this.djAudio.paused&&this.djAudio.pause(),this.jethalal2Video&&!this.jethalal2Video.paused&&this.jethalal2Video.pause();let i=document.getElementById(`template-video-preview-modal`);i||(i=document.createElement(`div`),i.id=`template-video-preview-modal`,i.className=`template-video-preview-modal`,document.body.appendChild(i)),i.innerHTML=`
      <div class="preview-modal-backdrop" id="preview-modal-backdrop"></div>
      <div class="preview-modal-content">
        <div class="preview-modal-header">
          <div class="preview-modal-title">
            <span class="preview-title-badge">PRANK PREVIEW</span>
            <h3 class="preview-title-text">${n}</h3>
          </div>
          <button class="btn-close-preview-modal" id="btn-close-preview-modal" type="button" aria-label="Close Preview">✕</button>
        </div>
        <div class="preview-modal-video-wrap">
          <video 
            id="preview-modal-video-element" 
            class="preview-modal-video-element" 
            src="${t}" 
            controls 
            autoplay 
            playsinline 
            webkit-playsinline
          ></video>
        </div>
        <div class="preview-modal-footer">
          <button class="btn btn-luxury-gold btn-modal-confirm-select" id="btn-modal-confirm-select" type="button">
            <span>यह Prank भेजें (Select & Continue) ➔</span>
          </button>
        </div>
      </div>
    `,i.classList.add(`is-active`);let a=i.querySelector(`#preview-modal-video-element`);a&&a.play().catch(()=>{});let o=()=>{a&&(a.pause(),a.currentTime=0),i.classList.remove(`is-active`)},s=i.querySelector(`#btn-close-preview-modal`);s&&s.addEventListener(`click`,o);let c=i.querySelector(`#preview-modal-backdrop`);c&&c.addEventListener(`click`,o);let l=i.querySelector(`#btn-modal-confirm-select`);l&&l.addEventListener(`click`,()=>{o(),r&&this.selectTemplate(r),this.closeTemplatePickerModal(),this.currentView!==`send`&&this.goToView(`send`)})}toggleDjAudio(){this.prepareEndingAssets(),this.djAudio&&(this.isDjPlaying?this.djAudio.pause():(this.jethalal2Video&&!this.jethalal2Video.paused&&this.jethalal2Video.pause(),this.setupAudioAnalyser(),this.audioCtx&&this.audioCtx.state===`suspended`&&this.audioCtx.resume().catch(()=>{}),this.djAudio.ended&&(this.djAudio.currentTime=0),this.djAudio.volume=1,this.djAudio.play().catch(e=>console.warn(`DJ audio play blocked:`,e))))}updateDjUI(){let e=this.container.querySelector(`#jethalal-dj-card`),t=this.container.querySelector(`#btn-play-dj-remix`),n=this.container.querySelector(`#dj-btn-icon`),r=this.container.querySelector(`#dj-btn-text`),i=this.container.querySelector(`#dj-avatar-badge`),a=this.container.querySelector(`#dj-avatar-badge-icon`),o=this.container.querySelector(`#dj-disc-status-tag`),s=this.container.querySelector(`#dj-status-text`);e&&(this.isDjPlaying?e.classList.add(`playing`):e.classList.remove(`playing`)),t&&(this.isDjPlaying?t.classList.add(`is-playing`):t.classList.remove(`is-playing`)),n&&(n.textContent=this.isDjPlaying?`⏸`:`▶`),r&&(r.textContent=this.isDjPlaying?`DJ रोकें (Pause)`:`DJ वर्ज़न बजाओ`),i&&i.classList.toggle(`is-playing`,this.isDjPlaying),a&&(a.textContent=this.isDjPlaying?`⏸`:`▶`),o&&o.classList.toggle(`active`,this.isDjPlaying),s&&(s.textContent=this.isDjPlaying?`BEAT DROPPING ⚡`:`CLICK TO DANCE 🎧`)}initDjVisualizer(){let e=this.container.querySelector(`#dj-visualizer-canvas`);e&&(this.visualizerCanvas=e,this.visualizerCtx=e.getContext(`2d`),this.numVisualizerBars=72,this.barHeights&&this.barHeights.length===this.numVisualizerBars||(this.barHeights=new Float32Array(this.numVisualizerBars).fill(4)),this.startVisualizerLoop())}setupAudioAnalyser(){if(this.audioAnalyser||!this.djAudio)return;let e=window.AudioContext||window.webkitAudioContext;if(e)try{this.audioCtx=new e,this.audioAnalyser=this.audioCtx.createAnalyser(),this.audioAnalyser.fftSize=256,this.audioAnalyser.smoothingTimeConstant=.25,this.audioAnalyser.minDecibels=-90,this.audioAnalyser.maxDecibels=-10,this.audioSource=this.audioCtx.createMediaElementSource(this.djAudio),this.audioSource.connect(this.audioAnalyser),this.audioAnalyser.connect(this.audioCtx.destination),this.freqData=new Uint8Array(this.audioAnalyser.frequencyBinCount)}catch(e){console.warn(`AudioAnalyser setup fallback note:`,e)}}startVisualizerLoop(){this.visualizerAnimationId&&=(cancelAnimationFrame(this.visualizerAnimationId),null);let e=t=>{this.visualizerCanvas&&this.visualizerCanvas.isConnected&&(this.drawDjVisualizer(t),this.visualizerAnimationId=requestAnimationFrame(e))};this.visualizerAnimationId=requestAnimationFrame(e)}drawDjVisualizer(e){let t=this.visualizerCtx,n=this.visualizerCanvas;if(!t||!n)return;let r=n.width,i=n.height,a=r/2,o=i/2;t.clearRect(0,0,r,i);let s=!1,c=0,l=0;if(this.isDjPlaying&&this.audioAnalyser&&this.freqData){this.audioAnalyser.getByteFrequencyData(this.freqData);let e=0;for(let t=1;t<=8;t++)e+=this.freqData[t];c=e/8;let t=0;for(let e=9;e<=36;e++)t+=this.freqData[e];l=t/28;let n=0;for(let e=37;e<=90;e++)n+=this.freqData[e];n/54,(c>2||l>2)&&(s=!0)}let u=(e||0)*.001,d=u*2.2*Math.PI*2%(Math.PI*2),f=Math.max(0,Math.sin(d))**7,p=Math.max(0,Math.sin(d+Math.PI))**9,m=Math.max(0,Math.sin(u*8.8*Math.PI*2))**4,h=.7+.3*Math.sin(u*.6),g=this.numVisualizerBars,_=(s?c/255:.15+.85*f)**1.4,v=(this.isDjPlaying?1+_*.12:1)-this.currentBassScale;this.currentBassScale+=v*(v>0?.65:.25);let y=this.container.querySelector(`#dj-avatar-shell`);y&&(y.style.transform=`translate(-50%, -50%) scale(${this.currentBassScale.toFixed(3)})`),this.isDjPlaying&&(this.visualizerRotation+=.004+_*.008);let b=t.createRadialGradient(a,o,91,a,o,289);this.isDjPlaying?(b.addColorStop(0,`rgba(255, 183, 3, ${.08+_*.16})`),b.addColorStop(.45,`rgba(255, 60, 120, ${.05+_*.12})`),b.addColorStop(1,`rgba(0, 0, 0, 0)`)):(b.addColorStop(0,`rgba(255, 183, 3, 0.04)`),b.addColorStop(1,`rgba(0, 0, 0, 0)`)),t.fillStyle=b,t.beginPath(),t.arc(a,o,289,0,Math.PI*2),t.fill();let x=(e,n,r,i,s)=>{let c=Math.PI*2/n,l=this.visualizerRotation*s;for(let s=0;s<n;s++){let d=s*c+l,f=a+Math.cos(d)*e,p=o+Math.sin(d)*e,m=(s/n*360+i)%360;t.beginPath(),t.arc(f,p,r,0,Math.PI*2);let h=this.isDjPlaying?.8+Math.sin(d*3+u*6)*.2+_*.2:.35;t.fillStyle=`hsla(${m}, 100%, 62%, ${Math.min(1,h)})`,t.shadowColor=`hsla(${m}, 100%, 60%, 0.8)`,t.shadowBlur=this.isDjPlaying?4+_*6:1,t.fill()}};x(152,56,2.2,0,.6),x(172,72,2.6,30,-.4);for(let e=0;e<g;e++){let n=4;if(this.isDjPlaying){let t=Math.abs(Math.sin(e/g*Math.PI*4+this.visualizerRotation*.5))**1.8,r=e%3==0?1.48:e%2==0?.62:1.18,i=.65+.7*Math.abs(Math.sin(e*17.3+u*20));if(s&&this.freqData){let a=Math.floor(Math.abs(Math.sin(e/g*Math.PI*3))*(this.freqData.length*.55));n=4+((this.freqData[a]||0)/255)**1.6*115*r*i+_*40*t}else{let a=f*82*t*r,o=p*48*Math.sin(e*.45+u*8)*i,s=m*32*(e%2==0?1.25:.25),c=(Math.abs(Math.sin(e*.8+u*12))*26+4)*h;n=4+Math.max(0,c+a+Math.abs(o)+s)}}let r=n-this.barHeights[e];r>0?this.barHeights[e]+=r*.74:this.barHeights[e]+=r*.38;let i=this.barHeights[e],c=e/g*Math.PI*2+this.visualizerRotation,l=Math.cos(c),d=Math.sin(c),v=a+l*194,y=o+d*194,b=a+l*(194+i),x=o+d*(194+i),S=Math.floor(e/g*360);t.beginPath(),t.moveTo(v,y),t.lineTo(b,x),t.lineWidth=3.6,t.lineCap=`round`,t.strokeStyle=`hsl(${S}, 100%, ${this.isDjPlaying?`64%`:`48%`})`,t.shadowColor=`hsla(${S}, 100%, 60%, ${this.isDjPlaying?.75:.2})`,t.shadowBlur=this.isDjPlaying?6+i/115*8:2,t.stroke()}t.shadowBlur=0}bindJethalal2Events(){let e=this.container.querySelector(`#jethalal2-video-player`);if(!e)return;this.jethalal2Video=e,e.addEventListener(`play`,()=>this.updateJethalal2UI()),e.addEventListener(`pause`,()=>this.updateJethalal2UI()),e.addEventListener(`ended`,()=>{e.currentTime=0,this.updateJethalal2UI()});let t=this.container.querySelector(`#jethalal2-video-wrap`);if(t){let e=e=>{e.stopPropagation(),this.toggleJethalal2Video()};t.addEventListener(`click`,e),t.addEventListener(`keydown`,t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),e(t))})}let n=this.container.querySelector(`#btn-play-jethalal2`);n&&n.addEventListener(`click`,e=>{e.stopPropagation(),this.toggleJethalal2Video()})}toggleJethalal2Video(){let e=this.container.querySelector(`#jethalal2-video-player`);e&&(this.jethalal2Video=e,e.paused?(this.djAudio&&!this.djAudio.paused&&this.djAudio.pause(),e.ended&&(e.currentTime=0),e.volume=1,e.play().catch(e=>console.warn(`Jethalal 2 video play blocked:`,e))):e.pause())}updateJethalal2UI(){let e=this.container.querySelector(`#jethalal2-video-player`),t=this.container.querySelector(`#jethalal2-card`),n=this.container.querySelector(`#btn-play-jethalal2`),r=this.container.querySelector(`#jethalal2-btn-icon`),i=this.container.querySelector(`#jethalal2-btn-text`),a=e&&!e.paused&&!e.ended;this.isJethalal2Playing=a,t&&t.classList.toggle(`playing`,a),n&&n.classList.toggle(`is-playing`,a),r&&(r.textContent=a?`⏸`:`▶`),i&&(i.textContent=a?`वीडियो रोकें (Pause)`:`वीडियो चलाओ`)}toggleDjLike(){if(this.hasLikedDj){this.showToast(`आप पहले ही लाइक कर चुके हैं! ❤️`);let e=this.container.querySelector(`#btn-dj-like`);e&&(e.classList.add(`like-pulse`),setTimeout(()=>e.classList.remove(`like-pulse`),600))}else this.hasLikedDj=!0,this.djLikeCount+=1,typeof localStorage<`u`&&(localStorage.setItem(`faah_dj_has_liked`,`true`),localStorage.setItem(`faah_dj_likes_count`,this.djLikeCount.toString())),this.triggerLikeFloatingAnimation(),this.updateLikeUI(),this.showToast(`DJ धमाका पसंद करने के लिए शुक्रिया! ❤️`)}triggerLikeFloatingAnimation(){let e=this.container.querySelector(`#btn-dj-like`);if(!e)return;e.classList.add(`like-pulse`),setTimeout(()=>e.classList.remove(`like-pulse`),600);let t=document.createElement(`span`);t.className=`dj-floating-like`,t.textContent=`+1 ❤️`,e.appendChild(t),setTimeout(()=>{t.parentNode&&t.remove()},1e3)}updateLikeUI(){let e=this.container.querySelector(`#btn-dj-like`),t=this.container.querySelector(`#dj-like-count`),n=this.container.querySelector(`#dj-like-icon`);e&&(e.classList.toggle(`has-liked`,this.hasLikedDj),e.setAttribute(`title`,`${this.djLikeCount.toLocaleString(`en-IN`)} likes`)),n&&(n.textContent=this.hasLikedDj?`❤️`:`🤍`),t&&(t.textContent=this.formatLikeCount(this.djLikeCount),t.classList.add(`badge-bounce`),setTimeout(()=>t.classList.remove(`badge-bounce`),400))}calculateCurrentLikes(){let e=1248,t=Math.max(0,Date.now()-17938674e5)/36e5,n=Math.floor(t),r=t-n,i=0;for(let e=0;e<n;e++){let t=Math.sin(e*12.9898+78.233)*43758.5453,n=t-Math.floor(t);i+=Math.floor(110+n*80)}let a=Math.sin(n*12.9898+78.233)*43758.5453,o=a-Math.floor(a),s=Math.floor(110+o*80);i+=Math.floor(r*s);let c=+(typeof localStorage<`u`&&localStorage.getItem(`faah_dj_has_liked`)===`true`),l=e+i+c,u=0;typeof localStorage<`u`&&(u=parseInt(localStorage.getItem(`faah_dj_likes_count`)||`0`,10));let d=Math.max(l,u,e);return typeof localStorage<`u`&&localStorage.setItem(`faah_dj_likes_count`,d.toString()),d}startLikeUpdater(){typeof window<`u`&&(this.likeTimer&&clearInterval(this.likeTimer),this.likeTimer=setInterval(()=>{let e=this.calculateCurrentLikes();e>this.djLikeCount&&(this.djLikeCount=e,this.updateLikeUI())},6e4))}formatLikeCount(e){let t=typeof e==`number`?e:parseInt(e,10)||0;if(t<1e3)return t.toString();if(t<1e6){let e=Math.floor(t/1e3*10)/10;return`${e%1==0?e.toFixed(0):e.toFixed(1)}k`}let n=Math.floor(t/1e6*10)/10;return`${n%1==0?n.toFixed(0):n.toFixed(1)}M`}toggleMoreJethalal(){this.showMoreJethalal=!this.showMoreJethalal;let e=this.container.querySelector(`#jethalal2-expand-wrap`),t=this.container.querySelector(`#btn-dj-more`),n=this.container.querySelector(`#dj-more-text`),r=this.container.querySelector(`#dj-more-arrow`);e&&(e.classList.toggle(`is-expanded`,this.showMoreJethalal),this.showMoreJethalal?(e.setAttribute(`aria-hidden`,`false`),setTimeout(()=>{e.scrollIntoView({behavior:`smooth`,block:`nearest`})},150)):(e.setAttribute(`aria-hidden`,`true`),this.jethalal2Video&&!this.jethalal2Video.paused&&this.jethalal2Video.pause())),t&&(t.classList.toggle(`is-active`,this.showMoreJethalal),t.setAttribute(`aria-expanded`,this.showMoreJethalal?`true`:`false`)),n&&(n.textContent=this.showMoreJethalal?`Less`:`More`),r&&(r.textContent=this.showMoreJethalal?`▴`:`▾`)}triggerGiftUnboxing(){if(this.prepareEndingAssets(),this.isGiftOpening)return;this.isGiftOpening=!0;let e=this.container.querySelector(`#gift-box-stage`),t=this.container.querySelector(`#gift-tap-callout`);if(e&&(e.classList.remove(`is-closing`),e.classList.add(`is-open`)),t&&t.classList.add(`is-hidden`),this.rawanAudio)try{this.rawanAudio.currentTime=0,this.rawanAudio.volume=1;let e=this.rawanAudio.play();e!==void 0&&e.catch(e=>{console.log(`Rawan audio play blocked:`,e)})}catch(e){console.warn(`Error playing rawan audio:`,e)}this.giftCloseTimeout&&clearTimeout(this.giftCloseTimeout),this.giftCloseTimeout=setTimeout(()=>{this.closeGiftUnboxing()},3e3)}closeGiftUnboxing(){let e=this.container.querySelector(`#gift-box-stage`),t=this.container.querySelector(`#real-gift-sponsor-card`),n=this.container.querySelector(`#ad-space-booking-card`);e?(e.classList.remove(`is-open`),e.classList.add(`is-closing`),setTimeout(()=>{e&&e.classList.remove(`is-closing`),this.isGiftOpening=!1,this.isSponsorRevealed=!0,t&&(t.classList.add(`is-revealed`),t.setAttribute(`aria-hidden`,`false`),setTimeout(()=>{t.scrollIntoView({behavior:`smooth`,block:`center`}),t.classList.add(`sponsor-spotlight`),setTimeout(()=>{t.classList.remove(`sponsor-spotlight`)},2400)},150)),n&&(n.classList.add(`is-revealed`),n.setAttribute(`aria-hidden`,`false`))},500)):this.isGiftOpening=!1}updateCharCount(){let e=this.container.querySelector(`#textarea-char-count`),t=this.container.querySelector(`#step2-message-textarea`);if(e&&t){let n=240-t.value.length;e.textContent=`${Math.max(0,n)} characters left`}}ensureToastMounted(){let e=document.getElementById(`copy-toast`);e||(e=document.createElement(`div`),e.id=`copy-toast`,e.className=`copy-toast`,e.setAttribute(`role`,`status`),e.setAttribute(`aria-live`,`polite`),e.innerHTML=`
        <span class="toast-message" id="toast-message">Link Copy हो गया! अब WhatsApp पे भेजो</span>
      `,document.body.appendChild(e))}showToast(e){let t=document.getElementById(`copy-toast`),n=document.getElementById(`toast-message`);t&&(n&&e&&(n.textContent=e),t.classList.add(`visible`),this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{t.classList.remove(`visible`)},3200))}handleBackgroundClick(e){e&&e.target&&(this.isDealsPopoverOpen&&!e.target.closest(`#wa-deals-widget`)&&this.closeDealsPopover(!0),!e.target.closest(`button, input, textarea, a, select, [role="button"], [role="radio"], .prank-template-card, #dj-thumbnail-wrap, #scroll-down-hint, .btn, .btn-step-back, .btn-luxury-gold, .btn-change-template, .btn-step-forward, #gift-box-stage, .unexpected-gift-card, .btn-dj-sub-action, #jethalal2-video-wrap, #jethalal2-video-player, .jethalal-video2-card, .sponsor-gift-section, .btn-sponsor-gift, .dev-gift-section, #wa-deals-widget, .wa-deals-widget, .ad-space-card, #ad-space-booking-card`)&&this.playFaaah(e))}playFaaah(t){try{e.playFaaah(.7),t&&(t.clientX!==void 0||t.touches)&&this.spawnTouchRipple(t)}catch(e){console.warn(`Ending faaah play prevented:`,e)}}spawnTouchRipple(e){let t=e.clientX??(e.touches&&e.touches[0]?e.touches[0].clientX:null),n=e.clientY??(e.touches&&e.touches[0]?e.touches[0].clientY:null);if(t===null||n===null)return;let r=document.createElement(`div`);r.className=`ending-bg-ripple`,r.style.left=`${t}px`,r.style.top=`${n}px`,document.body.appendChild(r),setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r)},600)}show(){try{localStorage.setItem(`faah_has_seen_prank`,`true`),localStorage.setItem(`faah_returning_visitor`,`true`)}catch{}this.currentView=`reveal`,document.body.classList.remove(`fairy-lights-waiting`),document.body.classList.remove(`prank-video-active`),document.body.classList.add(`fairy-lights-revealed`),document.body.classList.add(`ending-mode`),typeof window<`u`&&window.__faahFairyLightsInstance&&(window.__faahFairyLightsInstance.handleResize(),window.__faahFairyLightsInstance.start()),this.render(),this.bindEvents(),this.ensureDealsWidgetMounted(),this.triggerDealsAutoPeek(),this.container.classList.add(`visible`),window.scrollTo({top:0,behavior:`smooth`})}hide(){this.closeGiftModal(),this.isSponsorRevealed=!1;let e=document.getElementById(`wa-deals-widget`);e&&e.classList.remove(`visible`),this.dealsAutoPeekTimer&&=(clearTimeout(this.dealsAutoPeekTimer),null),this.dealsAutoCloseTimer&&=(clearTimeout(this.dealsAutoCloseTimer),null),this.closeDealsPopover(!1),this.likeTimer&&=(clearInterval(this.likeTimer),null),this.djAudio&&this.djAudio.pause(),this.jethalal2Video&&this.jethalal2Video.pause(),this.chinTapakAudio&&this.chinTapakAudio.pause(),this.headerDestroy&&=(this.headerDestroy(),null),this.container.classList.remove(`visible`)}},h=class{constructor(e){this.canvas=e,this.ctx=e?e.getContext(`2d`):null,this.particles=[],this.baseParticles=38,this.maxParticles=38,this.isMobile=!1,this.animId=null,this.isRunning=!1,this.resizeHandler=()=>this.resize()}checkIsMobile(){return typeof window<`u`&&(window.innerWidth<768||window.matchMedia(`(max-width: 767px)`).matches)}init(){if(this.canvas&&this.ctx){this.resize(),window.addEventListener(`resize`,this.resizeHandler),this.particles=[];for(let e=0;e<this.maxParticles;e++)this.particles.push(this.createParticle(!0));this.start()}}resize(){if(this.canvas){if(this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width,this.canvas.height=this.height,this.isMobile=this.checkIsMobile(),this.maxParticles=this.isMobile?Math.round(this.baseParticles*.8):this.baseParticles,this.particles.length>this.maxParticles)this.particles.length=this.maxParticles;else for(;this.particles.length<this.maxParticles;)this.particles.push(this.createParticle(!0))}}createParticle(e=!1){let t=this.isMobile?Math.random()*.8+.5:Math.random()*1.8+.8;return{x:Math.random()*(this.width||window.innerWidth),y:e?Math.random()*(this.height||window.innerHeight):(this.height||window.innerHeight)+10,radius:t,speedY:Math.random()*.7+.35,speedX:(Math.random()-.5)*.4,sineOffset:Math.random()*Math.PI*2,sineSpeed:Math.random()*.02+.01,alpha:Math.random()*.6+.3,maxAlpha:Math.random()*.5+.4,pulseSpeed:Math.random()*.03+.015,color:Math.random()>.4?`255, 183, 3`:Math.random()>.5?`255, 234, 0`:`255, 214, 102`}}start(){if(this.isRunning)return;this.isRunning=!0;let e=()=>{this.isRunning&&(this.render(),this.animId=requestAnimationFrame(e))};e()}stop(){this.isRunning=!1,this.animId&&=(cancelAnimationFrame(this.animId),null),this.ctx&&this.canvas&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}render(){let e=this.ctx;e.clearRect(0,0,this.width,this.height);let t=this.isMobile;for(let n=0;n<this.particles.length;n++){let r=this.particles[n];r.y-=r.speedY,r.sineOffset+=r.sineSpeed,r.x+=Math.sin(r.sineOffset)*.5+r.speedX,r.alpha=.25+(Math.sin(r.sineOffset*1.5)+1)*.5*(r.maxAlpha-.25),e.beginPath(),e.arc(r.x,r.y,r.radius,0,Math.PI*2),e.fillStyle=`rgba(${r.color}, ${r.alpha.toFixed(2)})`,e.shadowBlur=t?r.radius*2.5:r.radius*4,e.shadowColor=`rgba(${r.color}, 0.8)`,e.fill(),(r.y<-15||r.x<-20||r.x>this.width+20)&&(this.particles[n]=this.createParticle(!1))}}destroy(){this.stop(),window.removeEventListener(`resize`,this.resizeHandler)}},g=class{constructor(){this.landingStage=document.getElementById(`landing-stage`),this.swagatamBtn=document.getElementById(`swagatam-trigger`),this.hanumanBtn=document.getElementById(`landing-hanuman-trigger`),this.silhouetteStage=document.getElementById(`sacred-silhouette-stage`),this.flowerToranBtn=document.getElementById(`mobile-flower-toran`),this.sparklesContainer=document.getElementById(`flower-sparkles-container`),this.appEl=document.getElementById(`app`),this.templeBgWrapper=document.querySelector(`.temple-bg-wrapper`),this.swagatamAudio=null,this.hanumanAudio=null,this.kirarinAudio=null,this.audioCtx=null,this.audioAnalyser=null,this.audioSource=null,this.freqData=null,this.animId=null,this.dancePhase=0,this.smoothBass=0,this.smoothVocal=0,this.smoothTreble=0,this.faaahPool=[],this.faaahPoolIndex=0,this.faaahPoolSize=4,this.isPlayingSwagatam=!1,this.isPlayingHanuman=!1,this.boundSwagatamClick=this.handleSwagatamClick.bind(this),this.boundHanumanClick=this.handleHanumanClick.bind(this),this.boundSwagatamKey=this.handleSwagatamKey.bind(this),this.boundHanumanKey=this.handleHanumanKey.bind(this),this.boundFlowerClick=this.handleFlowerClick.bind(this),this.boundBackgroundClick=this.handleBackgroundClick.bind(this),this.boundSwagatamEnded=this.stopSwagatamDance.bind(this),this.boundAnimateWaveform=this.animateWaveform.bind(this)}init(){this.appEl||=document.getElementById(`app`),this.templeBgWrapper||=document.querySelector(`.temple-bg-wrapper`),this.swagatamBtn&&(this.swagatamBtn.addEventListener(`click`,this.boundSwagatamClick),this.swagatamBtn.addEventListener(`keydown`,this.boundSwagatamKey)),this.hanumanBtn&&(this.hanumanBtn.addEventListener(`click`,this.boundHanumanClick),this.hanumanBtn.addEventListener(`keydown`,this.boundHanumanKey)),this.silhouetteStage&&this.silhouetteStage.addEventListener(`click`,this.boundHanumanClick),this.flowerToranBtn&&(this.flowerToranBtn.addEventListener(`click`,this.boundFlowerClick),this.flowerToranBtn.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.playKirarin(e))})),this.landingStage&&this.landingStage.addEventListener(`click`,this.boundBackgroundClick)}prepareFaaahAudio(){this.faaahPool=e.getFaaahPool(4,.7)}prepareLandingAudio(){if(!this.swagatamAudio)try{this.swagatamAudio=e.getAudio(`./assets/audio/swagatam song.mp3`,.95),this.hanumanAudio=e.getAudio(`./assets/audio/hanumaan.mp3`,.95),this.kirarinAudio=e.getAudio(`./assets/audio/kirarin_glitter_star.mp3`,.95),e.getAudio(`./assets/audio/rawan.mp3`,.95),this.swagatamAudio&&(this.swagatamAudio.addEventListener(`ended`,this.boundSwagatamEnded),this.swagatamAudio.addEventListener(`pause`,this.boundSwagatamEnded),this.swagatamAudio.addEventListener(`error`,this.boundSwagatamEnded)),this.hanumanAudio&&this.hanumanAudio.addEventListener(`ended`,()=>{this.isPlayingHanuman=!1,this.silhouetteStage&&this.silhouetteStage.classList.remove(`hanuman-audio-playing`)})}catch(e){console.warn(`Landing audio init warning:`,e)}}handleBackgroundClick(e){e&&(e.target.closest(`#swagatam-trigger, #landing-hanuman-trigger, #bomb-container, #mobile-flower-toran, .bomb-video-trigger, #interactive-click-guide, button, a, video`)||this.playFaaah(e))}playFaaah(t){try{e.playFaaah(.7),t&&(t.clientX!==void 0||t.touches)&&this.spawnTouchRipple(t)}catch(e){console.error(`Error playing faaah audio:`,e)}}spawnTouchRipple(e){let t=e.clientX??(e.touches&&e.touches[0]?e.touches[0].clientX:null),n=e.clientY??(e.touches&&e.touches[0]?e.touches[0].clientY:null);if(t===null||n===null)return;let r=document.createElement(`div`);r.className=`landing-bg-ripple`,r.style.left=`${t}px`,r.style.top=`${n}px`,document.body.appendChild(r),setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r)},600)}handleSwagatamClick(e){e&&(e.preventDefault(),e.stopPropagation()),this.playSwagatam()}handleSwagatamKey(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.playSwagatam())}handleHanumanClick(e){e&&(e.preventDefault(),e.stopPropagation()),this.playHanuman()}handleHanumanKey(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.playHanuman())}handleFlowerClick(e){e&&(e.preventDefault(),e.stopPropagation()),this.playKirarin(e)}setupAudioAnalyser(){if(this.audioAnalyser||!this.swagatamAudio)return;let e=window.AudioContext||window.webkitAudioContext;if(e)try{this.audioCtx=new e,this.audioAnalyser=this.audioCtx.createAnalyser(),this.audioAnalyser.fftSize=256,this.audioAnalyser.smoothingTimeConstant=.35,this.audioAnalyser.minDecibels=-85,this.audioAnalyser.maxDecibels=-15,this.audioSource=this.audioCtx.createMediaElementSource(this.swagatamAudio),this.audioSource.connect(this.audioAnalyser),this.audioAnalyser.connect(this.audioCtx.destination),this.freqData=new Uint8Array(this.audioAnalyser.frequencyBinCount)}catch(e){console.warn(`Swagatam AudioAnalyser setup note:`,e)}}startSwagatamDance(){this.isPlayingSwagatam=!0,document.body.classList.add(`swagatam-dj-dancing`),document.documentElement.classList.add(`swagatam-dj-active`),this.swagatamBtn&&this.swagatamBtn.classList.add(`audio-playing`),this.animId&&=(cancelAnimationFrame(this.animId),null),this.dancePhase=0,this.smoothBass=0,this.smoothVocal=0,this.smoothTreble=0,this.animId=requestAnimationFrame(this.boundAnimateWaveform)}stopSwagatamDance(){this.isPlayingSwagatam=!1,this.animId&&=(cancelAnimationFrame(this.animId),null),document.body.classList.remove(`swagatam-dj-dancing`),document.documentElement.classList.remove(`swagatam-dj-active`),this.swagatamBtn&&(this.swagatamBtn.classList.remove(`audio-playing`),this.swagatamBtn.style.transform=``,this.swagatamBtn.style.filter=``),this.templeBgWrapper&&(this.templeBgWrapper.style.transform=``),this.appEl&&(this.appEl.style.transform=``),document.body.style.removeProperty(`--dj-bass-pct`),document.body.style.removeProperty(`--dj-vocal-pct`),document.body.style.removeProperty(`--dj-treble-pct`),document.body.style.removeProperty(`--dj-border-glow`),document.body.style.removeProperty(`--dj-border-alpha`)}animateWaveform(){if(!this.isPlayingSwagatam)return;let e=0,t=0,n=0;if(this.audioAnalyser&&this.freqData){this.audioAnalyser.getByteFrequencyData(this.freqData);let r=(this.freqData[0]+this.freqData[1]+this.freqData[2]+this.freqData[3]+this.freqData[4])/5;e=Math.min(1,Math.max(0,r/255));let i=0;for(let e=5;e<=22;e++)i+=this.freqData[e];let a=i/18;t=Math.min(1,Math.max(0,a/255));let o=0;for(let e=23;e<=60;e++)o+=this.freqData[e];let s=o/38;n=Math.min(1,Math.max(0,s/255))}else{let r=Date.now()*.006;e=.5+.5*Math.sin(r),t=.4+.4*Math.sin(r*1.3),n=.3+.3*Math.cos(r*2)}this.smoothBass=this.smoothBass*.65+e*.35,this.smoothVocal=this.smoothVocal*.7+t*.3,this.smoothTreble=this.smoothTreble*.6+n*.4;let r=1+this.smoothBass*2.2+this.smoothVocal*1.5+this.smoothTreble*1.8;this.dancePhase+=.075*r;let i=1+this.smoothBass*.045+this.smoothVocal*.02,a=-(this.smoothBass*11)*Math.abs(Math.sin(this.dancePhase*1.4))+this.smoothTreble*3.5,o=(this.smoothTreble*2.2+this.smoothVocal*1)*Math.sin(this.dancePhase),s=`translate3d(${((this.smoothTreble*8.5+this.smoothBass*4.5)*Math.cos(this.dancePhase*.8)).toFixed(2)}px, ${a.toFixed(2)}px, 0) scale(${i.toFixed(4)}) rotate(${o.toFixed(2)}deg)`;if(this.templeBgWrapper&&(this.templeBgWrapper.style.transform=s),this.appEl&&(this.appEl.style.transform=s),this.swagatamBtn){let e=1+this.smoothVocal*.15+this.smoothBass*.09,t=-(this.smoothVocal*6.5)*Math.sin(this.dancePhase*1.8),n=this.smoothVocal*1.6*Math.sin(this.dancePhase*1.1),r=Math.round(14+this.smoothVocal*42+this.smoothBass*25),i=(.45+this.smoothVocal*.55).toFixed(2);this.swagatamBtn.style.transform=`translate3d(0, ${t.toFixed(2)}px, 0) scale(${e.toFixed(4)}) rotate(${n.toFixed(2)}deg)`,this.swagatamBtn.style.filter=`drop-shadow(0 0 ${r}px rgba(255, 215, 0, ${i})) drop-shadow(0 0 ${Math.round(r*1.6)}px rgba(255, 120, 0, ${(i*.7).toFixed(2)}))`}document.body.style.setProperty(`--dj-bass-pct`,this.smoothBass.toFixed(3)),document.body.style.setProperty(`--dj-vocal-pct`,this.smoothVocal.toFixed(3)),document.body.style.setProperty(`--dj-treble-pct`,this.smoothTreble.toFixed(3)),document.body.style.setProperty(`--dj-border-glow`,`${Math.round(40+this.smoothBass*90)}px`),document.body.style.setProperty(`--dj-border-alpha`,(.25+this.smoothBass*.7).toFixed(2)),this.animId=requestAnimationFrame(this.boundAnimateWaveform)}async playSwagatam(){try{if(this.prepareLandingAudio(),this.hanumanAudio&&(this.hanumanAudio.pause(),this.hanumanAudio.currentTime=0),this.silhouetteStage&&this.silhouetteStage.classList.remove(`hanuman-audio-playing`),this.isPlayingHanuman=!1,this.setupAudioAnalyser(),this.audioCtx&&this.audioCtx.state===`suspended`)try{await this.audioCtx.resume()}catch{}if(this.swagatamAudio){this.swagatamAudio.currentTime=0;let e=this.swagatamAudio.play();e===void 0?this.startSwagatamDance():e.then(()=>{this.startSwagatamDance()}).catch(e=>{console.log(`Swagatam audio play prevented:`,e),this.stopSwagatamDance()})}}catch(e){console.error(`Error playing swagatam song:`,e),this.stopSwagatamDance()}}playHanuman(){try{if(this.prepareLandingAudio(),this.swagatamAudio&&(this.swagatamAudio.pause(),this.swagatamAudio.currentTime=0),this.stopSwagatamDance(),this.hanumanAudio){this.hanumanAudio.currentTime=0;let e=this.hanumanAudio.play();e!==void 0&&e.catch(e=>{console.log(`Hanuman audio play prevented:`,e)}),this.isPlayingHanuman=!0,this.silhouetteStage&&this.silhouetteStage.classList.add(`hanuman-audio-playing`)}}catch(e){console.error(`Error playing hanumaan audio:`,e)}}playKirarin(e){try{if(this.prepareLandingAudio(),this.kirarinAudio){this.kirarinAudio.currentTime=0;let e=this.kirarinAudio.play();e!==void 0&&e.catch(e=>{console.log(`Kirarin audio play prevented:`,e)})}this.flowerToranBtn&&(this.flowerToranBtn.classList.remove(`flower-tapped`),this.flowerToranBtn.offsetWidth,this.flowerToranBtn.classList.add(`flower-tapped`)),this.spawnGlitterStars(e)}catch(e){console.error(`Error playing kirarin glitter star SFX:`,e)}}spawnGlitterStars(e){let t=this.sparklesContainer||this.flowerToranBtn;if(!t)return;let n=[`✨`,`⭐`,`🌟`,`✨`,`💫`];for(let e=0;e<5;e++){let r=document.createElement(`span`);r.className=`glitter-star-particle`,r.textContent=n[e%n.length];let i=-(Math.random()*55+20),a=(Math.random()-.5)*60,o=Math.random()*60+10,s=Math.random()*70+15;r.style.left=`${o}px`,r.style.top=`${s}px`,r.style.setProperty(`--dx`,`${i}px`),r.style.setProperty(`--dy`,`${a}px`),r.style.animationDelay=`${e*.06}s`,t.appendChild(r),setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r)},1e3)}}stopAll(){try{this.swagatamAudio&&(this.swagatamAudio.pause(),this.swagatamAudio.currentTime=0),this.stopSwagatamDance(),this.hanumanAudio&&(this.hanumanAudio.pause(),this.hanumanAudio.currentTime=0),this.kirarinAudio&&(this.kirarinAudio.pause(),this.kirarinAudio.currentTime=0),this.faaahPool.forEach(e=>{e.pause(),e.currentTime=0}),this.isPlayingHanuman=!1,this.silhouetteStage&&this.silhouetteStage.classList.remove(`hanuman-audio-playing`)}catch{}}},_=class{constructor(){this.appEl=document.getElementById(`app`),this.curtainContainerEl=document.getElementById(`curtain-stage-overlay`),this.torchOverlayEl=document.getElementById(`cinematic-torch-overlay`),this.landingEl=document.getElementById(`landing-stage`),this.bombContainerEl=document.getElementById(`bomb-container`),this.videoContainerEl=document.getElementById(`video-stage`),this.videoEl=document.getElementById(`prank-video`),this.explosionCanvasEl=document.getElementById(`explosion-canvas`),this.flashEl=document.getElementById(`flash-overlay`),this.endingContainerEl=document.getElementById(`ending-stage`),this.sparksCanvasEl=document.getElementById(`festive-sparks-canvas`),this.currentTemplate=null,this.curtainController=null,this.torchTourController=null,this.entranceFireworks=null,this.bombController=null,this.explosionManager=null,this.videoPlayer=null,this.endingScreen=null,this.festiveSparks=null,this.landingInteractions=null}init(){let t=new URLSearchParams(window.location.search),r=t.get(`replay`)===`true`||t.get(`replay`)===`1`,a=(t.get(`name`)||t.get(`to`)||t.get(`n`)||``).trim(),s=a.length>0,d=!1;try{localStorage.getItem(`faah_has_seen_prank`)!==`true`&&localStorage.getItem(`faah_returning_visitor`)!==`true`||r||s||(d=!0)}catch{d=!1}let f=t.get(`surprise`)||t.get(`dhamaka`)||t.get(`diwali`)||t.get(`prank`);this.currentTemplate=n(f),this.explosionManager=new l(this.explosionCanvasEl,this.flashEl,this.appEl),this.videoPlayer=new u(this.videoContainerEl,this.videoEl),this.endingScreen=new m(this.endingContainerEl,{initialTemplateId:this.currentTemplate.id,onReplay:e=>this.replayPrank(e)}),this.endingScreen.init(),this.sparksCanvasEl&&(this.festiveSparks=new h(this.sparksCanvasEl),this.festiveSparks.init()),d?this.skipIntroToEnding():((this.curtainContainerEl||this.torchOverlayEl)&&document.body.classList.add(`fairy-lights-waiting`),e.loadPhase1(),this.landingInteractions=new g,this.landingInteractions.init(),this.torchOverlayEl&&(this.torchTourController=new o(this.torchOverlayEl),this.torchTourController.init()),this.entranceFireworks=new c,this.entranceFireworks.init(),this.curtainContainerEl&&(this.curtainController=new i(this.curtainContainerEl,{recipientName:a}),this.curtainController.init({onOpening:()=>{e.loadPhase2(),this.landingInteractions&&this.landingInteractions.prepareFaaahAudio(),this.entranceFireworks&&this.entranceFireworks.startFireworks(()=>{this.startBombIntro(),e.loadPhase3(),this.landingInteractions&&this.landingInteractions.prepareLandingAudio(),this.torchTourController&&this.torchTourController.startTour(()=>{console.log(`Torch spotlight tour complete, landing fully revealed!`),document.body.classList.remove(`fairy-lights-waiting`),document.body.classList.add(`fairy-lights-revealed`),this.torchOverlayEl&&this.torchOverlayEl.classList.add(`torch-tour-complete`)})})},onOpened:()=>{console.log(`Curtain fully opened and removed.`)}})))}startBombIntro(){this.landingEl.style.display=`flex`,this.videoContainerEl.classList.remove(`visible`),this.endingContainerEl.classList.remove(`visible`),this.bombController=new r(this.bombContainerEl,{videoSrc:`./assets/videos/VID_20261025_195022.mp4`,igniteTime:3,explosionTime:37.4,initialFrame:.2}),this.bombController.init({onReady:()=>{},onIgnite:()=>{this.landingInteractions&&this.landingInteractions.stopAll(),e.loadPhase4(this.currentTemplate),this.videoPlayer&&this.videoPlayer.prepare(this.currentTemplate)},onProgress:e=>{if(e>.75){let e=document.querySelector(`.traditional-welcome-wrap`);e&&(e.style.opacity=`0.2`)}},onExplode:()=>{this.handleExplosion()}})}handleExplosion(){this.landingInteractions&&this.landingInteractions.stopAll(),e.loadPhase5(),this.endingScreen&&this.endingScreen.prepareEndingAssets(),this.landingEl.classList.add(`fade-out`),document.body.classList.add(`ending-mode`);let t=document.getElementById(`festive-frame`);t&&t.classList.add(`fade-frame`),this.videoPlayer.play({onEnded:()=>{this.handleVideoEnded()},onError:()=>{this.handleVideoEnded()}}),setTimeout(()=>{this.landingEl.style.display=`none`,this.landingEl.classList.remove(`fade-out`)},1e3)}skipIntroToEnding(){this.curtainContainerEl&&(this.curtainContainerEl.style.display=`none`,this.curtainContainerEl.classList.add(`curtain-fade-away`));let t=document.getElementById(`entrance-fireworks-stage`);t&&(t.style.display=`none`);let n=document.getElementById(`faah-meme-stage`);n&&(n.style.display=`none`),this.torchOverlayEl&&(this.torchOverlayEl.style.display=`none`,this.torchOverlayEl.classList.add(`torch-tour-complete`)),this.landingEl&&(this.landingEl.style.display=`none`),this.videoContainerEl&&this.videoContainerEl.classList.remove(`visible`),document.body.classList.remove(`fairy-lights-waiting`),document.body.classList.remove(`prank-video-active`),document.body.classList.add(`fairy-lights-revealed`),document.body.classList.add(`ending-mode`),typeof window<`u`&&window.__faahFairyLightsInstance&&(window.__faahFairyLightsInstance.handleResize(),window.__faahFairyLightsInstance.start()),e.loadPhase5(),this.endingScreen&&(this.endingScreen.prepareEndingAssets(),this.endingScreen.show()),window.scrollTo({top:0,behavior:`instant`})}handleVideoEnded(){try{localStorage.setItem(`faah_has_seen_prank`,`true`),localStorage.setItem(`faah_returning_visitor`,`true`)}catch{}this.videoContainerEl.classList.remove(`visible`),document.body.classList.remove(`prank-video-active`),document.body.classList.remove(`fairy-lights-waiting`),document.body.classList.add(`fairy-lights-revealed`),document.body.classList.add(`ending-mode`);let e=document.getElementById(`festive-frame`);e&&e.classList.remove(`fade-frame`),this.curtainContainerEl&&(this.curtainContainerEl.classList.add(`curtain-dissolve`),this.curtainContainerEl.classList.add(`curtain-fade-away`),this.curtainContainerEl.style.display=`none`),this.torchOverlayEl&&(this.torchOverlayEl.classList.add(`torch-tour-complete`),this.torchOverlayEl.style.display=`none`),typeof window<`u`&&window.__faahFairyLightsInstance&&(window.__faahFairyLightsInstance.handleResize(),window.__faahFairyLightsInstance.start()),this.endingScreen.show()}replayPrank(t){try{document.documentElement.classList.remove(`returning-visitor`)}catch{}this.bombController&&this.bombController.destroy(),this.currentTemplate=n(t),this.landingInteractions&&this.landingInteractions.stopAll(),e.loadPhase4(this.currentTemplate),this.endingScreen.hide(),document.body.classList.add(`ending-mode`);let r=document.getElementById(`festive-frame`);r&&r.classList.add(`fade-frame`),this.landingEl.style.display=`none`,this.landingEl.classList.remove(`fade-out`),this.videoPlayer.reset(),this.videoPlayer.prepare(this.currentTemplate),this.videoPlayer.play({onEnded:()=>{this.handleVideoEnded()},onError:()=>{this.handleVideoEnded()}})}};function v(){let e=new _;e.init(),typeof window<`u`&&(window.diwaliApp=e)}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,v):v();