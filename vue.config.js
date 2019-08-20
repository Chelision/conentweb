const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // entry: {
  //   main: ['babel-polyfill', 'src/main.js']
  //   // 'vender-base': '@/vendors/vendors.base.js',
  //   // 'vender-exten': '@/vendors/vendors.exten.js'
  // },
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('public', resolve('public'))
  }
}
