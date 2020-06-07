const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin')
const webpack = require('webpack')
module.exports = {
    entry: "./ts/index.ts",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "js/main.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'pug-loader',
                        options: {
                            pretty: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    },
                    "resolve-url-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            publicPath: '/',
                            outputPath: '/',
                            name: '[path][name].[ext]',
                        }
                    }
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        publicPath: '../',
                        name: '[path][name].[ext]',
                    }
                }],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'views/index.pug',
            content: 'bar'
        }),
        new HtmlWebpackPlugin({
            title: "about page",
            filename: "about.html",
            template: 'views/about.pug'
        }),
        new HtmlWebpackPlugin({
            title: "projects page",
            filename: "projects.html",
            template: 'views/projects.pug'
        }),
        new HtmlWebpackPlugin({
            title: "projectItem page",
            filename: "contact.html",
            template: 'views/contact.pug'
        }),
        new HtmlWebpackPlugin({
            title: "news page",
            filename: "news.html",
            template: 'views/news.pug'
        }),
        new webpack.ProvidePlugin({
            '$': "jquery",
            'jQuery': "jquery",
            'window.jQuery': 'jquery',
        }),
        new HtmlWebpackPlugin({
            title: "project item",
            filename: "project-item.html",
            template: 'views/project-item.pug'
        }),
        new HtmlWebpackPlugin({
            title: "contact page",
            filename: "contact.html",
            template: 'views/contact.pug'
        }),
        new MiniCssExtractPlugin({
            filename: "css/main.css"
        }),
        new CopyPlugin([
            { from: 'assets', to: 'assets' },
        ]),
        new HtmlWebpackInlineSVGPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};
