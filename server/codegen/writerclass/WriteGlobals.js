let _ = require("lodash");
let R = require("ramda");
let {componentImports,defaultImports}= require("../helper/imports");
let {writeFileInDir}= require("../helper/writefile");
let {createJSX}= require("../helper/createJSX");
let {reactGlobalsTemplate,reactAppTemplate,reactDefaultTemplate} =require("../helper/template");


class WriteGlobals{
    constructor(root) {
        this.vars=_.isObject(root)?(root.vars?root.vars:null):null;
        this.variableString = "";
        this.fileString="";

    }
    getVariable(){
        this.variableString= _.reduce(this.vars, (prev, value, key) => {
            if(value.type=="Object")
                return `${prev} ${key}:${JSON.stringify(value.value?value.value:value.defaultValue)},`
            if(value.type=="string")
                return `${prev} ${key}:"${value.value?value.value:value.defaultValue}",`
            return `${prev} ${key}:${value.value?value.value:value.defaultValue},`
            }
        ,"");
        return this;
    }
    writeRender(){
            this.fileString=reactGlobalsTemplate(this.variableString);
            return this;
    }
    createFile(){
        writeFileInDir(`client/js/components/app/globals/index.js`,this.fileString);
        return this;
    }
}
module.exports={WriteGlobals};