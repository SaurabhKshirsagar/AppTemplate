import React, {Component} from 'react';
import { Container, Content, InputGroup, Input, Icon } from 'native-base';
import ContextProvider from "components/core/contextprovider";

class TextBox extends Component{
        onContextChange(e){  
            this.setState({ value : e.target.value },this.props.onContextChange (e))
        }
        componentWillMount(){
            this.setState({value : this.props.value});
        }
        shouldComponentUpdate(nextProps, nextState) {
             if(!_.isEqual(this.state.value,nextState.value))
                this.state.value=nextState.value
             else(!_.isEqual(this.state.value,nextProps.value))
                this.state.value=nextProps.value
            return true;  
        }
        render(){
            let {placeholder, value, ...rest} = this.props;
      
        return  <InputGroup>
        <Input    placeholder = {this.props.placeholder}
                            value = {this.state.value}
                            onChange = {this.onContextChange.bind(this)}
                            onBlur = {()=>{this.props.onTextBlur(this.state.value)}}
                            {...rest}/>
                     </InputGroup>
        
    }
}

TextBox.defaultProps = {
    "value": "",
    "placeholder": ""
}

export default ContextProvider(TextBox, (e) => e.nativeEvent.text );
