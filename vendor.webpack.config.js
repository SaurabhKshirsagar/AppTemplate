var webpack = require("webpack");

module.exports = {
  entry: {
    vendor: [
      "react",
      "react-dom",
      "react-addons-css-transition-group",
      "react-addons-pure-render-mixin",
      "react-router",
      "react-gravatar",
      "reflux/src/connect",
      "reflux-core",
      "reflux-core/lib/createStore",
      "react-bootstrap",
      "react-router-dom",
      "core-js",
      "bluebird"
    ]
  },
  output: {
    filename: "[name].bundle.js",
    path: "build/",
    library: "[name]_lib"
  },
  plugins: [
    new webpack.DllPlugin({
      path: "build/[name]-manifest.json",
      name: "[name]_lib"
    }),
    new webpack.optimize.UglifyJsPlugin(),
      
  ]
};
