const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devtool:"source-map",
    entry: {
        react:'./src/react/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '/[name]/[name].bundle.js',
        sourceMapFilename:'[file].map',
        target: "commonjs"
    },
    resolve:{
        extensions: ['', '.js', '.jsx'],

    },
    module: {
        loaders: [{
            test: /\.js(x?)$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname,"src/react"),
            exclude: path.resolve(__dirname,"node_modules"),
            query: {
                presets: ['es2015', 'react']
            }
        },{
            test:/\.html/,
            loader:'html',
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve('./src/react/index.html'),
            inject:'body'
        })
    ]
};
