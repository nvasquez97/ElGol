import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Redirect } from 'react-router-dom';
import Partido from './partido.js';
import { Usuarios } from '../api/usuarios.js';
import { PartidosM } from '../api/partidos.js';

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
	componentWillMount()
	{
		this.cargarPartidos();
	}

	componentDidMount()
	{
		Meteor.subscribe('equipos');
	Meteor.subscribe('usuarios');
	Meteor.subscribe('partidos');
	}

	cargarPartidos()
	{
		let parts=this.props.mPartidos;
		let user = this.props.mUsuario;
		let misParts = [];
		if(user.length>0 )
		{
			if(user[0].equipos)
			{
				user[0].equipos.map(equipo=>{
					this.props.mPartidos.map(partido=>{
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
			this.setState({
				partidos:misParts,
			});
		}
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

export default createContainer(()=>{
	Meteor.subscribe('equipos');
	Meteor.subscribe('usuarios');
	Meteor.subscribe('partidos');
	return{
		mUsuario:Usuarios.find({}).fetch(),
		mPartidos:PartidosM.find({}).fetch(),
	}
}, Partidos);