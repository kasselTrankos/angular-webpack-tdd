var webpack = require('webpack'),
  webpackDevServer = require('webpack-dev-server'),
  webpackConfig = require('./webpack.config'),
  path = require('path');
webpackConfig.entry.app.unshift(
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/dev-server'
);
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
var compiler = webpack(webpackConfig);
var server = new webpackDevServer(compiler, {
  hot: true,
  inline: true,
  publicPath:  webpackConfig.output.publicPath,
  stats: { colors: true },
  noInfo: true,
  contentBase: path.resolve(__dirname, 'public')
});
server.listen(3000);
