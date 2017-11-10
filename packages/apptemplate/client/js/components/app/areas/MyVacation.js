import React from "react";
import ReactDom from "react-dom";
import PathComponent from "components/core/pathComponent";
import ContextOwner from "components/core/contextowner";
import LinkToWrapper from "components/core/linktowrapper";
import ContextConsumer from "components/core/contextconsumer";

import $globals from "components/app/globals";
import { navigateTo } from "actions/navigation";

import Area from "components/core/area";
import Slide from "components/core/slide";
import TextBox from "components/core/textbox";
import Button from "components/core/button";

class MyVacation extends ContextOwner {
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
          pathname={"/MyVacation"}
          component={() => (
            <Slide
              mapContextToProps={($context, $params) => {
                return {
                  id: "Vacations",
                  title: "Vacations",
                  parentSlide: "",
                };
              }}
              {...this.getContexts()}
            >
            <Button
                mapContextToProps={($context, $params) => {
                  return {
                    style: {
                      backgroundColor: "#337ab7",
                      color: "black",
                      height: 40,
                      width: 260,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4,
                    },
                    name: "Button",
                    text: "slide",
                  };
                }}
                onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                {...this.getContexts()}
              />
            </Slide>
          )}
          {...this.getContexts()}
        />
        <PathComponent
          pathname={"/"}
          component={() => (
            <Slide
              mapContextToProps={($context, $params) => {
                return {
                  id: "Vacations",
                  title: "Vacations",
                  parentSlide: "",
                };
              }}
              {...this.getContexts()}
            >
              <Button
                mapContextToProps={($context, $params) => {
                  return {
                    style: {
                      backgroundColor: "#337ab7",
                      color: "black",
                      height: 40,
                      width: 260,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4,
                    },
                    name: "Button",
                    text: "/",
                  };
                }}
                onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                {...this.getContexts()}
              />
            </Slide>
          )}
          {...this.getContexts()}
        />

      
      </Area>
    );
  }
}
export default ContextConsumer(MyVacation);
