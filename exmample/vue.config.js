const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const qLessPlugin = require('@quincyx/less-toolkit')

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    open: false
  },
  css: {
    loaderOptions: {
      less: {
        plugins: [
          new qLessPlugin({
            extend: [
              resolve('./src/style/theme.less'),
              resolve('./src/style/mixin.less')
            ]
          })
        ],
        javascriptEnabled: true
      }
    }
  }
}
