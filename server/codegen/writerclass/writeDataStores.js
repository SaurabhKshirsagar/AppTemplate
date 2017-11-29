let _ = require("lodash");
let R = require("ramda");
let {writeFileInDir}= require("../helper/writefile");
let {dataStoreTemplate} =require("../helper/template");


class writeDataStores{
    constructor({key,value:{value,schema}}) {
        this.filename=key;
        this.autoSave=schema.auto;
        this.properties=_.isObject(schema.properties)?JSON.stringify(schema.properties):null;
        this.events= _.reduce(schema.events, (prev, value, key) => {
                        return `${prev} ${key}:${value},`
                    },"")
        this.data=_.isObject(value)?JSON.stringify(value):[]
        this.import = `import {DS} from "p10-app-base_1_0/src/helpers/datastore"
                      import adapter from "p10-app-base_1_0/src/helpers/adaptor/modeladaptor";`;
        

    }
    writeDsFile(){
            this.fileString=`${this.import}
                             let schema={
                                 auto:${this.autoSave},
                                 properties:${this.properties},
                                 events:{${this.events}}
                             }
                             ${dataStoreTemplate(this.data,this.filename)}`
            return this;
    }
    createFile(){
        writeFileInDir(`client/js/datastore/${this.filename}.js`,this.fileString);
        return this;
    }
}
module.exports={writeDataStores};