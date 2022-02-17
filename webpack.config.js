const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        index: "./js/index.js",
        about: "./js/about.js"
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "[name]_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "./index.html",
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            template: "./about.html",
            filename: "./about.html",
            chunks: ["about"]
        }),
    ]
}