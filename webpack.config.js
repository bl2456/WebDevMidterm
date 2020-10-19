const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // define entry file and output
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'index.js',
    },
    // define babel loader
    module: {
        rules: [
            { 
                test: /\.jsx?$/,  
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.mp4$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'video/mp4',
                        name: 'assets/[name].[ext]',
                    }
                }
              },
            {
                test: /\.html$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attributes: true,
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: 'assets/[name].[ext]',
                        esModule: false,
                    }
                } 
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,

    },
};