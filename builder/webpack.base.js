const pwd = process.cwd();
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(pwd, './src/pages/home/index.js'),
    },
    output: {
        path: path.resolve(pwd, './dist'),
        filename: '[name].[hash].js',
    },
    resolve: {
        alias: {
            '@': path.resolve(pwd, 'src'),
        },
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        limit: 10240,
                        outputPath: './images',
                        // publicPath: '//www.cdn.com/images'
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(pwd, './src/template.ejs'),
            filename: 'index.html',
            templateParameters: {
                title: '这是首页'
            }
        })
    ],
    optimization: {
        usedExports: true,
    }
}