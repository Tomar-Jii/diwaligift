import os
import sys
import mimetypes
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

PORT = 5000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

mimetypes.add_type('video/mp4', '.mp4')
mimetypes.add_type('audio/mpeg', '.mp3')
mimetypes.add_type('audio/wav', '.wav')
mimetypes.add_type('image/webp', '.webp')
mimetypes.add_type('image/svg+xml', '.svg')
mimetypes.add_type('text/javascript', '.js')
mimetypes.add_type('text/css', '.css')

class RangeRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Accept-Ranges', 'bytes')
        super().end_headers()

    def do_GET(self):
        # Support HTTP Range requests for smooth video and audio streaming
        range_header = self.headers.get('Range', None)
        if not range_header:
            return super().do_GET()

        path = self.translate_path(self.path)
        if not os.path.isfile(path):
            return super().do_GET()

        file_size = os.path.getsize(path)
        range_val = range_header.strip().lower()
        if not range_val.startswith('bytes='):
            return super().do_GET()

        ranges = range_val[6:].split('-')
        start = int(ranges[0]) if ranges[0] else 0
        end = int(ranges[1]) if ranges[1] else file_size - 1
        if start >= file_size or end >= file_size or start > end:
            self.send_error(416, "Requested Range Not Satisfiable")
            return

        content_length = end - start + 1
        content_type = self.guess_type(path)

        self.send_response(206)
        self.send_header('Content-Type', content_type)
        self.send_header('Content-Range', f'bytes {start}-{end}/{file_size}')
        self.send_header('Content-Length', str(content_length))
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Access-Control-Allow-Origin', '*')
        SimpleHTTPRequestHandler.end_headers(self)

        with open(path, 'rb') as f:
            f.seek(start)
            bytes_to_send = content_length
            buf_size = 64 * 1024
            while bytes_to_send > 0:
                chunk = f.read(min(buf_size, bytes_to_send))
                if not chunk:
                    break
                try:
                    self.wfile.write(chunk)
                except (BrokenPipeError, ConnectionResetError):
                    break
                bytes_to_send -= len(chunk)

def main():
    os.chdir(DIRECTORY)
    server_address = ('', PORT)
    httpd = ThreadingHTTPServer(server_address, RangeRequestHandler)
    print("=" * 60)
    print(f"🔥 Diwali Prank Website (Diwali Surprise) is running!")
    print(f"👉 Open in your browser: http://localhost:{PORT}")
    print(f"👉 Custom Prank Link:    http://localhost:{PORT}/?name=Bhai")
    print("=" * 60)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")

if __name__ == '__main__':
    main()
