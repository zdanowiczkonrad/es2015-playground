module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.js$/, loader: 'babel-loader'},
            { test: /\.scss$/, loaders: ["style", "css", "sass"] }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.css']
    }
};
