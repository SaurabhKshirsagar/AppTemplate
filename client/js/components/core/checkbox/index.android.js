import React,{PureComponent} from 'react';
import ContextConsumer from 'components/core/contextconsumer';
import { Alert} from 'react-native';
import { CheckBox ,Text,Body} from 'native-base';



class CheckboxComp extends PureComponent{
                render(){
                    return <CheckBox onClick={()=>{this.props.onClick()}}
                                onChange={this.props.onContextChange} 
                                  value={this.props.value} 
                                  checked={this.props.value}
                                  {...this.props} >
                                  <Body><Text>
                                   {this.props.text}
                                   </Text>
                                   </Body>
                                  </CheckBox>
                }
}

CheckboxComp.defaultProps = {
                "value":"",     
}

export default ContextConsumer(CheckboxComp, (e)=>e.target.checked);