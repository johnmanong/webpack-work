module.exports = {
  context: __dirname + "/app",

  entry: "./js/app.js",

  output: {
    filename: "app.js",
    path: __dirname + "/build",
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      }
    ],
  },
}