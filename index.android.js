import React, { Component } from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { ReactHistory } from "components/reacthistory";
import {
  AppRegistry,
  View,
  Text,
  Alert,
  BackAndroid,
  Image,
  AppState,
  ToastAndroid
} from "react-native";
import App from 'components/app'
console.disableYellowBox = true;
class Root extends React.Component {
  render() {
    return (
      <Router>
        <ReactHistory>
          <View style={{ flex: 1 }}>
           <App/>
          </View>
        </ReactHistory>
      </Router>
    );
  }
}

AppRegistry.registerComponent("Screens", () => Root);
