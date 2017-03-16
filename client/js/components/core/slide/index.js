import React from 'react';
import ContextComponent from "components/core/contextcomponent"
import ContextProvider from 'components/core/contextprovider';

class Slide extends ContextComponent {
    render() {       
            return (<div style={this.props.style}>
             {this.props.children}
            </div>);
        
    }
}

export default ContextProvider(Slide)