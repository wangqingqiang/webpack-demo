# webpack-demo
以Vue为例进行webpack配置
## webpack-merge区分环境
  webpack.base.js、webpack.dev.js、webpack.prod.js  
  - `webpack-merge`
## 各种loader
- babel-loader
- url-loader
- file-loader
- mini-css-extract-plugin、style-loader、css-loader、less-loader、postcss-loader、autoprefixer **样式loader配置不放在webpack.base.js，因为开发和生产环境配置不同**
- vue-loader  
v15版本后用法改变：
  - `vue-loader` 和 `vue-template-compiler`需要同时安装
  - 增加 `Vue Loader` 的插件
    ```js
    // webpack.config.js
    const VueLoaderPlugin = require('vue-loader/lib/plugin')

    module.exports = {
      // ...
      plugins: [
        new VueLoaderPlugin()
      ]
    }
  ```
## html-webpack-plugin
## clean-webpack-plugin