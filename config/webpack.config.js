const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

const rootFolder = process.cwd();

module.exports = {
    mode: "development",
    entry: path.join(rootFolder, 'src/index.jsx'),
    output: {
        path: path.join(rootFolder, 'dist'),
        filename: "bundle.[hash].js"
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(rootFolder, 'public/index.html'),
            filename: "index.html"
        })
    ],
    devtool: "inline-source-map",
    devServer: {
        port: 10200,
        compress: true,
        hot: true,
        static: path.join(rootFolder, 'dist'),
        historyApiFallback: true,
        open: true,
    }
}
