var { createApp } = require("../codegen");
var npm = require("../npm");

var createapp =  function (req, res) {
        try{
            let status = createApp({appJSON:req.body,dataStore:null})
            return res.send(status);
        }catch(err){
            return res.json(err);
        }
    },
  //npm install package ----------------------------------------
  npminstall = function(req, res) {
    let packagename = req.body.packagename;
    let data = {};
    npm
      .install([packagename], {
        cwd: __dirname
      })
      .then(function(e) {
        data.error = null;
        data.message = "Package installed";
        res.send(data);
      })
      .catch(function(e) {
        data.error = true;
        data.message = "unable to install package";
        res.send(data);
      });
  },
  //get npm list ----------------------------------------------
  npmlist = function(req, res) {
    let packagename = req.body.packagename;
    let data = {};
    npm
      .list(__dirname)
      .then(function(packages) {
        if (0 <= _.indexOf(packages, packagename)) {
          data.error = null;
          data.message = `${packagename} already installed.`;
          res.send(data);
        } else if (
          0 <= _.indexOf(packages, `UNMET PEER DEPENDENCY ${packagename}`)
        ) {
          data.error = null;
          data.message = `${packagename} installed with UNMET PEER DEPENDENCY `;
          res.send(data);
        }
        data.error = true;
        data.message = `${packagename} is not installed. Try with packagename@VERSION`;
        res.send(data);
      })
      .catch(function(e) {
        data.error = true;
        data.message = `${packagename} is not installed. Try with packagename@VERSION`;
        res.send(data);
      });
  },
  //build android app ----------------------------------------
  buildapk = function(req, res) {
    let data = {};
    npm
      .buildapk()
      .then(function(msg) {
        data.isbuild = false;
        data.message = msg;
        res.send(data);
      })
      .catch(function(e) {
        data.isbuild = false;
        data.message = e;
        res.send(data);
      });
  };

module.exports = {
  createapp,
  npminstall,
  npmlist,
  buildapk
};
