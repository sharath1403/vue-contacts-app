const { defineConfig } = require('@vue/cli-service')
module.exports = {
  configureWebpack: {
    devtool: 'source-map', // or 'cheap-module-source-map'
  },
  productionSourceMap: true, // only for production build if needed
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-contacts-app/'
    : '/'

}

