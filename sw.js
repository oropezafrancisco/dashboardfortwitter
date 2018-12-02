self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
    '/offline.html'
     return cache.addAll([
     ]);
   })
 );
});
self.addEventListener('fetch', function(event) {

console.log(event.request.url);

});
