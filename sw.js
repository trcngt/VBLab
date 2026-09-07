const CACHE_NAME = 'vblab-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Để mạng trực tiếp xử lý các request Firebase & Gemini API
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});