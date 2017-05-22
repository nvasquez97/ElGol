'use strict';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TusJugadores from './tusJugadores.js';
import Equipo from './equipo.js';

export default class TusEquipos extends Component {

	constructor(props)
	{
		super(props)
		this.state = {
			login:true,
			partidos:false,
		}
	}

	irAPartidos()
	{
		this.setState({partidos:true});
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

	render() {
		if(Meteor.userId())
		{
			if(this.state.partidos)
			{
				return <Redirect to="partidos" />
			}
			else
			{
				return(
			<div>
				<div className="selectTeam container col-md-8">
					<div className="tusEquipos">
							<h1 className="tituloTemp">Equipos</h1>
					</div>
					<hr></hr>
					<div className="row">
						<Equipo />
						<Equipo />
						<Equipo />
						<Equipo />
					</div>
					<div className="dropdown">
						<button className="dropbtn">Dropdown</button>
						<div className="dropdown-content">
							<a href="#">Link 1</a>
							<a href="#">Link 2</a>
							<a href="#">Link 3</a>
						</div>
						<div className="botones">
							<button className="btn btn-success"> Añadir equipos </button>
							<button className="btn btn-primary" onClick={this.irAPartidos.bind(this)}> Ir a mis partidos </button>
						</div>
					</div>
					<hr></hr>
					<button className="btn btn-danger" onClick={this.logOut.bind(this)}> Cerrar sesión</button>
				</div>
				<div className="col-md-4">
					<TusJugadores/>
				</div>
			</div>
			);
			}
		}
		else
		{
			return(
				<Redirect to="/"/>
				);
		}
	}
}