import React, { Component } from 'react';
import UserForm from './components/ElGol.js'
import Usuarios from './api/usuarios.js';
import TusEquipos from './components/tusEquipos.js'
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
		
		if(nombreNuevo!=="login")
		{
			Meteor.call('user.insertName', nombreNuevo, Meteor.userId());	
			this.setState({
			nombreUsuario:nombreNuevo,
		});
		}
		else{
			let user = Usuarios.find({"_id":Meteor.userId()}).fetch()[0];
			this.setState({
				nombreUsuario:user.nombre,
			});
		}
		
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
		Meteor.subscribe('usuarios');
		if(Meteor.userId())
		{
			return (
				<TusEquipos />
				);
		}
		return(
			<div className="fondoApp">
			<div className="row">
				<div className="col-md-7">
					<div className="container elG">
					<h1 className="elGolT">El GOL {this.state.nombreUsuario}</h1>
					<h4>Con <span> El GOL</span> encontrarás tus equipos favoritos, podrás ver sus resultados y podrás encontrar 
					vídeos de los eventos importantes de cada partido y de todos sus goles. 
					<br></br>
					Crea una cuenta, añade tus equipos y descubre.
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