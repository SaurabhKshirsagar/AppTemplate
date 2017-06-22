import React from 'react';
import ContextConsumer from 'components/core/contextconsumer';
import ContextOwner from "components/core/contextowner";
import MadiaQuery from 'components/core/madiaquery';


class Area extends ContextOwner {
    render() {
   
            return (<MadiaQuery master={true}>
             {this.props.children}
            </MadiaQuery>);
       
    }
}

export default ContextConsumer(Area)