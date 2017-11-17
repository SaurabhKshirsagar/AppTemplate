let {getAppConfig,setAppStatus,setAppConfig, getAppConfigByName} = require("./appsconfig.js"),
_ = require("lodash"),
{appstatus}=require("./constant.js"),
axios=require('axios');

let path=`${process.cwd()}\\packages\\`,

preview=(appname,req,res)=>{
    let {port,message,status}= getAppConfigByName(appname) || {};

    switch(status){
        case `${appstatus.READY}` :
            axios.get(`http://localhost:${port}`)
            .then((data)=>{
                res.status(200).send(data.data)
            })
            .catch((e)=>res.status(401).send(e.message))
        break
        case `${appstatus.BUILDING}` :
            res.send(`<html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <base href="/">   
                        </head>
                        <body>
                            <div id="app">in build</div>
                        </body>
                        </html>`)
        break
        case `${appstatus.ERROR}` :
        res.send(`<html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <base href="/">   
                        </head>
                        <body>
                            <div id="app">ERROR</div>
                        </body>
                        </html>`)
        break
        default :
        res.send(`<html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <base href="/">   
                        </head>
                        <body>
                            <div id="app">app not found</div>
                        </body>
                        </html>`)
        break
    }  
    
}


module.exports={preview}