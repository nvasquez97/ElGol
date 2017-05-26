import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Jugadores } from '../api/jugadores.js';
import { Usuarios } from '../api/usuarios.js';
import Jugador from './jugador.js';
class TusJugadores extends Component {
	constructor(props)
	{
		super(props);
		this.state ={
			anadir:false,
		}
	}

	anadir()
	{
		let nuevAnadir = !this.state.anadir;
		this.setState({
			anadir:nuevAnadir,
		});
	}
	componentDidMount()
	{
		Meteor.subscribe('usuarios');
		Meteor.subscribe('jugadores');
	}
	render()
	{
		return(
			<div className="container">
				<h1 className="titJugadores tituloTemp">Jugadores</h1>
				<hr></hr>
				{this.props.mJugadores.length<1? <h5> No tienes jugadores, añade uno </h5> : <h5>Mira tus jugadores:</h5>}
				{this.props.mJugadores.map(jugador=>{
					return <Jugador key={jugador._id} jugador={jugador} anadir={this.anadir.bind(this)}/>
				})}
				<button className="btn btn-success" onClick={this.anadir.bind(this)}> Añadir Jugador </button>
				{this.state.anadir? this.props.jugadores.map(jugador=>{
					return <Jugador key={jugador._id} jugador={jugador} anadir={this.anadir.bind(this)} agregar={true}/>
				}):<span></span>
				}
			</div>
			);
	}

	
}
	export default createContainer(()=>{
		Meteor.subscribe('usuarios');
		Meteor.subscribe('jugadores');
		
		let users = Usuarios.find({"_id":Meteor.userId()}).fetch();
		let players = Jugadores.find({}).fetch();

		let misJugadores =[];
		let jugadores =[];
		if(users.length>0 && players.length>0)
		{
			if(users[0].jugadores)
			{
				players.map(play=>{
					users[0].jugadores.map(jugador=>{
						if(play.nombre===jugador)
						{
							misJugadores.push(play);	
						}
						else
						{
							jugadores.push(play);
						}
					});

				});
				if(misJugadores.length<1)
				{
					jugadores=players;
				}
				else if(misJugadores.length === players.length)
				{
					jugadores=[];
				}
			}
			else
			{
				jugadores = players;
			}
		}
	return{
		mJugadores:misJugadores,
		jugadores:jugadores,
	}


},TusJugadores);