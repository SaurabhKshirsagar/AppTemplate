'use strict';


let _ = require("lodash"),
queue = require('./queue.js'),
config = require('./config.js'),
queueNames=config.queueNames,
jobName=config.jobName,
Promise = require('bluebird');


//========================= 
let {update}=require("./update.js")
//==========================


let updateAppProcessor = (job, done ) => {
    let {name,app}=job.data;
    console.info(`${name}, Appbuilder update Job is Created.`);
    update(name,app)
    .then(()=>{
        console.info(`${name}, Appbuilder update Job is Created.`);
        job.save();
        done();
    })
    .catch(done)
  };


let bootBackendQueue = () => {
    let jobToProcess = config.kue_metadata.jobToProcess
    queue.obtainNamedQueue(queueNames.APP_BUILDER, "APPBUILDER")
    .then(que => {
        que.process(jobName.UPDATE_APP, jobToProcess,updateAppProcessor);
    })

}

module.exports={bootBackendQueue}

