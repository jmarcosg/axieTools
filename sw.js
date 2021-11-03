console.log('sw is installed')

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('shell').then(function(cache) {
        return cache.addAll(
          [
            '/axie-calculator/static/all.css',
            '/axie-calculator/static/animate.min.css',
            '/axie-calculator/static/calculator.css',
            '/axie-calculator/static/energyCalculator.js',
            '/axie-calculator/static/menu.js',
            '/axie-calculator/static/styles.css',
            '/axie-calculator/static/table.css',
            '/axie-calculator/static/table.js',
            '/axie-calculator/index.html'
          ]
        )
      })
    )
})

self.addEventListener('fetch', function(event) {
  caches.open('shell').then(function(cache) {
    return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone())
          return response
        })
      })
  })
})
