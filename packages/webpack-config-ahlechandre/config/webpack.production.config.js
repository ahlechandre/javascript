import Config from 'webpack-config'
import webpack from 'webpack'
import path from 'path'

const pathBase = path.resolve(__dirname, './webpack.base.config.js')

export default new Config().extend(pathBase).merge({
  devtool: null,
  output: {
    filename: '[_outputFilenameProd].js',
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false,
    }),
  ],
})
