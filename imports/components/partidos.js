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
			partidos:[{_id:1,nombreEquipo1:'Millonarios', nombreEquipo2:'Patriotas', goles1:2, goles2:0}],
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
						{this.state.partidos.map(partido=>{
							return <Partido key={partido._id} partido={partido}/>
							})
						}
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