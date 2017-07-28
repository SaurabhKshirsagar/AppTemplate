
let _ = require("lodash");
let {WriteGlobals}= require("./writerclass/WriteGlobals");
let {WriteComponent}= require("./writerclass/WriteComponent");
let {WriteApp}= require("./writerclass/WriteApp");
let {writeNativeApp}= require("./writerclass/writeNativeApp");
let {writeDataStores}= require("./writerclass/writeDataStores");
let {writeDataStoreindex}= require("./writerclass/writeDataStoreindex");
let createApp=({appJSON,dataStore})=>{
  try {

    // // createDatastore
    //     _.map(dataStore,(value)=>{
    //     let dataStoreData = new writeDataStores(value);
    //         dataStoreData.writeDsFile()
    //             .createFile();
    //     });
        
    //     let dataStoreindex = new writeDataStoreindex(dataStore);
    //         dataStoreindex.writeDsFile()
    //             .createFile();

    //create $Globals 
       let globalsData = new WriteGlobals(appJSON);
            globalsData.getVariable()
                .writeRender()
                .createFile();

      //create Areas 
      _.map(appJSON.areas,(value,key)=>{
           let data = new WriteComponent(value, key);
            data.writeImports()
                .writeGetContextFunction()
                .writeRender()
                .createFile();
      });

      //create App
       let appData = new WriteApp(appJSON);
            appData.collectImportsAndPath()
                .writeRender()
                .createFile();
      //create native app
      let nativeApp = new writeNativeApp(appJSON);
            nativeApp.collectImportsAndPath()
                .writeRender()
                .createFile();
    

    return true;
  } catch (e) {
     console.log(e);
     return false;
  }
}

module.exports={createApp};