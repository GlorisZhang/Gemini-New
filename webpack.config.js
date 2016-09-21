/**
 * Created by Greg Zhang on 2016/9/20.
 */
var webpack = require('webpack');

module.exports = {
    devtool: '#source-map',
    entry: [
        __dirname + '/src/main.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/',//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true
    },
    module: {
        // avoid webpack trying to shim process
        noParse: /es6-promise\.js$/,
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
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules!postcss'//添加对样式表的处理
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.BannerPlugin("Copyright AsiaInfo BJ-FE inc.")//版权信息
    ]
};