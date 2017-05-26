import React from 'react';
import MadiaQuery from 'components/core/madiaquery';
import ContextComponent from "components/core/contextcomponent"
import ContextProvider from 'components/core/contextprovider';

class Slide extends ContextComponent {
    render() {       
            return (<MadiaQuery>
             {this.props.children}
            </MadiaQuery>);
    }
}

export default ContextProvider(Slide)