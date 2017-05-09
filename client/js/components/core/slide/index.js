import React from 'react';
import ContextComponent from "components/core/contextcomponent"
import ContextProvider from 'components/core/contextprovider';

class Slide extends ContextComponent {
    render() {       
            return (<div style={{width: "300px",margin: "5px 0px 5px 5px",padding:"10px",backgroundColor: "#e3e3e3"}}>
             {this.props.children}
            </div>);
    }
}

export default ContextProvider(Slide)