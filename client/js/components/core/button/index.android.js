import React,{PureComponent} from 'react';
import {Button} from 'native-base';
import ContextProvider from 'components/core/contextprovider';

class ButtonContol extends PureComponent{
                render(){
                    return <Button key="b" onClick={()=>{this.props.onClick()}}

                                  {...this.props} >{this.props.text} </Button>        
                }
}


export default ContextProvider(ButtonContol);
