import React,{PureComponent} from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Label} from 'react-bootstrap';
import ContextProvider from 'components/core/contextprovider';


class TextBox extends PureComponent{


                render(){
                    //let {params} = this.props,
                    return <div><FormControl onChange={this.props.onChange} 
                                  placeholder={this.props.placeholder}
                                  value={this.props.value} 
                                  {...this.props} >
                                      
                                  </FormControl>
                            </div>
                }
}

TextBox.defaultProps = {
                "value":"",
                "placeholder":""            
}

export default ContextProvider(TextBox, (e)=>e.target.value);
