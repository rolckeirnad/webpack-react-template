# Webpack template

This template was created with the following dependencies
- webpack
- webpack-cli
- webpack-dev-server
- webpack-merge
- css-loader
- style-loader
- html-webpack-plugin
- mini-css-extract-plugin

```
npm install --save-dev webpack webpack-cli webpack-dev-server webpack-merge css-loader style-loader html-webpack-plugin mini-css-extract-plugin
```

The webpack configuration files were separated into common, dev and production files to allow separate configurations for development and production.

In `package.json` were added the following scripts:
```javascript
"scripts": {
    /* ... Some default scripts ... */
    "start": "webpack serve --open --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
  },
```
# Usage

Install dependencies:
```
npm install
```

To run a live server use the following command:
```
npm start
```
> *If you make changes in webpack configuration files you'll need to restart live server

To build production files:
```
npm run build
```
