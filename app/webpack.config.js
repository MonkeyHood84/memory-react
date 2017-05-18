var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "src");
var OUTPUT = path.resolve(__dirname, "dist");

var config = {
  entry: DEV + "/scripts/app.jsx",
  output: {
    path: OUTPUT + '/',
    filename: "myCode.js"
  },
  devtool: "inline-sourcemap",
  module: {
    loaders: [{
      test: /\.jsx$/,
      include: DEV,
      loader: "babel-loader",
      query: {
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.(less|css)$/,
      loader: 'style-loader!css-loader?sourceMap!less-loader?sourceMap'
    }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".less"],
  },
  devServer: {
    inline: true,
    port: 8084
  }
};

module.exports = config;