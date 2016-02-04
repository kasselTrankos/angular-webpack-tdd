var webpack = require('webpack'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  path = require('path'),
  fs = require('fs');

var PORT = process.env.PORT || 3000;

module.exports = {
  devtool:"source-map",
  entry: {
    app:[
      //'./src/index.html',
      './src/app/main.js'
    ]
  },
  resolve: {
    root: [path.join(__dirname, "bower_components"), path.resolve(__dirname, "src", "app")],
    extensions: ['', '.js']
  },
  output: {
    sourceMapFilename:'[file].map',
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
      }, {
        test: /\.html/,
        loader:'html'
      }, {
        test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/],
        loader: 'file?name=fonts/[name].[ext]'
      }, {
        test: /\.css$/,
        loader: "style!css"
      },
      {test: /\.js$/, loader:'ng-annotate'}
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, 'bower_components', 'angular-material-sass-files'),
      path.resolve(__dirname, 'bower_components', 'font-awesome')
    ]
  },
  plugins: [
    new ExtractTextPlugin('assets/css/[name].css'),
    new ExtractTextPlugin('[name].html'),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ]
};
