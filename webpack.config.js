var webpack = require('webpack'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  path = require('path');

module.exports = {
  devtool:"eval",
  entry: {
    app:[
      './src/app/main.js',
      './src/style/main.scss'
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
        loader:ExtractTextPlugin.extract('style', 'css!sass'),
        include: /src\/style/
      },
      {test: /\.js$/, loader:'ng-annotate'}
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, 'bower_components', 'angular-material-sass-files')]
  },
  plugins: [
    new ExtractTextPlugin('assets/css/[name].css',{
      allChunks: true
    }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ]
};
