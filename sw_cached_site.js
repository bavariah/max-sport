const cacheName = 'v1';


// call install event

self.addEventListener('install', (e) => {
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
    e.respondWith(fetch(e.request).then(res => {
        // make clone of response
        const resClone = res.clone();
        // open cache 
        caches.open(cacheName).then(cache => {
            // add response to cache
            cache.put(e.request, resClone);
        });
        return res;
    }).catch(err => caches.match(e.request).then(res => res))
    );
});