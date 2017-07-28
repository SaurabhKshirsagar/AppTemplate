let Set = require("immutable").Set;

let componentImports = {
    "customImports": Set([]),
    "coreImports": Set([])
  },
  
  defaultImports = `import React from "react";
  import ReactDom from "react-dom";
  import PathComponent from "components/core/pathComponent";
  import ContextOwner from "components/core/contextowner";
  import LinkToWrapper from "components/core/linktowrapper";
  import ContextConsumer from "components/core/contextconsumer";

  import $globals from "components/app/globals";
  import {navigateTo} from "actions/navigation";`;

module.exports={componentImports,defaultImports};