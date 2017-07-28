import React from "react";
import ReactDom from "react-dom";
import PathComponent from "components/core/pathComponent";
import ContextOwner from "components/core/contextowner";
import LinkToWrapper from "components/core/linktowrapper";
import ContextConsumer from "components/core/contextconsumer";

import $globals from "components/app/globals";
import { navigateTo } from "actions/navigation";
import { Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import MyVacation from "components/app/areas/MyVacation";
class App extends ContextOwner {
  render() {
    return (
      <div>
        <div
          style={{
            height: "8vh",
            width: "100%",
            backgroundColor: "#2196f3",
            color: "white",
            fontSize: "xx-large",
          }}
        >
          p10
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{ height: "92vh", width: "15%", backgroundColor: "#337ab7" }}
          >

            <LinkToWrapper to="/MyVacation">
              <Button className="btn btn-primary" style={{ width: "100%" }}>
                MyVacation
              </Button>
            </LinkToWrapper>
          </div>
          <div style={{ height: "92vh", width: "85%", display: "flex" }}>

            <PathComponent
              pathname="/MyVacation"
              component={MyVacation}
              {...this.getContexts()}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ContextConsumer(App);
