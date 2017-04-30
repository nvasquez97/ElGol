import React, { Component } from 'react';
import UserForm from './components/ElGol.js'
import './style.css';

export default class App extends Component {

	constructor(props)
	{
		super(props);
		this.state = {
			estado: "Registrarse",
		};
	}

	registrarse()
	{
		this.setState({
			estado: "Registrarse",
		});
	}

	iniciaS()
	{
		this.setState({
			estado: "Inicia sesión",
		});
	}
	
	render()
	{
		return(
			<div className="fondoApp">
			<div className="row">
				<div className="col-md-7">
					<div className="container elG">
					<h1 className="elGolT">El GOL</h1>
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
				<div className="col-md-5">
					<UserForm estado={this.state.estado} />
				</div>
			</div>
			</div>);
	}
}