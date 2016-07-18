module.exports = {
  context: __dirname + "/app",

  entry: {
    javascript: "./js/app.jsx",
    html: "./index.html",
  },

  output: {
    filename: "app.js",
    path: __dirname + "/build",
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"],
        },
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },
}