import Config from 'webpack-config'

export default new Config().merge({
  entry: '[_entry].js',
  resolve: {
    root: [
      '[_root]',
    ],
    modulesDirectories: [
      'node_modules',
    ],
  },
  output: {
    path: '[_outputPath]',
    publicPath: '[_outputPublicPath]',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
})
