// Service Worker

// Cache version
const CACHE_VERSION = 'v1';
const CACHE_NAME = `${CACHE_VERSION}_static_cache`;

// Files to cache
const filesToCache = [
  '/',
  'CSS/compressed stylesheet.css',
  'Assets/Aditya3.avif',
  'Assets/Aditya2.avif',
  // Add more files to cache here
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
