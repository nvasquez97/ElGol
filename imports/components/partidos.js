import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Redirect } from 'react-router-dom';
import Partido from './partido.js';
import { Usuarios } from '../api/usuarios.js';
import { PartidosM } from '../api/partidos.js';
import '../style.css';

class Partidos extends Component{
	constructor(props)
	{
		super(props);
		this.state={
			tusequipos:false,
			partidos:[],
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

	componentDidMount()
	{
		Meteor.subscribe('equipos');
	Meteor.subscribe('usuarios');
	Meteor.subscribe('partidos');	
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
						{this.state.partidos.length > 1 ? 
							<h5> No tienes partidos, ve a agregar tus equipos favoritos </h5>
							:
							<span> </span>
						}
						{this.props.mPartidos.map(partido=>{
							return <Partido key={partido._id} partido={partido}/>
							})
						}
					</div>
					<button className="btn btn-primary" onClick={this.equipos.bind(this)}> Ve a Tus Equipos</button>
					<div className="pull-right botonCerrar">
					<button className="btn btn-danger" onClick={this.logOut.bind(this)}> Cerrar sesión</button>
					</div>
				</div>);	
			}
		}
		else{
			return <Redirect to="/" />;
		}
	}
}

export default createContainer(()=>{
	Meteor.subscribe('equipos');
	Meteor.subscribe('usuarios');
	Meteor.subscribe('partidos');

		let parts=PartidosM.find({}).fetch();
		let user = Usuarios.find({"_id":Meteor.userId()}).fetch();
		let misParts = [];
		if(parts.length>0 && user.length>0)
		{
			console.log('aca');
			if(user[0].equipos)
			{
				user[0].equipos.map(equipo=>{
					parts.map(partido=>{
						if(partido.local || partido.visitor)
						{
							if(equipo === partido.local || equipo === partido.visitor)
							{
								misParts.push(partido);
							}
						}
					});
				});
			}
			misParts.sort(function(may, men){
				return men.round - may.round;
			});
			console.log(misParts);
		}

	return{
		mUsuario:Usuarios.find({"_id":Meteor.userId()}).fetch(),
		mPartidos:misParts,
	}
}, Partidos);