const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {
    return {
        /* +++++ entry +++++ */
        entry: __dirname + '/src/index.js',       

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react', 'stage-0'],
                            plugins: [
                                "transform-class-properties",
                                "transform-runtime"
                            ]
                        }
                    }],                
                },
                {
                    test: /\.s?css$/,
                    exclude: /node_modules/,
                    use: [
                        { loader: MiniCssExtractPlugin.loader },
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' },                       
                    ]
                },
                {
                    test: /\.svg$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: 'raw-loader'
                    }]
                }
            ]
        },
    
        /* +++++ plugins +++++ */
        plugins: [
            new MiniCssExtractPlugin()
        ]
    };
};
