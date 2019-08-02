// vue.config.js
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
        assets: resolve('src/assets'),
        components: resolve('src/components')
      }
    }
  }
}
