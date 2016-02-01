var webpack = require('webpack'),
  path = require('path');
module.exports = {
  entry: {
    app: ['./src/app/main.js']
  },
  resolve: {
    root: [path.join(__dirname, "bower_components"), path.resolve(__dirname, "src", "app")],
    extensions: ['', '.js']
  },
  output: {
    publicPath: '/assets/',
    filename: '[name].js',
    path: path.resolve(__dirname , 'public')
  },
  module: {
    loaders: [
      {test: /src\/app.*\.js$/, loader:'ng-annotate'}
    ]
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ]
};
