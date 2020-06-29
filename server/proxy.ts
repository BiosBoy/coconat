// const { createProxyMiddleware } = require('http-proxy-middleware')

// const proxyFiles = [
//   '/js/**',
//   '/css/**',
//   '/images/**',
//   '/fonts/**',
//   '**/favicon.ico',
//   '**/manifest.json',
//   '**.php' // able to load real pages
// ]

// const commonProxyMiddleware = createProxyMiddleware(
//   proxyFiles,
//   {
//     target: 'YOUR_WEB_APP_URL',
//     changeOrigin: true,
//     // auth: '',
//     ws: true,
//     secure: true,
//     cookieDomainRewrite: 'localhost',
//     headers: {
//       origin: 'YOUR_WEB_APP_URL',
//       Connection: 'keep-alive',
//       'Access-Control-Allow-Origin': '*'
//     },
//     onProxyRes: _proxyRes => {
//       // modify your responses in way you like
//     }
//   }
// )

// unwrap commonProxyMiddleware once you need to activate it
module.exports = [/* commonProxyMiddleware */]
