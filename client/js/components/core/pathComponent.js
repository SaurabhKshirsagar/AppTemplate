import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import R from 'ramda';
export default class PathComponent extends Component {
	render() {
		let {pathname, exactly, component,...rest} = this.props;
		let Component = component;
		return (<Route path={pathname}
			exactly={exactly}
			render={(props) => <Component mapContextToProps={
				($context, $params) => {
					return {...props,...rest }
				}
			}/>}/>
		);
	}
};