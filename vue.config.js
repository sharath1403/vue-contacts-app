const { defineConfig } = require('@vue/cli-service')
module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  productionSourceMap: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-contacts-app/'
    : '/'
}
