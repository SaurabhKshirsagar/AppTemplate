import React from "react";
import ReactDom from "react-dom";
import PathComponent from "components/core/pathComponent";
import ContextComponent from "components/core/contextcomponent";
import LinkToWrapper from "components/core/linktowrapper";
import ContextProvider from "components/core/contextprovider";
import $globals from "components/app/globals";
import { navigateTo } from "actions/navigation";
import DS from "datastore";
import {extendObservable, observable} from 'mobx';

import Slide from "components/core/Slide";
import TextBox from "components/core/TextBox";
import Button from "components/core/Button";
import List from "components/core/List";
import ListItem from "components/core/listitem"; 

class Form extends ContextComponent {
  getContextVars() {
    let {...context} =this.props.context;
    let {datastore,itemkey}=this.props;
    datastore=DS[datastore];
    return {datastore}
  }
  getParams(){
    let {...params} =this.state.context
    return {...params}
  }
  render() {
    return (
     <div>
        {
            React.Children.map(this.props.children,
                                 (clild)=>{ 
                                 return  React.cloneElement(clild, {context:this.props.context,params:this.props.params,  ...this.getContexts()})
                                 })
        }
             
     </div>
    );
  }
}

export default ContextProvider(Form)



