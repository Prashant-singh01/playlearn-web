// public/sw.js
// PlayLearn service worker - keep it simple and DON'T cache manifest.json

const CACHE_NAME = "playlearn-v2"; // bump this to force cache invalidation on deploy
const ASSETS = [
    "/",
    "/index.html",
    // do NOT include "/manifest.json" here
    "/icons/icon-192.png",
    "/icons/icon-512.png",
    // add any other static files you want cached by default
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    // clean up old caches
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys
                    .filter((k) => k !== CACHE_NAME)
                    .map((k) => caches.delete(k))
            )
        ).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (event) => {
    const req = event.request;
    const url = new URL(req.url);

    // 1) ALWAYS bypass cache for manifest.json so the browser gets the latest manifest
    if (url.pathname === "/manifest.json") {
        // network-first: fetch from network and fall back to cache (if any)
        event.respondWith(
            fetch(req).catch(() => caches.match(req))
        );
        return;
    }

    // 2) For navigation requests (HTML pages) prefer network, fall back to cache (so updates are visible)
    if (req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html")) {
        event.respondWith(
            fetch(req)
                .then((resp) => {
                    // optionally cache HTML responses (commented out to avoid stale app shell)
                    // caches.open(CACHE_NAME).then(c => c.put(req, resp.clone()));
                    return resp;
                })
                .catch(() => caches.match("/index.html"))
        );
        return;
    }

    // 3) For other requests: cache-first, fetch from network and update cache on success
    event.respondWith(
        caches.match(req).then((cached) => {
            if (cached) return cached;
            return fetch(req)
                .then((resp) => {
                    // only cache successful GET responses
                    if (resp && resp.ok && req.method === "GET") {
                        const contentType = resp.headers.get("content-type") || "";
                        // Avoid caching opaque responses if you don't want them (e.g., third-party fonts)
                        return caches.open(CACHE_NAME).then((cache) => {
                            // Don't accidentally cache large media if you don't want to
                            cache.put(req, resp.clone());
                            return resp;
                        });
                    }
                    return resp;
                })
                .catch(() => {
                    // fallback for images or other requests if desired:
                    if (req.destination === "image") {
                        // return a placeholder image if you have one cached, else fail
                        return caches.match("/icons/icon-192.png");
                    }
                });
        })
    );
});
