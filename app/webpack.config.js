var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "src");
var OUTPUT = path.resolve(__dirname, "dist");

var config = {
  entry: DEV + "/scripts/app.jsx",
  output: {
    path: OUTPUT,
    filename: "myCode.js"
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      include: DEV,
      loader: "babel-loader",
      query: {
        presets: ['react', 'es2015']
      }
    }]    
  },
  resolve: {
      extensions: [".js", ".jsx"],
    },
  devServer: {
    inline: true,
    port: 8080
  }
};

module.exports = config;