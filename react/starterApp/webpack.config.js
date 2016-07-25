const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

//- React bundle extracted using CommonsChunkPlugin
//- minimification
//- source-map
//TODO:
// this config is good for development, need a solution for different build target
const PATHS = {
    app: path.join(__dirname, 'app'),
    style: [
        path.join(__dirname, 'app', 'main.css')
    ],
    build: path.join(__dirname, 'build'),
    test: path.join(__dirname, 'tests')
};

module.exports = {
    devtool: 'source-map',
    context: __dirname + "/app",
    entry: {
        app: PATHS.app,
        style: PATHS.style,
        vendor: ['react', 'react-dom']
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            // Enable caching for extra performance
            loaders: ['babel?cacheDirectory'],
            include: PATHS.app
        }, {
            test: /\.css$/,
            loaders: ['style', 'css'],
            include: PATHS.style
        },
        { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
        { test: /\.ttf$/,    loader: "file-loader" },
        { test: /\.eot$/,    loader: "file-loader" },
        { test: /\.svg$/,    loader: "file-loader" }],
        preLoaders: [{
            test: /\.(js|jsx)$/,
            loaders: ['eslint'],
            include: PATHS.app
        }]
    },
    plugins: [
        // Enable multi-pass compilation for enhanced performance
        // in larger projects. Good default.
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        }),
        new HtmlWebpackPlugin({
            template: require('html-webpack-template'),
            title: 'Starter app',
            appMountId: 'app',
            inject: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            // options.name modules only
            minChunks: Infinity
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new CleanWebpackPlugin([PATHS.build], {
          root: process.cwd()
        })
    ],
    devServer: {
        // Enable history API fallback so HTML5 History API based
        // routing works. This is a good default that will come
        // in handy in more complicated setups.
        historyApiFallback: true,

        // Unlike the cli flag, this doesn't set
        // HotModuleReplacementPlugin!
        hot: true,
        inline: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',

        // Parse host and port from env to allow customization.
        //
        // If you use Vagrant or Cloud9, set
        // host: options.host || '0.0.0.0';
        //
        // 0.0.0.0 is available to all network devices
        // unlike default `localhost`.
        host: process.env.HOST, // Defaults to `localhost`
        port: process.env.PORT // Defaults to 8080
    }
}
