const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

module.exports = (app, env) => {
    const prod = env.mode === 'production';
    const config = {
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    uglifyOptions:{
                        mangle:false
                    }
                }),
                new OptimizeCssAssetsPlugin({})
            ]
        },
        entry: {
            index: './src/index.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "[name].[chunkhash].js",
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: '/node_modules/',
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.(s)css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(html)$/,
                    exclude: path.resolve(__dirname, 'src/index.html'),
                    use: [
                        {
                            loader: 'file-loader',
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|gif|ttf|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: 'head',
                template: path.join(__dirname, 'src/index.html')
            }),
            new CleanWebpackPlugin(['dist']),
            new MiniCssExtractPlugin({
                filename: "[name].[hash].css",
            }),
            new webpack.DefinePlugin({PROD: prod}),
        ],
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 3000
        }
    };
    return config;
};