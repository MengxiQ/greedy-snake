const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: "bundle.js"
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js','.ts']
    },
    devServer: {
        port: 8080,
        contentBase:'./build'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: "./src/index.html",
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.ts$/,
                use: {
                    loader: "ts-loader"
                },
                exclude: /node_modules/
            }
        ]
    }
}