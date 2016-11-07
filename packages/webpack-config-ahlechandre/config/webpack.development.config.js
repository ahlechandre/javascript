import Config from 'webpack-config'
import path from 'path'

const pathBase = path.resolve(__dirname, './webpack.base.config.js')

export default new Config().extend(pathBase).merge({
  devtool: 'inline-sourcemap',
  output: {
    filename: '[_outputFilenameDev].js',
  },
})
