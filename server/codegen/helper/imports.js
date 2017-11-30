let Set = require("immutable").Set;

let componentImports = {
    "customImports": Set([]),
    "coreImports": Set([])
  },
  
  defaultImports = `import React from "react";
  import ReactDom from "react-dom";
  import {BrowserRouter} from 'react-router-dom';
  import globals from 'components/app/globals';
  import DS from 'datastore';
  import PathComponent from "p10-app-base_1_0/src/components/core/pathComponent";
  import ConfigProvider from "p10-app-base_1_0/src/components/core/configprovider";
  import ContextOwner from "p10-app-base_1_0/src/components/core/contextowner";
  import LinkToWrapper from "p10-app-base_1_0/src/components/core/linktowrapper";
  import ContextConsumer from "p10-app-base_1_0/src/components/core/contextconsumer";
  import {navigateTo} from "p10-app-base_1_0/src/actions/navigation";
  import {ReactHistory} from "p10-app-base_1_0/src/components/reacthistory";`
  

module.exports={componentImports,defaultImports};