import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Redirect } from 'react-router-dom';
import Partido from './partido.js';

export default class Partidos extends Component{
	constructor(props)
	{
		super(props);
		this.state={
			tusequipos:false,
		}
	}

	equipos()
	{	
		this.setState({ tusequipos: true });
	}
	logOut()
	{
		Meteor.logout((error) =>
			{
				if(error)
				{

				}
				else
				{
					this.setState({login:false});
				}
			});
	}


	render()
	{
		if(Meteor.userId())
		{
			if(this.state.tusequipos)
			{
				return <Redirect to="/tusEquipos" />
			}
			else
			{
				return(
				<div className="container">
					<h1 className="tituloTemp"> Partidos </h1>
					<hr></hr>
					<div className="row">
						<Partido/>
					</div>
					<button className="btn btn-primary" onClick={this.equipos.bind(this)}> Ve a Tus Equipos</button>
					<button className="btn btn-danger" onClick={this.logOut.bind(this)}> Cerrar sesión</button>
				</div>);	
			}
		}
		else{
			return <Redirect to="/" />;
		}
	}
}