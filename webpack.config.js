// @ts-check
const path = require('path');

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
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            app: path.resolve(__dirname, "src/"),
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

