let ncp =require("ncp").ncp,
Promise = require('bluebird'),
directoryExists = require('directory-exists'),
appsconfig = require("./appsconfig.js"),
_ = require("lodash"),
{appstatus}=require("./constant.js"),
{writeFileToPath}=require("./writefiletopath.js");

let path=`${process.cwd()}\\packages\\`,
setAppConfig=(name,app,newapp)=>{
    //New app 
    if(newapp){
        let portCount=appsconfig.portCount;
        let {_id,resource}=app;
        let port = ++portCount;
        app= {
            _id,
            status:appstatus.BUILDING,
            port,
            message:"",
            resource
        }
        appsconfig.portCount=port;
        appsconfig.apps[name]=_.cloneDeep(app)
    }else{
        //check from changes 
    }
},
setAppStatus=(name,status,message)=>{
    appsconfig.apps[name].status=status;
    appsconfig.apps[name].message=message;

},
copyTemplate=(name)=>{
    return new Promise((res,rej)=>{
        ncp(`${path}apptemplate`, `${path}${name}`, function (err) {
            if (err) 
                return rej("Fail to copy Tmplate")
            res("copied");
        })
    });
},
saveResourceToLocation=(appname,{resource},newapp)=>{
    let files = []
    _.map(resource,({name,type,codegen})=>{
        _.map(codegen,({data,filepath})=>{
            files.push(writeFileToPath(`${path}${appname}/${filepath}/${name}.${type}`,data))
        })
    })
       console.log(`in saveResourceToLocation: ${appname}`)
    return Promise.all(files);
},
webpackBuild=(name,app,newapp)=>{
    console.log(`in webpackBuild: ${name}`)
    return Promise.resolve("");
},
startWebpackServer=(name,app,newapp)=>{
    return Promise.resolve("");
},
update=(name,app)=>{
 return new Promise((res,rej)=>{
     if(directoryExists.sync(`${path}${name}`)){
        console.log(`App for update : ${name}`)
     }
     else{
        console.log(`Its new app : ${name}`)
        setAppConfig(name,app,true);
        copyTemplate(name)
        .then(()=>saveResourceToLocation(name,app,true))
        .then(()=>webpackBuild(name,app,true))
        .then(()=>startWebpackServer(name,app,true))
        .then(()=>{
            setAppStatus(name,appstatus.READY);
             console.log(`Done: ${name}`)
            return res("Done")
        })
        .catch((error)=>{
            setAppStatus(name,appstatus.ERROR,error.message);
            return rej(error)
        })
     }
   
 }) 
}


module.exports={update}