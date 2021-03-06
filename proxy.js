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
app.use(express.static('public'));
//app.use('/assets', proxy(url.parse('http://localhost:3001/assets')));
//app.use('/fonts', proxy(url.parse('http://localhost:3001/fonts')));
app.use(/\.hot\-update\.json$/i, function(req, res){
  console.log('joder mierda');
} /*proxy(url.parse('http://localhost:3000'))*/)
app.use('/apitwitter', proxy(url.parse(apiTwitter)));
app.use('/ws', function(req, res){ws.web(req, res);});
app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
///using folder of the webpack-server, not custom that give static files better
//app.use('/assets/*', proxy(url.parse('http://localhost:3000/assets')));
//# -----your-webpack-dev-server------------------
/*
config.entry.app.unshift(
  'webpack-dev-server/client?http://' + host + ':' + port
);
config.plugins.push(new webpack.HotModuleReplacementPlugin());*/
var server = new WebpackDevServer(webpack(config), {
  contentBase: "./public",
  hot:true,
	quiet: false,
	filename: "assets/js/app.js",
  inline: true,
  noInfo:true,
	quiet: false,
  publicPath:  '/',
  stats: { colors: true },
	headers: { 'Access-Control-Allow-Origin': '*' }
});

//## run the two servers
server.listen(port, host, function() {
  console.info('==>:::WEBPACK--APP is running at http://%s:%s', host, port);
});
app.listen(dev_webpack_port, host, function(){
  console.info('==>:::APP is running at http://%s:%s', host, dev_webpack_port);
});
