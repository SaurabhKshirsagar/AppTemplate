var Promise =require("bluebird"),
preVendorConfig = require("../pre-vendor.webpack.config.js"),
preWebpackConfig = require("../pre-webpack.config.js"),
vendorConfig = require("../vendor.webpack.config.js"),
webpackConfig = require("../webpack.config.js"),
webpack = require("webpack"),
webpackDevServer=require("webpack-dev-server"),
preVendorCompiler=webpack(preVendorConfig),
vendorCompiler=webpack(vendorConfig),
buildVendorDll=Promise.promisify(vendorCompiler.run.bind(vendorCompiler)),
buildPreVendorDll=Promise.promisify(preVendorCompiler.run.bind(preVendorCompiler));


module.exports={
    buildVendorDll,
    webpackConfig,
    buildPreVendorDll,
    preWebpackConfig
}
