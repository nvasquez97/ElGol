'use strict';
import React, { Component } from 'react';
import TusJugadores from './tusJugadores.js';
export default class TusEquipos extends Component {

	logOut()
	{
		Meteor.logout((error) =>
			{
				if(error)
				{

				}
				else
				{

				}
			});
	}

	render() {
		return(
			<div>
				<div className="selectTeam container col-md-8">
					<div className="tusEquipos">
						<div className="tusEIzquierda">
							<h1>Tus Equipos</h1>
						</div>
						<div className="tusEDerecha">
							<button className="btn btn-danger" onClick={this.logOut.bind(this)}> Cerrar sesión</button>
						</div>
					</div>
					<hr></hr>
					<div className="dropdown">
						<button className="dropbtn">Dropdown</button>
						<div className="dropdown-content">
							<a href="#">Link 1</a>
							<a href="#">Link 2</a>
							<a href="#">Link 3</a>
						</div>
						<button className="btn btn-success"> Añadir equipos </button>
					</div>
					<hr></hr>
				</div>
				<div className="col-md-4">
					<TusJugadores/>
				</div>
			</div>
			);
	}
}