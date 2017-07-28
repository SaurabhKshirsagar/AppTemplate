let _ = require("lodash");
let R = require("ramda");
let {componentImports,defaultImports}= require("../helper/imports");
let {writeFileInDir}= require("../helper/writefile");
let {createJSX}= require("../helper/createJSX");
let {reactNativeAppTemplate} =require("../helper/template");


class writeNativeApp{
   constructor(root) {
    this.areas=_.isObject(root)?(root.areas?_.keys(root.areas):[]):[];
    this.leftPanel="";
    this.rightPanel="";
    this.renderString = "";
    this.imports=`${defaultImports}
                  import {View,Text} from "react-native";
                  import { List, ListItem, Icon, Button } from "native-base";
                  import Drawer from "react-native-drawer";
                  import { styles, tabStyles } from "components/core/styles";
                  import { MediaQuery } from "react-native-responsive";`;
  }

  collectImportsAndPath(){
    _.map(this.areas,(areaName)=>{
      this.imports=`${this.imports}
                    import ${areaName} from "components/app/areas/${areaName}"`;
      this.leftPanel=`${this.leftPanel}
                      <ListItem style={{ marginLeft: 0, backgroundColor: "rgb(51, 122, 183)" }}
                                onPress={this.navigate.bind(this, "/${areaName}")}>
                                <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
                                ${areaName}
                                </Text>
                        </ListItem>`;
      this.rightPanel=`${this.rightPanel}
                      <PathComponent pathname="/${areaName}" component={${areaName}} {...this.getContexts()} />`;
    })
    return this;
  }

  writeRender(){
         this.renderString=reactNativeAppTemplate(this.leftPanel, this.rightPanel);
         return this;
  }

  createFile(){
    let componentStringToWrite = `${this.imports}
                                  ${this.renderString}`;
   writeFileInDir(`client/js/components/app/index.android.js`,componentStringToWrite);
   
   return this;
  }
}

module.exports={writeNativeApp};