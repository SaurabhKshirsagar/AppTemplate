import React from 'react';
import repeatableViewGenerater from "components/repeatableviewgenerater";
import ContextComponent from "components/core/contextcomponent";
import ContextProvider from 'components/core/contextprovider';
import DS from "datastore";

class ListComp extends ContextComponent {
  getContextVars() {
    let { ...context } = this.props.context;
    let { datastore, itemkey } = this.props;
    datastore = DS[datastore];
    return { datastore, dsKey:datastore.itemKey};
  }
  
}


class Selector extends React.Component{
                render(){
                    return <div onClick={()=>{this.props.onClick()}}

                                  {...this.props} >{this.props.children} </div>        
                }
}


let SelectorComp= ContextProvider(Selector);


let renderList = (thisReference, listItems) => {
    return (
        <div style={thisReference.props.style}>
            {listItems}
        </div>
    );
},
click = function(thisReference,key, item,ds) {
    thisReference.state.context.datastore.setSelected(key)
    thisReference.props.onSelectionChanged(key,item,ds)
},
renderChildItem = (thisReference, item, key, ds) => {
        let clild = thisReference.props.children;
       // let context={datastore:{item}}
        return   clild            
},
renderChildWrapper = (thisReference, item,element, key, ds) => {
    let selectedItem=thisReference?(thisReference.state.context.datastore.itemKey==key):false;
    return (
        <div style={{padding:"2px",backgroundColor: (selectedItem?"#b2dbfb":null)}} onClick={click.bind(null, thisReference,key, item,ds)}>
                    {element}
        </div>
    );
};


let List=repeatableViewGenerater("List", renderList, renderChildItem, null, null, renderChildWrapper,ListComp);

export default ContextProvider(List);

