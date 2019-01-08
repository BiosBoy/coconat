

# Webpack4 - React16 Templater App
### Make custom React app development easly as never before!

![logo_image](https://raw.githubusercontent.com/BiosBoy/coconat/master/LOGO_COCONAT.jpg)

This **Webpack4 + React16 Templater** is created from the point of view to solve developer day-to-day problems with app suits boilerplate creation. It has all what we need to start React app creation with rocket speed without worring about, like:
 1. Oh, I need to optimize my app!
 2. Oh, I need to create a server for app handling!
 3. Oh, I need a Redux/Redux-Saga installations for state managment in app!
 4. Oh, I need to install Webpack and spend a time to configure it!
 5. Oh, I need to optimize and minimize JS/CSS/etc. bundles!
 6. Oh, I need to install and configure testing environment!
 7. And a lot of other boring things...

So, by using this **Templater** you will save a lot of time and will stay focused only on your own app creation. Have fun :)

## Features:
 * Fast React app creation.
 * Can be custumized as you wish.
 * BrowserSync Server is configured just out of the box!
 * All needed packages to work you can bootstap just by one command with `lerna` npm package: `lerna bootstrap`
 * Support TypeScript version 3^.

## Installation

1. Clone the repo on your Machine by:

   ```
    ssh clone https://github.com/BiosBoy/coconat.git
   ```
2. Inside the root folder install all requeried packages of the **CoConat Builder** by command:
   ```
    yarn lerna bootstrap
   ```
3. Start up your project via **development**, **production** or **test** compilation:
   ```
    yarn start:dev - development mode
    yarn start:prod - production mode
    yarn start:test - testing mode
   ```
4. Test and validate yout project code with **Jest & Enzyme** test environment by command:
   ```
    yarn jest ./*/**.test.*
   ```
That's all what you need to start building your own project! Have fun and happy coding! :)

# What is you have out of the box?
 ## Webpack:
 * Fully support all Webpack 4^ possibilities.
 * Support code-splitting and bundles app creation out of the box.
 * Created 3 independent development cases: `test`, `development`, `production`. Each of them has own best optimized configuration.
 * Integrated Babel 7^ with supporting all ES6-ES8 features.
 * Integrated Ujlifty Webpack Plugin ^0 for optimizing JS/JSX/TS/TSX bundles for development and production.
 * Integrated Mini CSS Webpack Plugin ^0 + OptimizeCSS Assets Webpack Plugin ^5 for optimizing CSS bundles for development and production.
 * Integrated Webpack Bundle Analyzer ^3 for visual analyzing of code/bundles weight.
 * Transpile all app code into native ES5 for supporting even an oldest browsers.

 ## React:
 * Support all new features from React 16.7@-alpha release.
 * Hooks, Suspence and Lazy load can be used out of the box.

 ## Redux:
 * Redux^4.0.1 is fully integrated with React to start your work asap.
 * Including Redux-Saga^0.16.2 for async actions handling.

## Routing:
 * React-Router^4.3.1 - React app from the start can be multy-page oriented.
 * Connected-React-Router^5.0.1 holdes synhromious app Redux and Browser Location states.

 ## Styling:
 * Support CSS/SASS style markup.
 * Integrated CSSModules for independent component styling.
 * Including PostCSS ^2 post-processor.

 ## Testing:
 * Integrated Jest 23^ + Enzyme 3^ testing environment.
 * Includes pre-commits hooks for testing app before commit (if test are present in).
 * Support JS/JSX/TS/TSX file extensions.

 ## Linting:
 * Integrated `prettier` package for beatify pre-commited code.
 * Integrated eslint 5^ + tslint 5^ + stylelint 9^ linters based on the most popular schemas in the world (facebook, microsoft, airbnb, etc.) with React life-cycle ecosystem supporting.

 ## Git:
 * Includes pre-commits hooks with husky ^1
 * Includes lint-stages ^1 for styling and testing whole app code (js/jsx/ts/tsx/css/scss/json) before commiting.
 * Checks code on lint rule errors before accept user commit.
 * Run test suits before accept user commit.


# Technical information:
### App technical environment that are 100% support with:
 * Node 10.5
 * Yarn 1.9.4
 * Webpack 4.23.1
 * React 16.7

### App global package installing requirements:
 * node
 * yarn/npm
 * eslint/tsline/stylelint
 * lerna
 * typescript



# FAQ:
 ### 1. "Command `lerna bootstrap` is does not works."
 * To bring it work you need install it globally first by command `yarn add lerna -g`. After that navigate to your working folder and repeat command `lerna bootstrap` one more time.
