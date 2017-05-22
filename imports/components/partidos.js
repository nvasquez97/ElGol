import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Redirect } from 'react-router-dom';

export default class Partidos extends Component{

	render()
	{
		if(Meteor.userId())
		{
			return(
				<div className="container">
					<h1 className="tituloTemp"> Partidos </h1>
				</div>);
		}
		else{
			return <Redirect to="/" />;
		}
	}
}