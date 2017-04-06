import React from 'react';
import repeatableViewGenerater from "components/repeatableviewgenerater";
import ContextProvider from 'components/core/contextprovider';

let renderList = (thisReference, listItems) => {
    return (
        <div style={thisReference.props.style}>
            {listItems}
        </div>
    );
},
click = function(thisReference,key, item,ds) {
    thisReference.props.onSelectionChanged(key,item,ds)
},
renderChildItem = (thisReference, valueField, key, ds) => {
        let clild = React.Children.only(thisReference.props.children);
        return   React.cloneElement(clild, {context:thisReference.props.context,params:{
                        "itemKey":key,
                        "valueField":valueField,
                        "item":ds[key],
                        "items":ds
                    }})               
},
renderChildWrapper = (thisReference, item,element, key, ds) => {
    let selectedItem=thisReference.props?(thisReference.props.value==item):false;
    return (
        <div style={{padding:"2px",backgroundColor: (selectedItem?"rgba(51, 51, 51, 0.08)":null)}} onClick={click.bind(null, thisReference,key, item,ds)}>
                    {element}
        </div>
    );
};


let List=repeatableViewGenerater("List", renderList, renderChildItem, null, null, renderChildWrapper);

export default ContextProvider(List);

