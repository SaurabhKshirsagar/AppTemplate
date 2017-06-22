import React,{PureComponent} from 'react';
import {Button} from 'native-base';
import ContextConsumer from 'components/core/contextconsumer';

class ButtonContol extends PureComponent{
                render(){
                    return <Button key="b" onClick={()=>{this.props.onClick()}}

                                  {...this.props} >{this.props.text} </Button>        
                }
}


export default ContextConsumer(ButtonContol);
