"use strict";

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

// var DEBUG = process.env.DEBUG ;
//
// var DEBUG = true;

var jsSrc = path.join(__dirname,'app/scripts');

var config = {

    entry: jsSrc+"/index.js",

    output: {
        filename:'bundle.js',
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },

}

module.exports = config;
