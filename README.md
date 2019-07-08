# webpack-demo
以Vue为例进行webpack配置
## vue-loader 
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