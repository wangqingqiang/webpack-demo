const path = require('path');
const pwd = process.cwd();
const WebpackBase = require('./webpack.base.js');
const WebpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = WebpackMerge(WebpackBase(true), {
    mode: 'production',
    // devtool: 'cheap-module-source-map',
    output: {
        publicPath: '/dist/'
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
})