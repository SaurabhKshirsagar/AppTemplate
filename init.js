var readline = require("readline"),
path = require("path"),
bodyParser = require("body-parser"),
express = require("express"),
_ = require("lodash"),
compression = require("compression"),
boot=require('./helper/initqueue.js').bootBackendQueue()
queue = require('./helper/queue.js'),
config = require('./helper/config.js'),
queueNames=config.queueNames,
jobName=config.jobName;


var app;


function startExpress() {
  app = express();
  var port = 8091;
  app.set("port", port);
  console.log("Appbuilder Started on " + port + "...");
  app.use(compression());
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json({ limit: "50mb" }));

  //===================== API =============================
  app.post("/apps/update/:appname",function(req,res){
    let {params:{appname},body}=req;
    queue.createJob(queueNames.APP_BUILDER,jobName.UPDATE_APP,{name:appname,app:body})
    .then(jobid => {
      console.log("update job started with id : ",jobid)
      res.status(200).send("Update job started.")
    })
  })

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
  });
//======================= API END ============================

  app.listen(app.get("port"));
  console.log("Appbuilder server started.");
}


startExpress();

