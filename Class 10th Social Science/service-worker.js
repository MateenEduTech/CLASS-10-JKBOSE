// =====================================================
// Service Worker — JKBOSE Class 10 SST App
// Author: Mateen Yousuf
// Enables offline functionality
// =====================================================

const CACHE_NAME = 'sst-class10-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&family=Playfair+Display:wght@700;900&display=swap'
];

// ===== INSTALL =====
self.addEventListener('install', event => {
  console.log('[SW] Installing service worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching app shell');
      return cache.addAll(ASSETS_TO_CACHE.filter(url => !url.startsWith('https://fonts')));
    }).then(() => {
      console.log('[SW] Install complete');
      return self.skipWaiting();
    }).catch(err => {
      console.log('[SW] Cache error:', err);
    })
  );
});

// ===== ACTIVATE =====
self.addEventListener('activate', event => {
  console.log('[SW] Activating service worker...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => {
      console.log('[SW] Activation complete');
      return self.clients.claim();
    })
  );
});

// ===== FETCH =====
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // For Google Fonts, use network first with cache fallback
  if (event.request.url.includes('fonts.googleapis.com') || event.request.url.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return fetch(event.request).then(response => {
          if (response.ok) cache.put(event.request, response.clone());
          return response;
        }).catch(() => caches.match(event.request));
      })
    );
    return;
  }

  // For all other requests: Cache First, then Network
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Return cached version
        return cachedResponse;
      }
      // Fetch from network and cache for future
      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
          return networkResponse;
        }
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return networkResponse;
      }).catch(() => {
        // Offline fallback — return main page
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});

// ===== BACKGROUND SYNC (optional) =====
self.addEventListener('sync', event => {
  if (event.tag === 'sync-scores') {
    console.log('[SW] Background sync triggered');
  }
});

// ===== PUSH NOTIFICATIONS (optional placeholder) =====
self.addEventListener('push', event => {
  const title = 'SST Class 10';
  const options = {
    body: event.data ? event.data.text() : 'New content available!',
    icon: 'icon-192.png',
    badge: 'icon-192.png'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

console.log('[SW] Service Worker loaded — JKBOSE Class 10 SST App');
