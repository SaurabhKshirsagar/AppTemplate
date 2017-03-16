import React from "react";
import ReactDom from "react-dom";
class App extends ContextComponent {
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
export default ContextProvider(App)
