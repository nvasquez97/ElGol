import React, { Component } from 'react';
import { Usuarios } from '../api/usuarios.js';
import '../style.css';
export default class Equipos extends Component{

	constructor(props)
	{
		super(props);
	}
	anadirEquipo(){
		Meteor.call('user.addTeam',this.props.equipo.Nombre, Meteor.userId());
		this.props.cambiar();
	}

	eliminarEquipo(){
		Meteor.call('user.DeleteTeam',this.props.equipo.Nombre, Meteor.userId());
		this.props.cambiar();
	}

	render()
	{
		return(
			<div className="col-md-3 container gris equipoEsc">
				<h5 className="tEquipo"> {this.props.equipo.Nombre}</h5>
				<div className="centerImg">
					<img className="img-responsive imgEquipo" src={this.props.equipo.url_escudo} title={this.props.equipo.Nombre} alt="foto equipo"/>
					{this.props.anadir? <button className="btn btn-success btn-md" onClick={this.anadirEquipo.bind(this)}> <i className="fa fa-thumbs-o-up fa-lg"></i></button> : <button className="btn btn-default btn-sm" onClick={this.eliminarEquipo.bind(this)}> <i className="fa fa-trash fa-2x"></i> </button>}
				</div>
				
			</div>
			);
	}
}