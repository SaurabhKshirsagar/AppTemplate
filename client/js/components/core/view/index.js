import React,{Component} from 'react';
import _ from 'lodash';

class View extends Component{
                render(){
                return <div>{this.props.children}</div>         
                }
}
View.defaultProps = {
                "value" : ""             
}
export default View;
