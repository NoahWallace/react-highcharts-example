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
        sourceMapFilename:'[file].map'
    },
    resolve:{
        extensions: ['', '.js', '.jsx'],
        alias:{
            'react': 'React'
        }
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
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
