'use strict';
import React, { Component } from 'react';

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
			<div className="selectTeam container">
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
			<button className="btn btn-success"> Añadir equipos </button>
			</div>
			</div>
			</div>
			);
	}
}