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

class Area2 extends ContextOwner {
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
          pathname={"/Area2"}
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
            >
              <TextBox
                mapContextToProps={($context, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters.",
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters.",
                      },
                    },
                    style: {
                      height: 225,
                      width: 300,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4,
                      color: "black",
                    },
                    name: "sa",
                    value: "",
                    placeholder: "App1",
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
                onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                {...this.getContexts()}
              /><Button
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
                    text: "Button",
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
export default ContextConsumer(Area2);
