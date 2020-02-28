self.addEventListener('install', e => {
    e.waitUntil(caches.open('v1').then(cache => cache.addAll([
        'icon.png',
        'icons.css',
        'icons.woff2',
        'index.html',
        'manifest.webmanifest'
    ])));
});

self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});