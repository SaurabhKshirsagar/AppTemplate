

let _ = require("lodash"),
appConfig={ portCount:8091,
    apps:{

    }
};

module.exports={
    setAppConfig:(appname,app,newapp)=>{
        if(newapp){
            let portCount=appConfig.portCount;
            let {_id,resource}=app;
            let port = ++portCount;
            app= {
                _id,
                status:appstatus.BUILDING,
                port,
                message:"",
                resource
            }
            appConfig.portCount=port;
            appConfig.apps[appname]=_.cloneDeep(app)
        }else{
        }
    },
    setAppStatus:(appname,status,message)=>{
        appConfig.apps[appname].status=status;
        appConfig.apps[appname].message=message;
    },
    getAppConfigByName:(appname)=>appConfig.apps[appname],
    getAppConfig:()=>appConfig,
};