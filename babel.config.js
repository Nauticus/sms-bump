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
                corejs: 2,
            },
        ],
        ["@babel/preset-typescript", { isTsx: true }],
        "@babel/preset-react",
    ],
    plugins: [["babel-plugin-styled-components", { ssr: false, fileName: false, pure: true, namespace: "SMSbump" }]],
};
