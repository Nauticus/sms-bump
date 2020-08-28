module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: "current",
                },
                useBuiltIns: "usage",
                debug: false,
                corejs: 2
            },
        ],
        ["@babel/preset-typescript", { isTsx: true }],
        "@babel/preset-react",
    ],
};
