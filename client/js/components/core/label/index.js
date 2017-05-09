import React,{PureComponent} from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Label} from 'react-bootstrap';
import ContextProvider from 'components/core/contextprovider';


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

export default ContextProvider(LabelComp, (e)=>e.target.value);
