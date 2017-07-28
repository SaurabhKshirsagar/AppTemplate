let _ = require("lodash");
let R = require("ramda");
let {componentImports,defaultImports}= require("../helper/imports");
let {writeFileInDir}= require("../helper/writefile");
let {createJSX}= require("../helper/createJSX");
let {reactGlobalsTemplate,reactAppTemplate,reactDefaultTemplate} =require("../helper/template");


class WriteComponent {
  constructor(root, name) {
    this.root = root;
    this.funContextVarsString="";
    this.collectImports = this
      .collectImports
      .bind(this);
    this.renderString = "";
    this.componentName = name;
    componentImports.coreImports = componentImports
      .coreImports
      .add(root.type);
  }

  writeImports(overrideJson = null) {
    let children=[];
    if (!overrideJson) 
      overrideJson = this.root;
    if(overrideJson.type=='Area')
     children = overrideJson.slides
      ? overrideJson.slides
      : [];
    else
     children = overrideJson.props
      ? (overrideJson.props.children
        ? overrideJson.props.children
        : [])
      : [];
  
    this.multiValue(children)
      
    return this;
  }

  writeRender(overrideJson = null) {
    if (!overrideJson) 
      overrideJson = this.root;
    let renderString = createJSX(overrideJson);
    this.renderString = renderString;
    return this;
  }

  writeGetContextFunction(overrideJson = null) {
     if (!overrideJson) 
      overrideJson = this.root;
      if(!overrideJson.vars){
        this.funContextVarsString="";
         return this;
      }
      
       let variableString= _.reduce(overrideJson.vars, (prev, value, key) => {
        if(value.type=="Object")
            return `${prev} ${key}:${JSON.stringify(value.value?value.value:value.defaultValue)},`
        if(value.type=="String")
             return `${prev} ${key}:"${value.value?value.value:value.defaultValue}",`
        return `${prev} ${key}:${value.value?value.value:value.defaultValue},`
        }
       ,"");

       this.funContextVarsString=`getContextVars() {
        return {
            ${variableString}
            }
        }`;
      return this;
      
  }

  createFile() {
    let coreImports = componentImports
      .coreImports
      .reduce((prev, value, key) => {
        if(key!=null && key!="undefined"){
          let componetName=key.toLowerCase();
          return `${prev} \r\nimport ${key} from "components/core/${componetName}"`
        }
        return `${prev}`
      }, "");
    let customImports = componentImports
      .customImports
      .reduce((prev, value, key) => {
        if(key!=null && key!="undefined")
         {
          let componetName=key.toLowerCase();
          return `${prev} \r\nimport ${key} from "components/core/${componetName}"`
        }
        return `${prev}`
      }, "");
    let componentStringToWrite = `${defaultImports}
                                  ${coreImports}
                                  ${customImports}
                                  ${reactDefaultTemplate(this.componentName, this.renderString, this.funContextVarsString)}`;                    
    writeFileInDir(`client/js/components/app/areas/${this.componentName}.js`,componentStringToWrite);
    return this;
  }

  collectImports(jsonTree) {
    let ref = jsonTree.props
      ? (jsonTree.props.ref
        ? jsonTree.props.ref
        : null)
      : null;
    if (ref) {
      let dependencyName = _
        .replace(ref, "Views/", "")
        .trim();
      componentImports.customImports = componentImports
        .customImports
        .add(dependencyName);
    } else {
      let type = jsonTree.type;
        componentImports.coreImports = componentImports
          .coreImports
          .add(type);
    }
    if (jsonTree.props.hasOwnProperty("children")) {
      this.writeImports(jsonTree);
    }
    return this;
  }

  multiValue(children) {
    _.map(children,(child,key)=>{this.collectImports(child)})
    return this;
  }
}
module.exports={WriteComponent};