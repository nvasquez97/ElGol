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
			misEquipos:[],
			equipos:[],
			anadir:false,
			tengoEquipos:false,
		}
	}

	irAPartidos()
	{
		this.setState({partidos:true});
	}

	cargarMisEquipos()
	{
		let nombres = Usuarios.find({"_id":Meteor.userId()}).fetch();
		let eq = nombres[0];
		if(nombres.length>0)
		{
		if(eq.equipos)
		{
			let nom = eq.equipos;
			let equipo = [];
			nom.map(name=>{
			let nueq = Equipos.find({"Nombre":name}).fetch()[0];
			if(nueq!== undefined)
			equipo.push(nueq);
			});
			this.setState({
				misEquipos:equipo,
				tengoEquipos:true,
			});				
		}
		}
	}
	cambiarTengoEquipos()
	{
		this.setState({
			tengoEquipos:false,
		});
		this.cargarEquipos();
	}
	cargarEquipos()
	{
		let nuev = !this.state.anadir;
		this.setState({
			anadir:nuev,
		});
			var equipos = Equipos.find({}).fetch();
			var nuevEquipos = [];
			equipos.map(equipo=>{
			if(equipo.url_escudo && !this.includesMis(equipo))
			{	
				
				nuevEquipos.push(equipo);
			}
			});	
			this.setState({
				equipos:nuevEquipos,
			});
	}

	includesMis(equipo)
	{
		let include = 0;
		this.state.misEquipos.map(eq=>{
			if(eq.Nombre === equipo.Nombre)
			{
				include++;
			}
		});

		return include>0;
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
	componentWillMount()
	{
		this.cargarMisEquipos();
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
						{this.state.misEquipos.length >1 ? <h5> Mira tus equipos: </h5> : <h5> No tienes equipos, añade tu favorito </h5>}
						{this.state.misEquipos.map(equipo=>{
							return <Equipo key={equipo._id} equipo={equipo} cambiar={this.cambiarTengoEquipos.bind(this)}/>
							})
						}
					</div>					
					<div className="botones">
						<button className="btn btn-success" onClick={this.cargarEquipos.bind(this)}> Añadir equipos </button>
						<button className="btn btn-primary" onClick={this.irAPartidos.bind(this)}> Ir a mis partidos </button>
					</div>
					<hr></hr>
					{this.state.anadir ? this.state.equipos.map(equipo=>{
							return <Equipo key={equipo._id} equipo={equipo} anadir={true} cambiar={this.cambiarTengoEquipos.bind(this)}/>
							})
							: <span></span>
					}
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
		mequipos:Equipos.find({}).fetch(),
	}
}, TusEquipos);