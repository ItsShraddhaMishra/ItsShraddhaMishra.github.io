/*
 * Service worker: offline support and fast repeat visits.
 *
 * Kept in public/ so it is served at the stable URL /sw.js (a service worker
 * can only control pages at or below its own path).
 *
 *   Pages (/, /cv.html)        network first, saved copy when offline
 *                              -> visitors always see the newest CV when online
 *   /assets/* (hashed files)   cache first
 *                              -> names change on every build, so never stale
 *   other same-site files      saved copy at once, refreshed in the background
 *   other websites             not handled (analytics, Drive, Scholar, ...)
 *
 * Change CACHE_VERSION only if the caching rules themselves change; every
 * old cache is then deleted when the new worker activates.
 */
const CACHE_VERSION = 'v1';
const PAGES = `digital-cv-pages-${CACHE_VERSION}`;
const FILES = `digital-cv-files-${CACHE_VERSION}`;
const MAX_FILES = 80; // old build assets beyond this are removed, oldest first

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(PAGES)
      .then((cache) => cache.add('/'))
      .catch(() => {}) // offline install: nothing to pre-save
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith('digital-cv-') && key !== PAGES && key !== FILES)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

/*
 * The first visit loads before this worker exists. The page sends the list
 * of same-site files it has already loaded, so they are saved too and the
 * next visit works offline.
 */
self.addEventListener('message', (event) => {
  if (event.data?.type !== 'cache-loaded' || !Array.isArray(event.data.urls)) {
    return;
  }

  const urls = event.data.urls.filter((url) => sameSite(url));

  event.waitUntil(
    caches.open(FILES).then((cache) =>
      Promise.all(urls.map((url) => cache.add(url).catch(() => {}))).then(() => trim(cache)),
    ),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET' || !sameSite(request.url)) {
    return;
  }

  const url = new URL(request.url);

  if (request.mode === 'navigate' || url.pathname.endsWith('.html')) {
    event.respondWith(networkFirst(request));
  } else if (url.pathname.startsWith('/assets/')) {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(staleWhileRevalidate(request, event));
  }
});

function sameSite(url) {
  return new URL(url, self.location.href).origin === self.location.origin;
}

async function networkFirst(request) {
  const cache = await caches.open(PAGES);

  try {
    const response = await fetch(request);

    if (response.ok) {
      cache.put(request, response.clone());
    }

    return response;
  } catch {
    return (
      (await cache.match(request, { ignoreSearch: true })) ||
      (await cache.match('/')) ||
      new Response('Offline, and this page has not been saved yet.', {
        status: 503,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      })
    );
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(FILES);
  const saved = await cache.match(request);

  if (saved) {
    return saved;
  }

  const response = await fetch(request);

  if (response.ok) {
    await cache.put(request, response.clone());
    trim(cache);
  }

  return response;
}

async function staleWhileRevalidate(request, event) {
  const cache = await caches.open(FILES);
  const saved = await cache.match(request);

  const refresh = fetch(request)
    .then((response) => {
      if (response.ok) {
        cache.put(request, response.clone());
      }

      return response;
    })
    .catch(() => saved);

  if (saved) {
    event.waitUntil(refresh);
    return saved;
  }

  return refresh;
}

/* Keep the file cache bounded: remove the oldest entries first. */
async function trim(cache) {
  const keys = await cache.keys();

  for (let index = 0; index < keys.length - MAX_FILES; index += 1) {
    await cache.delete(keys[index]);
  }
}
