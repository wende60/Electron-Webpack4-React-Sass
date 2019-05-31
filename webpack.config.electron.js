const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = (env, options) => {
    const webpackConfig = baseConfig(env, options);

    return merge.smart(webpackConfig, {
        output: {
            path: __dirname + '/build/',
            publicPath: './build/',
            filename: 'bundle.js'
        },
        optimization: {
            nodeEnv: 'electron'
        },
        target: 'electron-main'
    });
};

