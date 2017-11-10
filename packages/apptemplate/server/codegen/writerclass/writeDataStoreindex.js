let _ = require("lodash");
let R = require("ramda");
let {writeFileInDir}= require("../helper/writefile");



class writeDataStoreindex{
    constructor(value) {
        this.data=value;
    }
    writeDsFile(){

     this.imports = _.reduce(this.data, (prev, {key}) => {
                return `${prev}
                        import ${key} from 'datastore/${key}' `
            },"");
   let keys = _.reduce(this.data, (prev, {key}) => {
                return `${prev}
                        ${key},`
            },"");
    this.exports=`module.exports={${keys}}`
    this.fileString=`${this.imports}
                      ${this.exports}`;
 return this;
    }
    createFile(){
        writeFileInDir(`client/js/datastore/index.js`,this.fileString);
        return this;
    }
}
module.exports={writeDataStoreindex};