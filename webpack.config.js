const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        port: 3000,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // Extracts CSS into files
                    'css-loader', // Translates CSS into CommonJS
                    'postcss-loader', // Process CSS with PostCSS for vendor prefixes
                    'sass-loader' // Compiles Sass to CSS
                ]
            }
        ]
    },
    plugins: [

        new CopyWebpackPlugin({
            patterns: [
              { from: "./src/images", to: "images" }
            ],
        }),

        new MiniCssExtractPlugin({
            filename: 'styles.css' // Output CSS file name
        }),

        new HtmlWebpackPlugin({
            // template: './src/index.html',
            title: "Odin's Restaurant",
            filename: 'index.html',
            inject: 'body',
        }),
    ],
};