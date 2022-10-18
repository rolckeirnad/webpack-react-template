# Webpack with React template

This template was created with the following devDependencies
- webpack
- webpack-cli
- webpack-dev-server
- webpack-merge
- css-loader
- style-loader
- html-webpack-plugin
- mini-css-extract-plugin
- @babel/core
- @babel/preset-env
- @babel/preset-react
- babel-loader
- eslint
- sass
- sass-loader

Additional dependencies
- react
- react-dom

```
npm install -D webpack webpack-cli webpack-dev-server webpack-merge css-loader style-loader html-webpack-plugin mini-css-extract-plugin @babel/core @babel/preset-env @babel/preset-react babel-loader eslint
```

```
npm install react react-dom
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

## Testing dependencies
The following dependencies were not installed but they can be installed for testing:
- `@testing-library/react`
- `@testing-library/jest-dom`
- `@testing-library/user-event`

```
npm install -D @testing-library/react @testing-library/user-event @testing-library/jest-dom
```

# Setting eslint
To initialize eslint you can use one of the following commands:
```
npx eslint --init
// or
npm init @eslint/config
```
It'll ask to install some additional packages:
- `@eslint/create-config`

This is the selected setup for this template:

```
 How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JSON
```

Finally manager will ask to install more additional packages.
## Enabling plugins
To enable `react-hooks` and or `a11y` configuration you need to add it in your `.eslintrc.json` file:

```json
{
  "extends": [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "airbnb"
  ],
  "plugins": [
    "react",
    "jsx-a11y"
  ],
}
```
# Webpack configuration
You may encounter a `Module not found` error when you use an `import` statement in your index file when trying to import an `.jsx` file:
```js
import App from './App'
```
You need to update your entry files and add the `.jsx` extension in order to use import without writing the extension file:
```js
module.exports = {
  ...
  entry: './src/index.jsx',
  ...
  resolve: {
    extensions: ['...', '.jsx'],
  },
};
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
