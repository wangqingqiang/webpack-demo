const path = require('path');
const pwd = process.cwd();
const WebpackBase = require('./webpack.base.js');
const WebpackMerge = require('webpack-merge');
const webpack = require('webpack');


module.exports = WebpackMerge(WebpackBase(false), {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(pwd, './dist'),
        // port: 8888,
        hot: true,
        hotOnly: true,
        open: true,
        overlay: true,
    },
    output: {
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})