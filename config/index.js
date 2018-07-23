'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.
let new_date = new Date();
/**日期时间格式化 20180413170432**/
let date_year = new_date.getFullYear();
let date_month = new_date.getMonth() <= 8 ? '0' + (new_date.getMonth() + 1) : (new_date.getMonth() + 1);
let date_day = new_date.getDate() <= 9 ? '0' + new_date.getDate() : new_date.getDate();
let date_hour = new_date.getHours() <= 9 ? '0' + new_date.getHours() : new_date.getHours();
let date_min = new_date.getMinutes() <= 9 ? '0' + new_date.getMinutes() : new_date.getMinutes();
let date_sec = new_date.getSeconds() <= 9 ? '0' + new_date.getSeconds() : new_date.getSeconds();
const new_dateTime = process.env.env_config + date_year + "年" + date_month + "月" + date_day + "日" + date_hour + "时" + date_min + "分" + date_sec + '秒';
console.info(new_dateTime)
const path = require('path')
module.exports = {
  dev: {
    env: require('./dev.env'),
    // port: 2222,
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    proxyTable: {
      '/api':{
        target:'http://127.0.0.1:8080',
        changeOrigin:true,
        pathRewrite:{
          '^/api':'/api'
        }
      }
    },
    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8088, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,
    /**
     * Source Maps
     */
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',
    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,
    cssSourceMap: false
  },

  build: {
    prodEnv: require('./prod.env'),
    testEnv: require('./test.env'),
    huiduEnv: require('./huidu.env'),
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'), // 编译输入的 index.html 文件

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'), // 编译输出的静态资源路径
    assetsSubDirectory: 'static', // 编译输出的二级目录
    // assetsPublicPath: '/', // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
    assetsPublicPath: './', // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
    /**
     * Source Maps
     */
    productionSourceMap: true, // 是否开启 cssSourceMap
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
