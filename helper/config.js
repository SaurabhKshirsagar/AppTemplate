module.exports={
    queueNames:{
        APP_BUILDER:"app_builder"
    },
    jobName:{
        UPDATE_APP:"update_app"
    },
    kue_metadata : {
            watchStuckJobs: 1000,
            jobToProcess: 10,
            failedJobsRetryAttempts: 3,
            failedJobsRetryTimeDelay: 30*1000 
    },
    redisConfig : {
            host: process.env.REDIS_SERVICE_HOST || "127.0.0.1",
            port: process.env.REDIS_SERVICE_PORT || 6379,
            options: {}
    }
}