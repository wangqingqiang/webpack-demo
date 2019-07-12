const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pages = require('../abc.config.js');

const pwd = process.cwd();
const entryMap = {};
const htmlsConfig = [];
pages.forEach(page => {
    let entry = path.dirname(page.entry);
    entryMap[entry] = path.resolve('./src', page.entry);

    htmlsConfig.push(new HtmlWebpackPlugin({
        template: path.resolve(pwd, './src/template.ejs'),
        filename: `${entry}/${page.filename}`,
        templateParameters: {
            title: page.title,
        },
        inject: true,
        chunks: ['vendor','common',entry]
    }))
});
module.exports = {
    entryMap,
    htmlsConfig
};