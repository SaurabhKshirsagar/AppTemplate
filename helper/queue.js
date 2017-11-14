'use strict';

let  Promise = require('bluebird'),
    _ = require('lodash'),
    kueMetadata = require('./config.js').kue_metadata,
    redisConfig = require('./config.js').redisConfig;

let queue = null;
const kue = require('kue-scheduler')

let queuePool = {},
    watchStuckJobs = kueMetadata.watchStuckJobs;
    
let obtainNamedQueue = (name, prefix="q") => {
    let queueName =  name + "_Queue";
    if(!_.isUndefined(queuePool[queueName])) { 
        return Promise.resolve(queuePool[queueName]);
    }
    return createQueue(queueName, prefix)
    .then((que) => {
        console.info(`Queue ${queueName} created.` );
        queuePool[queueName] = que;
        return que
    })
}

let createQueue = (name, prefix = 'q') => {
    let options = { name, prefix, redis: redisConfig} 
    let queue = kue.createQueue(options)
    queue.watchStuckJobs(watchStuckJobs);
    queue.on('ready', () => {
        console.info('Queue is ready!');
    });
    queue.on('error', (err) => {
        console.log(err);
        console.error('Something went wrong with queue.');
    });
    return Promise.resolve(queue);
}

let createJob = (queueName, jobName, data) => {
    let job;
    return obtainNamedQueue(queueName)
    .then((queObj) => {
        return new Promise((resolve, reject) => {
            job = queObj.create(jobName, data)
            .attempts(kueMetadata.failedJobsRetryAttempts)
            .backoff({ delay: kueMetadata.failedJobsRetryTimeDelay, type:'fixed' })
            .removeOnComplete(false);

            
            job.on('complete', function(){
                console.info(`Job ${job.id} completed Successfully!`);
            })

            job.on('failed', function(err){
                console.error(`Job ${job.id} Failed.`);
            })

            job.on('failed attempt', function(err, attempt){
                console.info(`Job reattempt for ${job.id}.`);
            })

            job.on('error', function(err){
                console.error(`Job ${job.id} error : ${err}`);
            })

            job.on('remove', function(result){
                console.info('Job has been removed');
            })

            job.on('start', function(result){
                console.info('Job started for: ', result);
            })

            job.on('progress', function(progress, data){
                console.info('\r  job #' + job.id + ' ' + progress + '% complete. ' );
            })

            job.save((err) => {
                if(err) reject("Error in Job creation.");
                return resolve(job.id);
            });

         })
        
    })
}

let getJobById = (jobId) => {
    return new Promise((resolve, reject) => {
        kue.Job.get(jobId, (err, job) => {
            if(err) return reject(err)
            return resolve(job);
        })

    })
}

module.exports = { obtainNamedQueue, createJob, getJobById } 



