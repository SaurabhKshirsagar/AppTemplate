var webpack = require("webpack"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  path = require("path"),
  plugins = [
    new HtmlWebpackPlugin({
      template: "./client/index.html",
      hash: true,
      baseUrl:"/",
      minify: {
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeAttributeQuotes: true,
        minifyCSS: true
      }
    }),
    new webpack.DllReferencePlugin({
      context: ".",
      manifest: require("./build/vendor-manifest.json")
    }),
    new ExtractTextPlugin({ filename:"styles.min.css", allChunks: true }),
    new webpack.HotModuleReplacementPlugin()
  ];

module.exports = {
  entry: {
    javascript: [
      "babel-polyfill",
      "./client/js/engine/app/index.js",
      "webpack-hot-middleware/client"
    ]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
                    cacheDirectory: true
                }
      
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
     {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },

      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?[a-z0-9]+)?$/,
        loaders: ['file-loader?name=fonts/[name].[ext]']
      }
     
    ]
  },
  plugins: plugins,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname,"build"),
    chunkFilename: "[name]-[hash].js"
  },
   externals: {
        "config": "$config"
    },
  resolve: {
    alias: {
      styles: path.join(__dirname, "client", "styles"),
      engine: path.join(__dirname, "client", "js", "engine"),
      helpers: path.join(__dirname, "client", "js", "helpers"),
      components: path.join(__dirname, "client", "js", "components"),
      images: path.join(__dirname, "client", "images"),
      actions: path.join(__dirname, "client", "js", "actions"),
      appcontext: path.join(__dirname, "client", "js", "appcontext"),
      datastore: path.join(__dirname, "client", "js", "datastore")
    },
    extensions: ["*",".js", ".json"]
  }
};
