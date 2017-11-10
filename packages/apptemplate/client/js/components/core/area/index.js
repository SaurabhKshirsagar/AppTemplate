import React from 'react';
import ContextConsumer from 'components/core/contextconsumer';
import ContextOwner from "components/core/contextowner";



class Area extends ContextOwner {
    render() {
   
            return (<div style={{height: "92vh", width:"85%",margin:'5px',display:"flex"}}>
                            {this.props.children}
                     </div>);
       
    }
}

export default ContextConsumer(Area)