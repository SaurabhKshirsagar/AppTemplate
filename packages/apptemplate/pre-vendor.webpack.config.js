var webpack = require("webpack"),
path= require("path");

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
    filename: "vendor.bundle.js",
    path: `${__dirname}/dist`,
    library: "vendor_lib"
  },
  plugins: [
    new webpack.DllPlugin({
      path: `${__dirname}/dist/pre-vendor-manifest.json`,
      name: "vendor_lib"
    })
      
  ]
};
