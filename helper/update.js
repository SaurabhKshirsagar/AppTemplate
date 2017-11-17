let ncp =require("ncp").ncp,
Promise = require('bluebird'),
directoryExists = require('directory-exists'),
{getAppConfig,setAppStatus,setAppConfig} = require("./appsconfig.js"),
_ = require("lodash"),
{appstatus}=require("./constant.js"),
{writeFileToPath}=require("./writefiletopath.js"),
webpack = require("webpack"),
webpackDevServer=require("webpack-dev-server");

let path=`${process.cwd()}\\packages\\`,
copyTemplate=(appname)=>{
    return new Promise((res,rej)=>{
        ncp(`${path}apptemplate`, `${path}${appname}`, function (err) {
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
createVendorBuild=(appname,app,newapp)=>{
    let {port}=getAppConfig().apps[appname];
    let {buildVendorDll,webpackConfig,buildPreVendorDll,preWebpackConfig}= require(`${path}${appname}/buildApis`);
    buildPreVendorDll().then(()=>{
        preWebpackConfig.entry.javascript.unshift(`webpack-dev-server/client?http://localhost:${port}/`, "webpack/hot/dev-server");
        var webpackCompiler = webpack(preWebpackConfig);
        var server = new webpackDevServer(webpackCompiler, {
            hot: true,
            contentBase: `${path}${appname}/dist`
        });
        server.listen(port);
    })
    console.log(`in webpackBuild: ${appname}`)
    return Promise.resolve("");
},
startWebpackServer=(appname,app,newapp)=>{
    return Promise.resolve("");
},
update=(appname,app)=>{
 return new Promise((res,rej)=>{
     if(directoryExists.sync(`${path}${appname}`)){
        console.log(`App for update : ${appname}`)
     }
     else{
        console.log(`Its new app : ${appname}`)
        setAppConfig(appname,app,true);
        copyTemplate(appname)
        .then(()=>saveResourceToLocation(appname,app,true))
        .then(()=>createVendorBuild(appname,app,true))
        .then(()=>startWebpackServer(appname,app,true))
        .then(()=>{
            setAppStatus(appname,appstatus.READY);
            console.log(`Done: ${appname}`)
            return res("Done")
        })
        .catch((error)=>{
            setAppStatus(appname,appstatus.ERROR,error.message);
            return rej(error)
        })
     }
   
 }) 
}


module.exports={update}