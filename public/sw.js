/**
 * WorshipWise Service Worker
 * Provides offline support, caching, and background sync
 */

const CACHE_VERSION = 'v1';
const STATIC_CACHE = `worshipwise-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `worshipwise-dynamic-${CACHE_VERSION}`;
const API_CACHE = `worshipwise-api-${CACHE_VERSION}`;

// Static assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/offline.html',
];

// API routes to cache with network-first strategy
const API_CACHE_ROUTES = [
  '/api/courses',
  '/api/members',
  '/api/messages',
  '/api/user',
];

// Routes that should always be network-first
const NETWORK_FIRST_ROUTES = [
  '/api/',
  '/_next/',
];

// Routes that can be served from cache
const CACHE_FIRST_ROUTES = [
  '/images/',
  '/icons/',
  '/fonts/',
  '.png',
  '.jpg',
  '.jpeg',
  '.svg',
  '.gif',
  '.ico',
  '.woff',
  '.woff2',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');

  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[ServiceWorker] Caching static assets');
        return cache.addAll(STATIC_ASSETS.filter(url => !url.includes('offline.html')));
      })
      .then(() => self.skipWaiting())
      .catch((error) => {
        console.log('[ServiceWorker] Static cache failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => {
              return name.startsWith('worshipwise-') &&
                name !== STATIC_CACHE &&
                name !== DYNAMIC_CACHE &&
                name !== API_CACHE;
            })
            .map((name) => {
              console.log('[ServiceWorker] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - handle requests
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip navigation requests — let the browser handle page loads natively.
  // This avoids "a redirected response was used for a request whose redirect
  // mode is not follow" errors when Next.js issues server-side redirects.
  if (request.mode === 'navigate') {
    return;
  }

  // Skip chrome-extension and other non-http(s) requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Skip Firestore WebSocket connections and streaming requests
  if (shouldSkipCaching(url, request)) {
    return;
  }

  // Determine caching strategy based on route
  if (isNetworkFirst(url)) {
    event.respondWith(networkFirst(request));
  } else if (isCacheFirst(url)) {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(staleWhileRevalidate(request));
  }
});

// Check if request should skip caching entirely
function shouldSkipCaching(url, request) {
  // Skip audio proxy — large binary blobs that must not be cached/cloned
  if (url.pathname.startsWith('/api/audio-proxy')) {
    return true;
  }

  // Skip Firestore WebSocket and streaming connections
  if (url.hostname.includes('firestore.googleapis.com')) {
    return true;
  }

  // Skip Firebase Auth connections
  if (url.hostname.includes('identitytoolkit.googleapis.com')) {
    return true;
  }

  // Skip Firebase Storage connections
  if (url.hostname.includes('firebasestorage.googleapis.com')) {
    return true;
  }

  // Skip WebSocket connections
  if (request.headers.get('upgrade') === 'websocket') {
    return true;
  }

  // Skip streaming requests
  if (url.pathname.includes('/channel') || url.pathname.includes('/stream')) {
    return true;
  }

  // Skip requests with specific query params that indicate streaming
  if (url.searchParams.has('gsessionid') || url.searchParams.has('VER')) {
    return true;
  }

  return false;
}

// Network-first strategy - try network, fall back to cache
async function networkFirst(request) {
  const cacheName = request.url.includes('/api/') ? API_CACHE : DYNAMIC_CACHE;

  try {
    const networkResponse = await fetch(request);

    // Only cache successful responses with valid status codes
    if (networkResponse && networkResponse.ok && networkResponse.status === 200) {
      // Don't cache opaque responses or responses without proper headers
      if (networkResponse.type === 'basic' || networkResponse.type === 'cors') {
        const cache = await caches.open(cacheName);
        // Clone before caching to avoid consuming the response
        try {
          await cache.put(request, networkResponse.clone());
        } catch (cacheError) {
          // Silently fail cache writes - network response is still valid
          console.log('[ServiceWorker] Cache write failed (non-critical):', cacheError.message);
        }
      }
    }

    return networkResponse;
  } catch (error) {
    console.log('[ServiceWorker] Network failed, trying cache:', request.url);
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return caches.match('/offline.html') || new Response('Offline', { status: 503 });
    }

    return new Response('Network error', { status: 503 });
  }
}

// Cache-first strategy - try cache, fall back to network
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);

    if (networkResponse && networkResponse.ok && networkResponse.status === 200) {
      // Only cache valid responses
      if (networkResponse.type === 'basic' || networkResponse.type === 'cors') {
        const cache = await caches.open(STATIC_CACHE);
        try {
          await cache.put(request, networkResponse.clone());
        } catch (cacheError) {
          console.log('[ServiceWorker] Cache write failed (non-critical):', cacheError.message);
        }
      }
    }

    return networkResponse;
  } catch (error) {
    console.log('[ServiceWorker] Cache miss and network failed:', request.url);
    return new Response('Not found', { status: 404 });
  }
}

// Stale-while-revalidate - return cache immediately, update in background
async function staleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request);

  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse && networkResponse.ok && networkResponse.status === 200) {
        // Only cache valid responses
        if (networkResponse.type === 'basic' || networkResponse.type === 'cors') {
          // Clone the response before using it
          const responseToCache = networkResponse.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseToCache).catch((cacheError) => {
              // Silently fail cache writes
              console.log('[ServiceWorker] Background cache write failed:', cacheError.message);
            });
          });
        }
      }
      return networkResponse;
    })
    .catch((error) => {
      console.log('[ServiceWorker] Fetch failed:', error.message);
      return new Response('Network error', { status: 503 });
    });

  // Ensure we always return a valid Response
  if (cachedResponse) {
    return cachedResponse;
  }

  const networkResult = await fetchPromise;
  return networkResult || new Response('Offline', { status: 503 });
}

// Check if URL should use network-first strategy
function isNetworkFirst(url) {
  return NETWORK_FIRST_ROUTES.some(route => url.pathname.includes(route));
}

// Check if URL should use cache-first strategy
function isCacheFirst(url) {
  const pathname = url.pathname;
  return CACHE_FIRST_ROUTES.some(route => pathname.includes(route));
}

// Background sync for offline mutations
self.addEventListener('sync', (event) => {
  console.log('[ServiceWorker] Background sync:', event.tag);

  if (event.tag === 'sync-messages') {
    event.waitUntil(syncMessages());
  } else if (event.tag === 'sync-progress') {
    event.waitUntil(syncProgress());
  }
});

// Sync queued messages
async function syncMessages() {
  // This will be implemented to sync messages from IndexedDB
  console.log('[ServiceWorker] Syncing messages...');
}

// Sync course progress
async function syncProgress() {
  // This will be implemented to sync progress from IndexedDB
  console.log('[ServiceWorker] Syncing progress...');
}

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('[ServiceWorker] Push received');

  let data = {
    title: 'WorshipWise',
    body: 'You have a new notification',
    icon: '/icons/icon.svg',
  };

  if (event.data) {
    try {
      data = { ...data, ...event.data.json() };
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: data.icon,
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/',
      timestamp: Date.now(),
    },
    actions: data.actions || [],
    requireInteraction: data.requireInteraction || false,
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('[ServiceWorker] Notification click');

  event.notification.close();

  const urlToOpen = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((windowClients) => {
        // Check if already have a window open
        for (const client of windowClients) {
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            client.navigate(urlToOpen);
            return client.focus();
          }
        }

        // Open new window if needed
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});

// Message handler for communication with main app
self.addEventListener('message', (event) => {
  console.log('[ServiceWorker] Message received:', event.data);

  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  } else if (event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(DYNAMIC_CACHE).then((cache) => {
        return cache.addAll(event.data.urls);
      })
    );
  } else if (event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((names) => {
        return Promise.all(
          names.map((name) => caches.delete(name))
        );
      })
    );
  }
});

console.log('[ServiceWorker] Loaded');
