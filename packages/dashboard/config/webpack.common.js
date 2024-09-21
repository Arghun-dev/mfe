const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/index.js",
  output: {
    filenam: "[name].[contenthash].js",
  },
  resolve: {
    extenson: [".js", ".vue"],
  },
  module: {
    // inside rules array we can add loaders
    // the goall of loaders is to tell webpack how to handle different file types
    // the first loader that we're going to add is the babel-loader
    // Babel is a tool that allows us to write modern JavaScript and have it run in older browsers
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader",
        },
      },
      {
        test: /\.css|\.scss$/,
        use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // we're going to use a preset called @babel/preset-react
            // this preset is going to allow us to write JSX
            presets: ["@babel/preset-env"],
            // we're going to use a plugin called @babel/plugin-transform-runtime
            // this plugin is going to help us with async/await
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
