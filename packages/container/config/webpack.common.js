// This is going to take some kind of HTML file and inject couple of script tags into it
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    // inside rules array we can add loaders
    // the goall of loaders is to tell webpack how to handle different file types
    // the first loader that we're going to add is the babel-loader
    // Babel is a tool that allows us to write modern JavaScript and have it run in older browsers
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // we're going to use a preset called @babel/preset-react
            // this preset is going to allow us to write JSX
            presets: ["@babel/preset-react", "@babel/preset-env"],
            // we're going to use a plugin called @babel/plugin-transform-runtime
            // this plugin is going to help us with async/await
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
