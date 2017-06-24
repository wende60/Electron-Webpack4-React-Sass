const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const webpackConfig = {
    context: __dirname + '/src',
    entry: './index.js',

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            __dirname + '/build',
            'node_modules',
        ],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                        plugins: ["transform-class-properties"]
                    }
                }],

            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader'
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("style.css")
    ]
};

module.exports = webpackConfig;

