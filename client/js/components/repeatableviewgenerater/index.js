import React, { Component } from "react";
import R from "ramda";
import _ from "lodash";
import ContextOwner from "components/core/contextowner";
import isContainerComponent from "helpers/iscontainercomponent";
import ContextConsumer from "components/core/contextconsumer";
import DS from "datastore";
let repeatableViewGenerater = (
  containerType,
  renderParent,
  renderChild,
  cwrpProcessor,
  getComponentProps = () => ({}),
  renderChildWrapper = (thisRefrence, value, children) => children,
  BaseComponent = Component
) => {
  return class RepeatableView extends BaseComponent {
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
    renderChildren() {
      let items = DS[this.props.datastore];
      debugger;
      let childrens = [];
      items.each((value, key) => {
        let { valueField, keyField, context, params } = this.props;
        context = this.state.context;
        valueField = valueField ? valueField(context, params, value) : value;
        key = keyField ? keyField(context, params, value) : key;
        let child = renderChild(this, valueField, key);

        let selectedItem = this
          ? this.state.context.datastore.itemKey == key
          : false;
        let childContext = { datastore: { item: valueField } };
        // if (selectedItem)
        //   childContext = { datastore: this.state.context.datastore };
        let childWithinWrapper = renderChildWrapper(
          this,
          valueField,
          React.cloneElement(child, {
            context: childContext
          }),
          key
        );
        childrens.push(
          React.cloneElement(childWithinWrapper, {
            key: `${key}-${this.flipKey}`
          })
        );
      });

      return childrens;
    }
    render() {
      let children = [];
      if (this.props.datastore) {
        children = this.renderChildren();
      }
      return renderParent(this, children);
    }
  };
};

export default repeatableViewGenerater;
