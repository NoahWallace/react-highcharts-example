const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devtool:"eval",
    entry: {
        //react:'./src/react/index.js',
        reactts:'./src/react-ts/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '/[name]/[name].bundle.js',
        sourceMapFilename:'[file].map',
        target: "commonjs"
    },
    resolve:{
        extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        loaders: [{
            test: /\.js(x?)$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname,"src/react"),

            query: {
                presets: ['es2015', 'react']
            }
        },{
            test: /\.ts(x?)$/,
            loader: 'ts-loader',
            include: path.resolve(__dirname,"src/react-ts"),

        },{
            test:/\.html/,
            loader:'html',
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve('./src/react/index.html'),
            inject:'body'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve('./src/react-ts/index.html'),
            inject:'body'
        })
    ]
};
