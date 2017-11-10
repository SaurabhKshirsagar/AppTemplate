var readline = require("readline"),
  path = require("path"),
  bodyParser = require("body-parser"),
  express = require("express"),
  _ = require("lodash"),
  compression = require("compression"),
  API=require("./API");

var app;

function startExpress() {
  app = express();
  var port = process.env.PORT || 8091;
  app.set("port", port);
  console.log("hosting express server on port " + port + "...");
  app.use(compression());
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json({ limit: "50mb" }));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
  });
//======================= API END ============================

  app.listen(app.get("port"));
  console.log("express server started.");
}

startExpress();

