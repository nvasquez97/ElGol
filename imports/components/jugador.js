import React, { Component } from 'react';
import { Usuarios } from '../api/usuarios.js';

export default class Jugador extends Component{

	constructor(props)
	{
		super(props);
	}
	anadirJugador(){
		Meteor.call('user.addPlayer',this.props.jugador.nombre, Meteor.userId());
		this.props.cambiar();
	}

	eliminarJugador(){
		Meteor.call('user.DeletePlayer',this.props.jugador.nombre, Meteor.userId());
	}

	render()
	{
		return(
			<div className="gris jugador">
			 <h5> {this.props.jugador.nombre}</h5>
			 </div>	
			);
	}

}