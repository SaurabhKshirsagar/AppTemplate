import React from 'react';
import ContextProvider from 'components/core/contextprovider';
import ContextComponent from "components/core/contextcomponent";
import MadiaQuery from 'components/core/madiaquery';


class Area extends ContextComponent {
    render() {
   
            return (<MadiaQuery master={true}>
             {this.props.children}
            </MadiaQuery>);
       
    }
}

export default ContextProvider(Area)