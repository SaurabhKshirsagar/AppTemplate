import React from 'react';
import ContextProvider from 'components/core/contextprovider';
import ContextComponent from "components/core/contextcomponent";



class Area extends ContextComponent {
    render() {
   
            return (<div style={{height: "92vh", width:"85%",margin:'5px',display:"flex"}}>
                            {this.props.children}
                     </div>);
       
    }
}

export default ContextProvider(Area)