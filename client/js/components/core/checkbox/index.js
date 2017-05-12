import React,{PureComponent} from 'react';
import {Checkbox} from 'react-bootstrap';
import ContextProvider from 'components/core/contextprovider';




class CheckboxComp extends PureComponent{


                render(){
                    //let {params} = this.props,
                    return <Checkbox onClick={()=>{this.props.onClick()}}
                                onChange={this.props.onContextChange} 
                                  value={this.props.value} 
                                  checked={this.props.value}
                                  {...this.props} >
                                   {this.props.text}
                                  </Checkbox>
                }
}

CheckboxComp.defaultProps = {
                "value":"",     
}

export default ContextProvider(CheckboxComp, (e)=>e.target.checked);
