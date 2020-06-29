// / <reference types="cypress" />
const webpack = require('@cypress/webpack-preprocessor')

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// allow using custom webpack config along with TS support
module.exports = (on: Function) => {
  const options = {
    webpackOptions: import('../webpack.config'),
    watchOptions: {}
  }

  on('file:preprocessor', webpack(options))
}

// allows us to start Cypress Browser in the full-screen mode
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on: Function, _config: object) => {
  on('before:browser:launch', (browser = {}, launchOptions: any) => {
    // @ts-ignore
    if (browser.name === 'electron') {
      launchOptions.preferences.fullscreen = true
    } else {
      launchOptions.args.push('--start-fullscreen')
    }

    return launchOptions
  })
}
