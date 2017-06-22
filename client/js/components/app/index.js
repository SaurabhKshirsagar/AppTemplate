import React from "react";
import ReactDom from "react-dom";
import PathComponent from "components/core/pathComponent";
import ContextOwner from "components/core/contextowner";
import LinkToWrapper from "components/core/linktowrapper";
import ContextConsumer from "components/core/contextconsumer";
class App extends ContextOwner {
  render() {
    return (
      <div>
        <div style={
          {
            height: "8vh",
            width: "100%",
            backgroundColor: "#2196f3",
            color: "white",
            fontSize: "xx-large"
          }
        }>
          p10
        </div>
        <div style={{ display: "flex" }}>
           Please design app by adding Area slides.
        </div>
      </div>
    );
  }
}
export default ContextConsumer(App)
