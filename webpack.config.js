var path = require('path');

module.exports = {
    entry: {
        App: "./dev/temp/scripts/app.js",
        Vendor: "./dev/temp/scripts/vendor.js"
    },
    output: {
        path: path.resolve(__dirname, "./dev/assets/scripts"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["@babel/preset-env"]
                },
                test: /\.js$/,
                exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/
            }
        ]
    }
}