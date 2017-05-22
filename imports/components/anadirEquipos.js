import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Redirect } from 'react-router-dom';

export default class AnadirEquipos extends Component{

	render()
	{
		if(Meteor.userId())
		{
			return(
				<h1> Aca vas a añadir a tus equipos </h1>);
		}
		else{
			return <Redirect to="/" />;
		}
	}
}