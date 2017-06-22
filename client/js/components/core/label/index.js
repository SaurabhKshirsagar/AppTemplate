import React,{PureComponent} from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Label} from 'react-bootstrap';
import ContextConsumer from 'components/core/contextconsumer';


class LabelComp extends PureComponent{


                render(){
                    //let {params} = this.props,
                    return <div>
                            </div>
                }
}

LabelComp.defaultProps = {
                "value":"",
                "placeholder":""            
}

export default ContextConsumer(LabelComp, (e)=>e.target.value);
