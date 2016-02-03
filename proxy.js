"use strict";
//###WEBPACK
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
///#####THIRD PARTY
var express = require('express');
var httpProxy = require('http-proxy');
var url = require('url');
var proxy = require('proxy-middleware');
///### PROCESS env
var host = process.env.HOST || 'localhost';
var port = process.env.PORT || 3000;
var twitter_port = process.env.PORT_TWITTER || 3040;
var dev_webpack_port = process.env.DEV_WEBPACK_PORT || 3001;
//## --------your proxy----------------------
var apiTwitter = 'http://'+host+':'+twitter_port;
var app = express();
var ws = httpProxy.createProxyServer({
  target: apiTwitter,
  ws:true
});
app.use('/apitwitter', proxy(url.parse(apiTwitter)));
app.use('/ws', function(req, res){ws.web(req, res);});
app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

//# -----your-webpack-dev-server------------------
config.entry.app.unshift(
  'webpack-dev-server/client?http://' + host + ':' + port,
  'webpack/hot/dev-server'
);
config.plugins.push(new webpack.HotModuleReplacementPlugin());
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
  console.info('==>:::WEBPACK--APP is running at http://%s:%s', host, port);
});
app.listen(dev_webpack_port);
