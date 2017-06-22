import React from "react";
import ReactDom from "react-dom";
import PathComponent from "components/core/pathComponent";
import ContextOwner from "components/core/contextowner";
import LinkToWrapper from "components/core/linktowrapper";
import ContextConsumer from "components/core/contextconsumer";
import $globals from "components/app/globals";
import { navigateTo } from "actions/navigation";
import DS from "datastore";
import { extendObservable, observable } from "mobx";

import Slide from "components/core/slide";
import TextBox from "components/core/textbox";
import Button from "components/core/button";
import List from "components/core/list";
import ListItem from "components/core/listitem";

class Form extends ContextOwner {
  getContextVars() {
    let { ...context } = this.props.context;
    let { datastore, itemkey } = this.props;
    window.DS=DS
    datastore = DS[datastore];
    return { datastore };
  }
  getParams() {
    let { ...params } = this.state.context;
    return { ...params };
  }
  render() {
    return (
      <div>
        {React.Children.map(this.props.children, clild => {
          return React.cloneElement(clild, {
            context: this.props.context,
            params: this.props.params,
            ...this.getContexts()
          });
        })}

      </div>
    );
  }
}

export default ContextConsumer(Form);
