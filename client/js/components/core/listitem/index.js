import React from "react";
import ReactDom from "react-dom";
import PathComponent from "components/core/pathComponent";
import ContextComponent from "components/core/contextcomponent";
import LinkToWrapper from "components/core/linktowrapper";
import ContextProvider from "components/core/contextprovider";

import $globals from "components/app/globals";
import { navigateTo } from "actions/navigation";

class ListItem extends ContextComponent {
  getContextVars() {
    let {...context} =this.props.context
    return {context}
  }
  getParams(){
    let {...params} =this.props.params
    return {params}
  }
  render() {
    return (
     <div>
        {
            React.Children.map(this.props.children,
                                 (clild)=>{ 
                                 return  React.cloneElement(clild, {context:this.props.context,params:this.props.params})
                                 })
        }
     </div>
    );
  }
}

export default ContextProvider(ListItem)
