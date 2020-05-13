/**
 * vue config
 * @description
 * vue构建配置文件，[文档地址](https://cli.vuejs.org/zh/config/#vue-config-js)
 */
const argv = process.argv.splice(2);

// 打包体积分析插件
const BundleAnalyzerPlugin = argv.includes('--analyzer')
  ? [new (require('webpack-bundle-analyzer')).BundleAnalyzerPlugin()]
  : [];
const path =  require('path');
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL,
  productionSourceMap: false, // 去掉.map文件

  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);

    // 添加别名
    config.resolve.alias
    .set('@', resolve('src'))
    .set('api', resolve('src/api'))
    .set('components', resolve('src/components'))
    .set('config', resolve('src/config'))
    .set('i18n', resolve('src/i18n'))
    .set('layout', resolve('src/layout'))
    .set('mock', resolve('src/mock'))
    .set('plugins', resolve('src/plugins'))
    .set('router', resolve('src/router'))
    .set('styles', resolve('src/styles'))
    .set('utils', resolve('src/utils'))
    .set('view', resolve('src/view'))
  },
  // 开发服务器配置
  devServer: {
    open: false, // 是否打开浏览器
    // 代理配置
    proxy: {
      '^/api': {
        target: 'http://www.baidu.com', //要跨域的域名
        // target: process.env.VUE_APP_BASE_HOST,
        ws: true, // 是否启用websockets
        changeOrigin: true, //是否允许跨越
        pathRewrite: {
          '^/api': ''  //将你的地址代理位这个 /api 接下来请求时就使用这个/api来代替你的地址
        },
      }
    }
  },

  // webpack config
  configureWebpack: {
    plugins: [...BundleAnalyzerPlugin]
  },

  // node_modules 中需要编译的库
  transpileDependencies: [/vue-awesome/]
};
