import React from 'react';
import ContextOwner from "components/core/contextowner"
import ContextConsumer from 'components/core/contextconsumer';

class Slide extends ContextOwner {
    render() {       
            return (<div style={{width: "300px",margin: "5px 0px 5px 5px",padding:"10px",backgroundColor: "#e3e3e3"}}>
             {this.props.children}
            </div>);
    }
}

export default ContextConsumer(Slide)