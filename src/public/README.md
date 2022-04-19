Sankey - D3/REACT App 
===========================

A D3/Faux-dom/React App to build and visualize Sankey diagrams:

- D3 runs all the calculation.
- A faux-dom coupled with D3 generates SVG elements in an isomorphic way.
- React handles state and renderings.

## DataFormat

You can import/export sankey diagrams using the following json format:

```
{ 
  nodes: [
    {"name":"node0"},
    {"name":"node1"}], 
  links: [
    {"source":0,"target":1,"value":100}
  ]
}
```

## Install:

Make sure you have webpack installed globally:

`$ npm i -g webpack`

Install npm dependencies:

`$ npm i`

Build your bundle:

`$ webpack` or
`$ npm run dev`

Serve your public/index.html via http to see and use the Sankey Diagram Builder App. 

## Webpack dev server

The [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) is a little node.js Express server, which uses the webpack-dev-middleware to serve a webpack bundle. It also has a little runtime which is connected to the server via Socket.IO

Just run the server from the project root

`$ webpack-dev-server` or
`npm run dev-server`

***

- [Read the relative blog post](http://nick.balestra.ch/2015/sankey-d3-faux-DOM-react) for more information
- [D3](https://github.com/mbostock/d3)
- [D3.Sankey](https://github.com/d3/d3-plugins/tree/master/sankey)
- [Faux-DOM](https://github.com/Olical/react-faux-dom)
- [React](https://github.com/facebook/react)
