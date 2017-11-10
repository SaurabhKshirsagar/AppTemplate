let _ = require("lodash");
let R = require("ramda");
let {componentImports,defaultImports}= require("../helper/imports");
let {writeFileInDir}= require("../helper/writefile");
let {createJSX}= require("../helper/createJSX");
let {reactGlobalsTemplate,reactAppTemplate,reactDefaultTemplate} =require("../helper/template");


class WriteApp{
   constructor(root) {
    this.areas=_.isObject(root)?(root.areas?_.keys(root.areas):[]):[];
    this.leftPanel="";
    this.rightPanel="";
    this.renderString = "";
    this.imports=`${defaultImports}
                  import {Button,FormGroup,ControlLabel,FormControl} from 'react-bootstrap';`;
  }

  collectImportsAndPath(){
    _.map(this.areas,(areaName)=>{
      this.imports=`${this.imports}
                    import ${areaName} from "components/app/areas/${areaName}"`;
      this.leftPanel=`${this.leftPanel}
                      <LinkToWrapper to= "/${areaName}">
                            <Button className="btn btn-primary"  style={{width:"100%"}}>${areaName}</Button>
                      </LinkToWrapper>`;
      this.rightPanel=`${this.rightPanel}
                      <PathComponent pathname="/${areaName}" component={${areaName}} {...this.getContexts()} />`;
    })
    return this;
  }

  writeRender(){
         this.renderString=reactAppTemplate(this.leftPanel, this.rightPanel);
         return this;
  }

  createFile(){
    let componentStringToWrite = `${this.imports}
                                  ${this.renderString}`;
   writeFileInDir(`client/js/components/app/index.js`,componentStringToWrite);
   
   return this;
  }
}

module.exports={WriteApp};