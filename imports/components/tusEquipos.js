'use strict';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import TusJugadores from './tusJugadores.js';
import Equipo from './equipo.js';
import { Usuarios } from '../api/usuarios.js';
import { Equipos } from '../api/equipos.js';

class TusEquipos extends Component {

	constructor(props)
	{
		super(props)
		this.state = {
			login:true,
			partidos:false,
			misEquipos:[{_id:1, url_escudo:"img/eMillos.png", Nombre:"Mi unico equipo"}],
			equipos:[],
			anadir:false,
		}
	}

	irAPartidos()
	{
		this.setState({partidos:true});
	}

	cargarMisEquipos()
	{

	}

	cargarEquipos()
	{
		this.setState({
			anadir:true,
		});
		var equipos = Equipos.find({}).fetch();
		equipos.map(equipo=>{
			if(equipo.url_escudo)
			{
				var nuevEquipos = this.state.misEquipos.push(equipo);
				this.setState({
					equipos:nuevEquipos,
				})
			}
		});
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

	componentDidMount()
	{
		Meteor.subscribe('equipos');
		Meteor.subscribe('usuarios');
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
						{this.state.misEquipos.map(equipo=>{
							return <Equipo key={equipo._id} equipo={equipo}/>
							})
						}
					</div>					
					<div className="botones">
						<button className="btn btn-success" onClick={this.cargarEquipos.bind(this)}> Añadir equipos </button>
						<button className="btn btn-primary" onClick={this.irAPartidos.bind(this)}> Ir a mis partidos </button>
					</div>
					{this.state.anadir? this.state.equipos.map(equipo=>{
							return <Equipo key={equipo._id} equipo={equipo} anadir={this.state.anadir}/>
							})
							: <span></span>
					}
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

export default createContainer(()=>{
	Meteor.subscribe('equipos');
	Meteor.subscribe('usuarios');
	return{
		equipos:Equipos.find({}).fetch(),
	}
}, TusEquipos);