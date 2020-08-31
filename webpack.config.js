// @ts-check
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

/** @type { import('webpack').Configuration } */
const config = {
    entry: path.resolve(__dirname, "src/index.tsx"),
    mode: process.env.NODE_ENV === "development" ? "development" : "production",
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "build/"),
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: "@svgr/webpack",
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            app: path.resolve(__dirname, "src/"),
            static: path.resolve(__dirname, "static/"),
        },
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "SMSBump Forms",
            template: "!!handlebars-loader!src/index.handlebars",
        }),
    ],
    devtool: "source-map",
    performance: {
        hints: process.env.NODE_ENV === "production" ? "warning" : false,
    },
};

module.exports = config;
