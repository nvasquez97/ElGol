import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import UserForm from './components/ElGol.js'
import Usuarios from './api/usuarios.js';

import './style.css';

export default class App extends Component {

	constructor(props)
	{
		super(props);
		this.state = {
			estado: "Inicia sesión",
			nombreUsuario:'',
		};
	}

	nombre(nombreNuevo)
	{
		Meteor.call('user.insertName', nombreNuevo, Meteor.userId());	
		this.setState(
			{nombreUsuario:nombreNuevo,	});
	}
	registrarse()
	{
		this.setState({
			estado: "Registrarse",
		});
		document.getElementById('sig').scrollIntoView();
	}

	iniciaS()
	{
		this.setState({
			estado: "Inicia sesión",
		});
		document.getElementById('sig').scrollIntoView();
	}

	render()
	{
		if(Meteor.userId())
		{
			return (
				<Redirect to="partidos" />
				);
		}
		return(
			<div className="fondoApp">
			<div className="row">
				<div className="col-md-7">
					<div className="container elG">
					<h1 className="elGolT">El GOL</h1>
					<h4>Con <span> El GOL</span> encontrarás tus equipos y jugadores favoritos, podrás ver sus resultados y podrás encontrar 
					vídeos de los eventos importantes de cada partido y de todos sus goles. 
					<br></br>
					<br></br>
					<span>
						<strong>
							Crea una cuenta, añade tus equipos y descubre.
						</strong>
					</span>
					</h4>
					<div className="buttonsL">
						<button className="btn btn-primary" onClick={()=> this.registrarse()}> Registrarse </button>
						<button className="btn btn-danger" onClick={()=> this.iniciaS()}> Iniciar sesión </button>
					</div>
					</div>
				</div>
				<div className="col-md-5 userF">
					<UserForm estado={this.state.estado} nombre={this.nombre.bind(this)}/>
				</div>
			</div>
			
			</div>);
	}
}