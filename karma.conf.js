var webpack = require('webpack'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  path = require('path');
module.exports = function(config){
  config.set({

    basePath : './',
    specs: ['tests/e2e/*.js'],
    files : [
      'test/**/*.spec.js'
    ],

    autoWatch : true,
    preprocessors:{
      'src/app/main.js':['webpack']
    },
    browserify: {
      debug: true
    },
    frameworks: ['mocha', 'chai'],

    browsers : ['Chrome'],
    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    logLevel: config.LOG_INFO,

    plugins : [
        require("karma-webpack"),
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            //'karma-phantomjs-launcher',
            'karma-mocha',
            'karma-chai',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
    webpack:{
      devtool:"source-map",
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
      resolve: {
        root: [path.join(__dirname, "bower_components"), path.resolve(__dirname, "src", "app")],
        extensions: ['', '.js']
      },
      plugins: [
        new ExtractTextPlugin('assets/css/[name].css'),
        new webpack.ResolverPlugin(
          new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
      ]
    }

  });
};
