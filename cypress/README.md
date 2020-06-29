
# Cypress - real-world App E2E testing

A fully automated testing for pre-production app checking based on [Cypress.io](http://cypress.io/) environment.

### Why do we need this?

Our E2E environment will allow us to completely run any component, any script’s behavior on the REAL page with REAL-like clicks/events on [www.google.com](http://google.com/). Whether - it’s a shifted element, wrong set color of the text, the button not pressed or the wrong redirect - we will find out with 100% probability until the release for sure!

We literally avoid boring apps' unit tests in favor of fully controlled, automated testing right on the dev.

### How to use it

The system environment is finally designed, running on the basis of `react-apps` repo. Architecturally, built on an MVC design pattern. Capable of easy expansion and independent testing for any app on the web!

### Current architecture:
```
./cypress
	|
	|
	| --- /apps - all the tests should be described here
	| --- /constants - root cypress variables
	| --- /e2e - endpoint for tests running, included from ./apps
	| --- /examples - playaround tests for training with Cypress
	| --- /helpers - useful functions required through each test
	| --- /interfaces - core typization
	| --- /plugins - cypress system folder for its customization
	| --- /services - app-oriented, Cypress core functions.
	| --- /support - cypress system folder for describing custom methods
	| --- /template - starter kit for faster rolling up
	| --- /utils - reused code shared btw several sources
	| --- /videos - tests' records saved after running
	| --- /screenshots - system snapshots fired by developer on run
	| --- CHANGELOG.md - all the internal changed should be described here
	| --- index.d.ts - entrypoint for TS declarations
	| --- README.md - you're here
	| --- tsconfig.json - extend base config, but with own typization.
	| --- webpack.config.json - used for serving TS along with JS files.
```

Good, now we got a practical understanding about E2E Cypress architecture. So the next and most interest question is about how to build the particular app testing architecture? Well, it's quite easy. You can check any actual app inside `./cypress/apps/{app}/` .

The other way is to grab the starter kit template from  `./cypress/template/` and rolled it up among `./cypress/apps` folder.

### Particular app

```
./cypress/apps/{your_awesome_app}/
	|
	|
	| --- api - every app's endpoint for REST/WS should be described here.
	| --- constants - some variables shared btw the app.
	| --- controller - this is the core! Place all the business/async logic here.
	| --- mocks - request-data/UI-labels/etc should be described here.
	| --- modules - list all business behaviors, combined into reusable chunks.
	| --- scenarios - this is the place where all your tests should starts.
	| --- triggers - interactive page's elements which exposes request/action
	| --- utils - reused code shared btw the app tests
	| --- view
		     |
		     | --- behavior - checking UI on predictability here.
		     | --- selectors - gathering elements together for shared reusing.

```

So as you see particular app architecture is very easy for understanding and expanding. You can store your code as independent files or main `index.ts` based on its complexity inside folders.

Once you obviously distinguish some independent entities inside, then you should think about their separation indeed.

### Just FYI, some advices

 - Keep your `scenarios` clean from heavy, async or repetitive code. Use `controller` and `modules` for describing main app behavior and include them just as a reusable then.
 - Store all the UI-oriented logic, like buttons, containers, any UI checks) inside `view` folder.
 - Don't forgot to initiate `initiateE2ETest` with two arguments: API and URL. On each test.

P.S.
Feel free to ask for any other questions 3p-sviat in Slack.

May the force be with you!
