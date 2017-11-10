import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import R from 'ramda';
export default class PathComponent extends Component {
	render() {
		debugger;
		let {pathname, exactly=false, component,...rest} = this.props;
		let Component = component;
		return (<Route path={pathname}
			exact={exactly}
			render={(props) => <Component mapContextToProps={
				($context, $params) => {
					return {...props,...rest }
				}
			}/>}/>
		);
	}
};

