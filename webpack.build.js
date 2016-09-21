/**
 * Created by Greg Zhang on 2016/9/21.
 */
var webpack = require('webpack');
var text = require("extract-text-webpack-plugin");
var html = require('html-webpack-plugin');
var fs=require('fs');
function clear(_path) {
    if (fs.existsSync(_path)) {
        fs.readdirSync(_path).forEach(function(_file, _index) {
            var _curPath = _path + "/" + _file;
            if (fs.statSync(_curPath).isDirectory()) {
                clear(_curPath, fs);
            } else {
                fs.unlinkSync(_curPath);
            }
        });
        fs.rmdirSync(_path);
        return true
    }
    return false
}
clear('./dist/');

var config = {};
config.devtools = '#eval-source-map';
config.entry =  "./src/main.js";

config.output = {
    path: "./dist",
    publicPath: './dist/',
    filename: "bundle.js"
};
config.module = {
    loaders: [
        {
            test: /\.vue$/,
            loader: 'vue'
        },
        {
            test: /\.js$/,
            exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            loader: 'babel'
        },
        {
            test: /\.css$/,
            loader: text.extract("style-loader", "css-loader")//添加对样式表的处理
        },
        {
            test: /\.(png|jpg|gif)$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: '[name].[ext]?[hash]'
            }
        },
        {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url",
            query: {
                name: '[name].[ext]?[hash]&mimetype=application/font-woff'
            }
        },
        {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url",
            query: {
                name: '[name].[ext]?[hash]&mimetype=application/font-woff2'
            }
        },
        {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url",
            query: {
                name: '[name].[ext]?mimetype=application/font-woff2'
            }
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url",
            query: {
                name: '[name].[ext]?mimetype=application/font-woff2'
            }
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url",
            query: {
                name: '[name].[ext]?mimetype=image/svg+xml'
            }
        },
        {
            test: /\.json(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url",
            query: {
                name: '[name].[ext]?mimetype=application/json'
            }
        }
    ]
};

config.vue = {
    loaders: {
        css: text.extract(
            "style-loader",
            "css-loader?sourceMap",
            {
                publicPath: "./dist/"
            }
        )
    }
};

config.plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new text('news.css'),
    new html({
        filename: './index.html',
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: "bundle",
        filename: "[name].js"
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        compress: {
            warnings: false
        }
    }),
    new webpack.BannerPlugin("Copyright AsiaInfo BJ-FE inc.")//版权信息
];
module.exports = config;