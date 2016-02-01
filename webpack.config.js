var webpack = require('webpack'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  path = require('path');

module.exports = {
  devtool:"eval",
  entry: {
    app:[
      './src/app/main.js'
    ]
  },
  resolve: {
    root: [path.join(__dirname, "bower_components"), path.resolve(__dirname, "src", "app")],
    extensions: ['', '.js']
  },
  output: {
    publicPath: '/assets/js/',
    filename: '[name].js',
    path: path.resolve(__dirname , 'public')
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader:'style!css?sourceMap!sass?sourceMap',
        include: /src\/style/
      },
      {test: /\.js$/, loader:'ng-annotate'}
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, 'bower_components', 'angular-material-sass-files')]
  },
  plugins: [
    new ExtractTextPlugin('assets/css/[name].css'),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ]
};
