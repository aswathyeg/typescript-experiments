const htmlWebpackPlugin=require('html-webpack-plugin')
const { Module } = require('html-webpack-plugin')
Module.exports={
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
        }),
    ],
};