const cacheName = 'v1';

const cacheAssets = [
    'index.html',
    'style/main.css',
    'js/app.js',
    'js/main.js',
    'comp/kontakt.html',
    'comp/uslovi-dostava.html',
    'comp/sprave-za-vezbanje.html',
    'style/kontakt.css',
    'style/gallery.css',
    'style/single-product.css',
    'style/uslovi.css'
];


// call install event

self.addEventListener('install', (e) => {

    e.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            cache.addAll(cacheAssets);
        })
        .then(() => self.skipWaiting())
    );
});

// call activate event

self.addEventListener('activate', (e) => {
    // remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        return caches.delete(cache);
                    }
                })
            )
        })
    );
});

// call fetch event

self.addEventListener('fetch', e => {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});