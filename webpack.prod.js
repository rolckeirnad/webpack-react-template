const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [new MiniCSSExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader'],
            }
        ],
    }
});