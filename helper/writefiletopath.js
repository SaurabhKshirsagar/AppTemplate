let fs = require('fs'),
path = require('path'),
Promise = require('bluebird');

let writeFileToPath=function(filePath,contents){
 new Promise((res,rej)=>{
      fs.writeFile(filePath, contents, function (err) {
      if (err) {
         console.log(err);
         rej(err)
      }
      console.log(`File Saved at path ${filePath}`);
      res("ok")
    });
 })
 
}

module.exports={writeFileToPath};