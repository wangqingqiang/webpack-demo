const pwd = process.cwd();
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { entryMap, htmlsConfig } = require('./getEntrys');

module.exports = {
    stats: { children: false },
    entry: entryMap,
    output: {
        path: path.resolve(pwd, './dist'),
        filename: '[name]/index.js',
        chunkFilename: '[name].js',
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
                exclude: /node_modules/,
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
        ...htmlsConfig
    ],
    optimization: {
        usedExports: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 2, // 最少引用次数
                    priority: 10, // 优先级
                    name: 'vendor',
                },
                common: {
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 2,
                    priority: 1,
                    name: 'common',
                }
            }
        }
    }
}