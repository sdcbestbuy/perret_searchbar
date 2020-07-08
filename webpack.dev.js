const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = merge(common, {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './client/dist'
    },
});