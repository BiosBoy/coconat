const express = require('express')
const path = require('path')
// const proxy = require('../server/proxy')

module.exports = (router) => {
  // custom storybook server middleware for static folder serving
  router.use('/public', express.static(path.join(__dirname, '.', 'public')))
  // custom storybook proxy for handling static files from real DEV server
  // router.use('/', proxy)
}
