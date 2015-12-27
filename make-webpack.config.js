"use strict";

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var jsSrc = path.join(__dirname,'app/scripts');
var srcDir = path.join(__dirname,'app/views');
var assets = 'assets/';

function makeConfig(options){
  var DEBUG = options.DEBUG;
  var entries = getEntries();
  var chunks = Object.keys(entries);
  var config = {
    entry: entries,

    output: {
        // 在debug模式下，__build目录是虚拟的，webpack的dev server存储在内存里
        path: path.resolve(DEBUG ? '__build' : assets),
        filename: DEBUG ? '[name].bundle.js' : 'js/[chunkhash:8].[name].min.js',
        chunkFilename: DEBUG ? '[chunkhash:8].chunk.js' : 'js/[chunkhash:8].chunk.min.js',
        publicPath: DEBUG ? '/__build/' : ''
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.js(x)?$/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },

    plugins: [
      new CommonsChunkPlugin({
          name: 'vendors',
          chunks: chunks,
          // Modules must be shared between all entries
          minChunks: chunks.length // 提取所有chunks共同依赖的模块
      })
    ]

  }

  if( DEBUG ){
    //css处理
    var cssLoader = {
        test: /\.css$/,
        loader: 'style!css'
    };
    var sassLoader = {
        test: /\.scss$/,
        loader: 'style!css!sass'
    };

    config.module.loaders.push(cssLoader);
    config.module.loaders.push(sassLoader);

  }else{

    //css处理
    var cssLoader = {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize') // enable minimize
    };
    var sassLoader = {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize', 'sass-loader')
    };

    config.module.loaders.push(cssLoader);
    config.module.loaders.push(sassLoader);
    config.plugins.push(
        new ExtractTextPlugin('css/[contenthash:8].[name].min.css', {
            // 当allChunks指定为false时，css loader必须指定怎么处理
            // additional chunk所依赖的css，即指定`ExtractTextPlugin.extract()`
            // 第一个参数`notExtractLoader`，一般是使用style-loader
            // @see https://github.com/webpack/extract-text-webpack-plugin
            allChunks: false
        })
    );
    //===============用做上线==================
    // 自动生成入口文件，入口js名必须和入口文件名相同
    // 例如，a页的入口文件是a.html，那么在js目录下必须有一个a.js作为入口文件
    var pages = fs.readdirSync(srcDir);

    pages.forEach(function(filename) {
        var m = filename.match(/(.+)\.html$/);
        console.log(m);
        if(m) {
            // @see https://github.com/kangax/html-minifier
            var conf = {
                template: path.resolve(srcDir, filename),
                // @see https://github.com/kangax/html-minifier
                minify: {
                    collapseWhitespace: true,
                    removeComments: true
                },
                filename: filename
            };
            //m[1] => index or gooddetail
            if(m[1] in config.entry) {
                conf.inject = 'body';
                //一下配置是把js和相关的html文件一一对应，如果不加此配置，就会把所有的js都注入到html中，显然多余
                conf.chunks = ['vendors', m[1]];
            }

            config.plugins.push(new HtmlWebpackPlugin(conf));
        }
    });

    //js压缩
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
    // 以上配置是 生产环境的配置
  }

  return config;

}

function getEntries(){

    var files = fs.readdirSync(jsSrc);

    var regexp = /(.*)\.js$/;
    var map = {};

    files.forEach((file)=>{
        var matchfile = file.match(regexp);

        if( matchfile ){
            map[matchfile[1]] = path.resolve(__dirname,jsSrc+"/"+matchfile[0])
        }

    });

    return map;
}

module.exports = makeConfig;
