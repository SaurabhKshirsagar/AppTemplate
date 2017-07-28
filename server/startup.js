var readline = require("readline"),
  webpack = require("webpack"),
  webpackConfig = require("../webpack.config.js"),
  compiler = webpack(webpackConfig),
  path = require("path"),
  bodyParser = require("body-parser"),
  express = require("express"),
  _ = require("lodash"),
  compression = require("compression"),
  API=require("./API");

var app;
let loopback = require("loopback"), fs = require("fs");
//loopback.createModel("Employee",{"name":{required:true}});

function startExpress() {
  app = express();
  var port = process.env.PORT || 8091;
  app.set("port", port);
  console.log("hosting express server on port " + port + "...");

  app.get("/listUsers", function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
      console.log(data);
      res.end(data);
    });
  });

  // Add webpack HMR endpoints
  if (process.env.NODE_ENV != "production") {
    app.use(
      require("webpack-dev-middleware")(compiler, {
        noInfo: true,
        stats: {
          colors: true
        },
        publicPath: "/"
      })
    );

    app.use(require("webpack-hot-middleware")(compiler));
  }

  // turn on compression
  app.use(compression());
  //apk file
  app.use('/apk', express.static(__dirname + '/../android/app/build/outputs/apk/'));
  // index.html, css & js
  app.use(express.static(__dirname + "/../build"));
  // images
  app.use(express.static(__dirname + "/../client/images"));
  app.use("/locale", express.static(__dirname + "/../client/locale"));
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json({ limit: "50mb" }));

//=========================== API ============================
  app.post("/createapp",API.createapp);
  app.get("/build/apk",API.buildapk);
  app.post("/npminstall",API.npminstall);
  app.post("/npmlist",API.npmlist);
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/../build/index.html"));
  });
//======================= API END ============================

  app.listen(app.get("port"));
  console.log("express server started.");
  if (process.env.NODE_ENV != "production") {
    console.log("Please wait for webpack build to finish...");
  }
}


if (process.env.NODE_ENV != "production") {
  startExpress();
} else {
  compiler.watch(
    {
      aggregateTimeout: 100
    },
    function (err, stats) {
      var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      if (err) {
        console.error(err);
        rl.question(
          "\nWebpack bundling failed, press return to exit...",
          function () {
            process.exit(1);
          }
        );
        return;
      }
      console.log(stats.toString({ colors: true }));
      var jsonStats = stats.toJson();
      if (jsonStats.errors.length > 0) {
        rl.question(
          "\nWebpack bundling failed, press return to exit...",
          function () {
            process.exit(1);
          }
        );
        return;
      }

      console.log("webpack bundle built.");
      if (!app) {
        startExpress();
      } else {
        console.log("express server is already running...");
      }
    }
  );
}
