self.addEventListener('install', function(e) {
  console.log('Service Worker: Installed');
  e.waitUntil(
    caches.open('static').then(function(cache) {
      return cache.addAll([
        '/',
        '/static/icons/icon-192x192.png',
        '/static/icons/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log('Service Worker: Fetching');
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});