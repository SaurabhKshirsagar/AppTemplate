import React from 'react';
import repeatableViewGenerater from "components/repeatableviewgenerater";
import ContextComponent from "components/core/contextcomponent";
import ContextProvider from 'components/core/contextprovider';
import DS from "datastore";

let renderList = (thisReference, listItems) => {
    return (
        <div style={thisReference.props.style}>
            {listItems}
        </div>
    );
},
click = function(thisReference,key, item,ds) {
    thisReference.state.context.datastore.reload(key)
    thisReference.props.onSelectionChanged(key,item,ds)
},
renderChildItem = (thisReference, item, key, ds) => {
        let clild = React.Children.only(thisReference.props.children);
        let context={datastore:{item}}
        return   React.cloneElement(clild,{context})               
},
renderChildWrapper = (thisReference, item,element, key, ds) => {
    let selectedItem=thisReference?(thisReference.state.context.datastore.itemKey==key):false;
    return (
        <div style={{padding:"2px",backgroundColor: (selectedItem?"#b2dbfb":null)}} onClick={click.bind(null, thisReference,key, item,ds)}>
                    {element}
        </div>
    );
};


let List=repeatableViewGenerater("List", renderList, renderChildItem, null, null, renderChildWrapper,ContextComponent);

export default ContextProvider(List);

