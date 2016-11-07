import Config, { environment } from 'webpack-config'
import path from 'path'

environment.setAll({
  env: process.env.NODE_ENV,
})

export default new Config().extend(
  path.resolve(__dirname, './config/webpack.[env].config.js')
)
