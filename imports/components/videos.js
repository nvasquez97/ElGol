import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Redirect } from 'react-router';

export default class Videos extends Component{

	render()
	{
		if(Meteor.userId())
		{
			return(
				<h1> Aca vas a ver tus videos </h1>);
		}
		else{
			return <Redirect to="/" />;
		}
	}
}