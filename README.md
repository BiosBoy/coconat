## Webpack4 - React16.7 Templater App
# Make custom React app development easly as never before!

# Features:
 * Fast React app creation.
 * Can be custumized as you whish.
 * All needed packages to work you can bootstap just by one command with `lerna` npm package: `lerna bootstrap`
 * Support TypeScript version 3^.

 # Webpack:
 * Fully support all Webpack 4^ possibilities.
 * Support code-splitting and bundles app creation out of the box.
 * Created 3 independent development cases: `test`, `development`, `production`. Each of them has own best optimized configuration.
 * Integrated Babel 7^ with supporting all ES6-ES8 features.
 * Integrated Ujlifty Webpack Plugin ^0 for optimizing JS/JSX/TS/TSX bundles for development and production.
 * Integrated Mini CSS Webpack Plugin ^0 + OptimizeCSS Assets Webpack Plugin ^5 for optimizing CSS bundles for development and production.
 * Integrated Webpack Bundle Analyzer ^3 for visual analyzing of code/bundles weight.
 * Transpile all app code into native ES5 for supporting even an oldest browsers.

 # React:
 * Support all new features from React 16.7@-alpha release.
 * Hooks, Suspence and Lazy load can be used out of the box.

 # Styling:
 * Support CSS/SASS style markup.
 * Integrated CSSModules for independent component styling.
 * Including PostCSS ^2 post-processor.

 # Testing:
 * Integrated Jest 23^ + Enzyme 3^ testing environment.
 * Includes pre-commits hooks for testing app before commit (if test are present in).
 * Support JS/JSX/TS/TSX file extensions.

 # Linting:
 * Integrated `prettier` package for beatify pre-commited code.
 * Integrated eslint 5^ + tslint 5^ + stylelint 9^ linters based on the most popular schemas in the world (facebook, microsoft, airbnb, etc.) with React life-cycle ecosystem supporting.

 # Git:
 * Includes pre-commits hooks with husky ^1
 * Includes lint-stages ^1 for styling and testing whole app code (js/jsx/ts/tsx/css/scss/json) before commiting.
 * Checks code on lint rule errors before accept user commit.
 * Run test suits before accept user commit.


## Technical information:
# App technical environment that are 100% support with:
 * Node 10.5
 * Yarn 1.9.4
 * Webpack 4.23.1
 * React 16.7

# App global package installing requirements:
 * node
 * yarn/npm
 * eslint/tsline/stylelint
 * lerna
 * typescript


## FAQ:
 # "Command `lerna bootstrap` is does not works."
 * To bring it work you need install it globally first by command `yarn add lerna -g`. After that navigate to your working folder and repeat command `lerna bootstrap` one more time.
