let {
    getAppConfig,
    setAppStatus,
    setAppConfig,
    getAppConfigByName
  } = require("./appsconfig.js"),
  proxy = require("http-proxy-middleware"),
  _ = require("lodash"),
  { appstatus } = require("./constant.js"),
  axios = require("axios"),
  url = require('url');

let path = `${process.cwd()}\\packages\\`,
  template = {
    build: `<html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <base href="/">   
                </head>
                <body>
                    <div id="app">in build</div>
                </body>
            </html>`,
    error: `<html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <base href="/">   
                </head>
                <body>
                    <div id="app">ERROR</div>
                </body>
            </html>`,
    notFound: `<html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <base href="/">   
                    </head>
                    <body>
                        <div id="app">app not found</div>
                    </body>
                </html>`
  };

let proxies={

}

let getProxyInstance = (appname,wdsurl) => {
  if(!proxies[appname]){
     proxies[appname]=createProxy(appname,wdsurl);
  }
 return Promise.resolve(proxies[appname])
};
//pathRewrite:{[`^/app/${appname}/preview`]:"/"}
let createProxy = (appname,target, options) => Promise.resolve(proxy(`/apps/${appname}/preview`, {target,logLevel:"debug",pathRewrite:pathResolver}));
let pathResolver=(path, req)=>{
  url
  console.log(path)
  let arr=path.split("/"),
  sliceArray=_.slice(arr, [start=4], [end=arr.length]),
  appPath=_.join(sliceArray, [separator='/'])

  return `/${appPath||''}`
}
preview = (appname, req, res, next) => {
  let { port, message, status } = getAppConfigByName(appname) || {};

  switch (status) {
    case `${appstatus.READY}`:
      getProxyInstance(appname,`http://localhost:${port}`)
        .then(proxy => {
          return  proxy(req, res, next)})
        .catch(e => {
          res.status(401).send(e.message)});
      break;
    case `${appstatus.BUILDING}`:
      res.send(template.build);
      break;
    case `${appstatus.ERROR}`:
      res.send(template.error);
      break;
    default:
      res.send(template.notFound);
      break;
  }
};

module.exports = { preview };
