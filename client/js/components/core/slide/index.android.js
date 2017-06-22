import React from 'react';
import MadiaQuery from 'components/core/madiaquery';
import ContextOwner from "components/core/contextowner"
import ContextConsumer from 'components/core/contextconsumer';

class Slide extends ContextOwner {
    render() {       
            return (<MadiaQuery>
             {this.props.children}
            </MadiaQuery>);
    }
}

export default ContextConsumer(Slide)