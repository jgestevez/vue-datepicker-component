/* eslint-disable  */

const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  configureWebpack: {
    // devtool: 'eval-source-map',
    resolve: {
      alias: {
        'vue-google-flight-datepicker': path.resolve('lib'),
        'dongdong': path.resolve('dist'),
      }
    },
    plugins: [
      new CopyPlugin([
        {
          from: path.resolve(__dirname, './template/package.template.json'),
          to: path.resolve(__dirname, './lib/package.json')
        }
      ])
    ]
  }
}
