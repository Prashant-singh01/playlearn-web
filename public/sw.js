const CACHE_NAME = "playlearn-v1";
const ASSETS = [
    "/",
    "/index.html",
    "/manifest.json",
    // Add more if you have static assets; Vite's built assets will be cached on first visit
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
    // Try cache first, then network
    event.respondWith(
        caches.match(event.request).then((cached) => {
            if (cached) return cached;
            return fetch(event.request).then((resp) => {
                // Optionally cache new requests (lightweight)
                return resp;
            }).catch(() => {
                // offline fallback if desired
                if (event.request.mode === "navigate") {
                    return caches.match("/index.html");
                }
            });
        })
    );
});
