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
import { View, Text } from "react-native";
import { List, ListItem, Icon, Button } from "native-base";
import Drawer from "react-native-drawer";
import { styles, tabStyles } from "components/core/styles";
import { MediaQuery } from "react-native-responsive";
import MyVacation from "components/app/areas/MyVacation";
import goals from "components/app/areas/goals";
class App extends ContextOwner {
  openDrawer() {
    this._drawer.open();
  }
  navigate(path) {
    navigateTo(path);
  }
  render() {
    let menus = (
      <List>

        <ListItem
          style={{ marginLeft: 0, backgroundColor: "rgb(51, 122, 183)" }}
          onPress={this.navigate.bind(this, "/MyVacation")}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
            MyVacation
          </Text>
        </ListItem>
        <ListItem
          style={{ marginLeft: 0, backgroundColor: "rgb(51, 122, 183)" }}
          onPress={this.navigate.bind(this, "/goals")}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
            goals
          </Text>
        </ListItem>
      </List>
    );

    return (
      <View>
        <MediaQuery minDeviceWidth={700} maxDeviceWidth={1300}>
          <View>
            <View style={styles.header}>
              <List>
                <ListItem>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    p10
                  </Text>
                </ListItem>
              </List>
            </View>
            <View style={tabStyles.body}>
              <View style={tabStyles.menu}>
                {menus}
              </View>

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
            </View>
          </View>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={400}>
          <View style={styles.body}>
            <Drawer
              type="overlay"
              ref={ref => {
                this._drawer = ref;
              }}
              tapToClose={true}
              openDrawerOffset={0.5}
              panCloseMask={0.5}
              closedDrawerOffset={-3}
              side="left"
              styles={{
                drawer: {
                  backgroundColor: "rgb(51, 122, 183)",
                  shadowColor: "#000000",
                  shadowOpacity: 0.8,
                  shadowRadius: 3,
                },
                main: { backgroundColor: "transparent" },
                mainOverlay: { backgroundColor: "transparent" },
              }}
              content={menus}
            >
              <View>
                <View style={styles.header}>
                  <List>
                    <ListItem>
                      <Button
                        transparent
                        iconRight
                        onPress={this.openDrawer.bind(this)}
                      >
                        <Icon name="ios-menu" />
                      </Button>

                    </ListItem>
                  </List>
                </View>
                <View style={styles.body}>

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
                </View>
              </View>

            </Drawer>
          </View>
        </MediaQuery>

      </View>
    );
  }
}

export default ContextConsumer(App);
