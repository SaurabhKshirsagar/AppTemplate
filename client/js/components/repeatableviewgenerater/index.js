import React, { Component } from 'react';
import R from 'ramda';
import _ from 'lodash';
import isContainerComponent from "helpers/iscontainercomponent";
import ContextProvider from 'components/core/contextprovider';

let repeatableViewGenerater = (containerType, renderParent, renderChild, cwrpProcessor, getComponentProps = ()=>({}), renderChildWrapper = (thisRefrence, value, children) => children) => {
    return class RepeatableView extends Component {
        constructor(props) {
            super(props);
            this.flipKey = 0;
            this.constructor.displayName = containerType;
            if (!isContainerComponent(containerType)) {
                throw `${containerType} type not  mentioned in isContainerComponent.js, please register it`;
            }
        }
        componentDidMount() {
            super.componentDidMount();
            if (cwrpProcessor) {
               cwrpProcessor(this, this.props);
            }
        }
        renderChildren(dataSource) {
            let items = dataSource;
            return _.map(items,(value, key, ds)=>{
                let {valueField,keyField,context,params}=this.props;
                valueField=valueField?valueField(context,params,value):value;
                key=keyField?keyField(context,params,value):key;
                let child = renderChild(this, valueField, key, ds); 
                let childWithinWrapper =  renderChildWrapper(this, valueField, React.cloneElement(child, {
                    "params":{
                        "itemKey":key,
                        "valueField":valueField,
                        "item":ds[key],
                        "items":ds
                    },
                    context,
                }),key,ds);
                return React.cloneElement(childWithinWrapper,{key:`${key}-${this.flipKey}`});
            });
        }
        render() {
            let children = [];
            if (this.props.items) {
                children = this.renderChildren(this.props.items);
            }
            return renderParent(this, children);
        }
    }
}

export default repeatableViewGenerater;
