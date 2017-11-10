import React from "react";
import ReactDOM from 'react-dom';
let router=null;
let getRouter=function(){
    return router;
}

 class ReactHistory extends React.Component {
      constructor (props,context) {
        super(props);
      }
      componentWillMount(){
        router=this.context.router;
    
      }
    render() {
        return React.Children.only(this.props.children);
    }
}


ReactHistory.contextTypes = {
    router:React.PropTypes.object.isRequired
};

module.exports={getRouter,ReactHistory}