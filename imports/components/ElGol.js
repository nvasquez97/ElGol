import React, { Component } from 'react';

export default class UserForm extends Component{

	render()
	{
		if(this.props.estado==="Registrarse")
		{
			return(
			<div className="container formU">
				<h5 id="sig">
					{this.props.estado}:
				</h5>
				<label htmlFor="userR">Usuario:</label>
              	<input className="inputText" id="userR" placeholder="Ingresa nombre de usuario"/>
              	<br></br>
              	<label htmlFor="nombreR">Nombre:</label>
              	<input className="inputText" id="nombreR" placeholder="Ingresa tu nombre"/>
              	<br></br>
              	<label htmlFor="passR">Contraseña:</label>
              	<input className="inputText" id="passR" type="password" placeholder="Ingresa tu constraseña"/>
              	<div className="buttonsL" id="sig">
					<button className="btn btn-primary"> Registrarse </button>
				</div>
			</div>
			);
		}
		else
		{
			return(
				<div className="container formU">
				<h5 id="sig">
					{this.props.estado}:
				</h5>
				<label htmlFor="userL">Usuario:</label>
              	<input className="inputText" id="userL" placeholder="Ingresa nombre de usuario"/>
              	<br></br>
              	<label htmlFor="passL">Contraseña:</label>
              	<input className="inputText" id="passL" type="password" placeholder="Ingresa tu constraseña"/>
              	<div className="buttonsL" >
						<button className="btn btn-primary"> Inicia Sesión </button>
				</div>
				</div>
				);
		}
	}
}