"use strict";
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var express = require('express');
var httpProxy = require('http-proxy');
var port = process.env.PORT || 3000;
var host = process.env.HOST || 'localhost';
var dev_webpack_port = process.env.DEV_WEBPACK_PORT || 3001;

//## --------your proxy----------------------
var app = express();

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});



//# -----your-webpack-dev-server------------------
var server = new WebpackDevServer(webpack(config), {
  contentBase: "./public",
  hot:true,
	quiet: false,
	filename: "assets/main.js",
  inline: true,
  noInfo:true,
	quiet: false,
  publicPath:  config.output.publicPath,
  stats: { colors: true },
	headers: { 'Access-Control-Allow-Origin': '*' }
});

//## run the two servers
server.listen(port, host, function() {
  console.log('Listening at ' + host + ':' + port);
});
app.listen(dev_webpack_port);
