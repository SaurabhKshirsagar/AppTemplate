import React from "react";
import ReactDom from "react-dom";
import PathComponent from "components/core/pathComponent";
import ContextOwner from "components/core/contextowner";
import LinkToWrapper from "components/core/linktowrapper";
import ContextConsumer from "components/core/contextconsumer";

import $globals from "components/app/globals";
import { navigateTo } from "actions/navigation";

import { BrowserRouter } from "react-router-dom";
import { ReactHistory } from "components/reacthistory";

import Area from "components/core/area";
import Slide from "components/core/slide";
import Button from "components/core/button";
import TextBox from "components/core/textbox";

class Area3 extends ContextOwner {
  getContextVars() {
    return {};
  }
  render() {
    return (
      <Area
        mapContextToProps={($context, $params) => {
          return {};
        }}
        {...this.getContexts()}
      >

        <PathComponent
          pathname={"/Area3"}
          component={() => (
            <Slide
              mapContextToProps={($context, $params) => {
                return {
                  id: "New_Vacation",
                  title: "New_Vacation",
                  parentSlide: "",
                };
              }}
              {...this.getContexts()}
            />
          )}
          {...this.getContexts()}
        />
      </Area>
    );
  }
}
export default ContextConsumer(Area3);
