import React,{Component} from 'react';
import {observer} from 'mobx-react';
import {autorun} from 'mobx';
import R from 'ramda';
import globals from "components/app/globals";
import { Button, FormGroup, ControlLabel, FormControl, Label} from 'react-bootstrap';

function ContextProvider(Wrapped, valueResolver){
                return  observer(class ContextProvider extends Component{
                                constructor(){
                                    super();
                                    this.state={}                          
                                    this.constructor.displayName = `ContextProvider_${Wrapped.name}`;
                                    this.observerFn.bind(this);
                                }
                                componentDidMount(){
                                  this.disposer = autorun(()=>{this.observerFn()})
                                }
                                componentWillUnmount(){
                                  this.disposer();
                                }
                                observerFn(){
                                    let {context, mapContextToProps, params} = this.props,
                                    mappedProps = mapContextToProps?mapContextToProps(context,params):{},
                                    mergedProps = _.assign({}, Wrapped.defaultProps, mappedProps);
                                    if(Wrapped.name=="RepeatableView")
                                        mergedProps = _.assign({},mergedProps,{context,params} );
                                    let wrappedComponentProps = {"props" : mergedProps, "contextAvailable" : true};
                                
                                    this.setState(wrappedComponentProps);
                                }

                                onChange(changePayload){
                                     let value= valueResolver(changePayload);
                                     let {context,params}=this.props;
                                     if(this.props.onChange)
                                        this.props.onChange(context,globals,params,value);
                                }
                                 onClick(){
                                     let {context,params}=this.props;
                                     if(this.props.onClick)
                                        this.props.onClick(context,globals,params);
                                }
                                onSelectionChanged(key,item,items){
                                     let {context,params}=this.props;
                                     if(this.props.onSelectionChanged)
                                     this.props.onSelectionChanged (context,params,key,item,items);
                                }
                                render(){
                                    if (!this.state.contextAvailable){
                                        return null;
                                    }
                                    return (<Wrapped {...this.state.props} 
                                                onChange={this.onChange.bind(this)}
                                                onClick={this.onClick.bind(this)} 
                                                onSelectionChanged={this.onSelectionChanged.bind(this)} 
                                                >
                                                {this.props.children}</Wrapped>);
                                }
                });
}
module.exports= ContextProvider;