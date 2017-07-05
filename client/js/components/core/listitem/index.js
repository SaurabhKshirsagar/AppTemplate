import React from "react";
import ReactDom from "react-dom";
import PathComponent from "components/core/pathComponent";
import ContextOwner from "components/core/contextowner";
import LinkToWrapper from "components/core/linktowrapper";
import ContextConsumer from "components/core/contextconsumer";

import $globals from "components/app/globals";
import { navigateTo } from "actions/navigation";

class ListItem extends React.Component {
  render() {
    return (
      <div {...this.props}>
        {React.Children.map(this.props.children, clild => {
          return React.cloneElement(clild, { context: this.props.context });
        })}
      </div>
    );
  }
}

export default ContextConsumer(ListItem);
