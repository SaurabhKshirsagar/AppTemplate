import React,{PureComponent} from 'react';
import Toggle from 'react-toggle';
import { Button, FormGroup, ControlLabel, FormControl, Label} from 'react-bootstrap';
import ContextConsumer from 'components/core/contextconsumer';

class ButtonContol extends PureComponent{
                render(){
                    return <Button key="b" onClick={()=>{this.props.onClick()}}

                                  {...this.props} >{this.props.text} </Button>        
                }
}


export default ContextConsumer(ButtonContol);