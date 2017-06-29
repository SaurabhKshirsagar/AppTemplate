import React from 'react';
import repeatableViewGenerater from "components/repeatableviewgenerater";
import ContextOwner from "components/core/contextowner";
import ContextConsumer from 'components/core/contextconsumer';
import DS from "datastore";
import { autorun } from "mobx";
class ListComp extends ContextOwner {
  getContextVars() {
    let { ...context } = this.props.context;
    let { datastore, itemkey } = this.props;
    datastore = DS[datastore];
    this.observerFn.bind(this);
    return { datastore,dsKey:datastore.itemKey};
  }
        componentDidMount() {
        this.disposer = autorun(() => {
          this.observerFn();
        });
      }
      componentWillUnmount() {
        this.disposer();
      }
      observerFn() {
        let context= { datastore:this.state.context.datastore,dsKey:this.state.context.datastore.itemKey};
        this.setState({context});
      }
  
}

let renderList = (thisReference, listItems) => {
    return (
        <div style={thisReference.props.style}>
            {listItems}
        </div>
    );
},
click = function(thisReference,key, item,ds) {
    //thisReference.setState({key})
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

export default ContextConsumer(List);

