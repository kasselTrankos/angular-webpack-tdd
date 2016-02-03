var webpack = require('webpack'),
  webpackDevServer = require('webpack-dev-server'),
  config = require('./webpack.config'),
  path = require('path');


config.entry.app.unshift(
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/dev-server'
);
console.log(path.resolve(__dirname, 'public'), ' === ',config.output.publicPath);
config.plugins.push(new webpack.HotModuleReplacementPlugin());
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
  // hot: true,
  // inline: true,
  publicPath:  config.output.publicPath,
  stats: { colors: true },
  noInfo: true,
  contentBase: path.resolve(__dirname, 'public')
});
server.listen(3000);
