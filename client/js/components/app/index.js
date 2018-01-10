import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import globals from "components/app/globals";
import DS from "datastore";
import PathComponent from "p10-app-base_1_0/src/components/core/pathComponent";
import ConfigProvider
  from "p10-app-base_1_0/src/components/core/configprovider";
import ContextOwner from "p10-app-base_1_0/src/components/core/contextowner";
import LinkToWrapper from "p10-app-base_1_0/src/components/core/linktowrapper";
import ContextConsumer
  from "p10-app-base_1_0/src/components/core/contextconsumer";
import { navigateTo } from "p10-app-base_1_0/src/actions/navigation";
import { ReactHistory } from "p10-app-base_1_0/src/components/reacthistory";
import { Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import MyVacation from "components/app/areas/MyVacation";
import goals from "components/app/areas/goals";
class App extends ContextOwner {
  render() {
    return (
      <BrowserRouter basename={PRODUCTION ? PROD_BASENAME : DEV_BASENAME}>
        <ReactHistory>
          <ConfigProvider globals={globals} DS={DS}>
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
                  style={{
                    height: "92vh",
                    width: "15%",
                    backgroundColor: "#337ab7",
                  }}
                >

                  <LinkToWrapper to="/MyVacation">
                    <Button
                      className="btn btn-primary"
                      style={{ width: "100%" }}
                    >
                      MyVacation
                    </Button>
                  </LinkToWrapper>
                  <LinkToWrapper to="/goals">
                    <Button
                      className="btn btn-primary"
                      style={{ width: "100%" }}
                    >
                      goals
                    </Button>
                  </LinkToWrapper>
                </div>
                <div style={{ height: "92vh", width: "85%", display: "flex" }}>

                  <PathComponent
                    pathname="/MyVacation"
                    component={MyVacation}
                    {...this.getContexts()}
                  />
                  <PathComponent
                    pathname="/goals"
                    component={goals}
                    {...this.getContexts()}
                  />
                </div>
              </div>
            </div>
          </ConfigProvider>
        </ReactHistory>
      </BrowserRouter>
    );
  }
}
export default ContextConsumer(App);
