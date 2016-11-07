# webpack-config-ahlechandre

A shareable webpack config.

## Install

```bash
npm install --save webpack webpack-config webpack-config-ahlechandre
```

## Usage

Add a `.babelrc` file like:

```json
{
  "presets": [
    "es2015",
    "stage-0"
  ],
  "plugins": [
    "add-module-exports",
    "transform-decorators-legacy"
  ]
}
```

Create the `webpack.config.babel.js`, define the environment variables and extends `webpack-config-ahlechandre`:

```js
import Config, { environment } from 'webpack-config'

environment.setAll({
  _root: __dirname,
  _entry: 'src/app',
  _outputPath: 'assets/',
  _outputPublicPath: 'assets/',
  _outputFilenameDev: 'app',
  _outputFilenameProd: 'app.min',
})

export default new Config().extend(
  'ahlechandre'
)
```