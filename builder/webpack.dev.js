const path = require('path');
const pwd = process.cwd();
const WebpackBase = require('./webpack.base.js');
const WebpackMerge = require('webpack-merge');
const webpack = require('webpack');


module.exports = WebpackMerge(WebpackBase, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(pwd, './dist'),
        // port: 8888,
        hot: true,
        open: true,
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')(),
                            ]
                        }
                    },
                    'less-loader'
                ]
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})