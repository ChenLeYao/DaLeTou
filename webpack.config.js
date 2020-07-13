const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const mainfestPlugin = require('webpack-manifest-plugin');
module.exports = {
    entry  : {
        load : './src/public.js',
        main : './src/index.js'
    },
    mode : 'development',
    output : {
        path : path.resolve(__dirname , 'build'),
        filename : '[name].js'
    },
    devtool: "cheap-eval-source-map",
    devServer : {
        contentBase : __dirname ,
        index : 'index.html',
        port : 3300,
        compress : true ,
        allowedHosts : [],
        before : function (app) {
            // console.log(app);
            console.log('构造前');
        },
        setup: function(app){
            console.log('启动');
        },
        // noInfo : true ,
        // quiet : true ,
        clientLogLevel : 'none',
        progress : true ,
        hot : true
    },
    module : {

        rules : [
            {
                test : /.js$/,
                exclude : /node_modules/,
                loader : 'babel-loader'
            },
            {
                test : /\.css$/,
                loader : [ 'style-loader' , 'css-loader']
            },
            {
                test : /\.(png|jpg|gif)$/ ,
                use : [
                    { loader :  'file-loader' }
                ]
            },
            {
                test : /\.scss$/,
                use : [
                    { loader : 'style-loader'} ,
                    { loader : 'css-loader'} ,
                    { loader : 'sass-loader'}
                ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title : 'DaLeTou',
        }),
        new CleanWebpackPlugin(),
        new mainfestPlugin()
    ]
};