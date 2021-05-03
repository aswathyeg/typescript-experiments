const HtmlWebpackPlugin=require('html-webpack-plugin')
const { Module } = require('html-webpack-plugin')
module.exports={
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
        }),
    ],
};