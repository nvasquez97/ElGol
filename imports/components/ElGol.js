import React, { Component } from 'react';

export default class UserForm extends Component{

	render()
	{
		if(this.props.estado==="Registrarse")
		{
			return(
				<div className="container formU form-horizontal">
				<h5 id="sig">
				{this.props.estado}:
				</h5>
				<div className="form-group">
				<label className="control-label col-sm-2" htmlFor="userR">Usuario:</label>
				<div class="col-sm-8">
				<input className="inputText form-control" id="userR" placeholder="Ingresa nombre de usuario"/>
				</div>
				</div>
				<div className="form-group">
				<label className="control-label col-sm-2" htmlFor="nombreR">Nombre:</label>
				<div class="col-sm-8">
				<input className="inputText form-control" id="nombreR" placeholder="Ingresa tu nombre"/>
				</div>
				</div>
				<div className="form-group">
				<label className="control-label col-sm-2" htmlFor="passR">Contraseña:</label>
				<div class="col-sm-8">
				<input className="inputText form-control" id="passR" type="password" placeholder="Ingresa tu constraseña"/>
				</div>
				</div>
				<div className="buttonsL" id="sig">
				<button className="btn btn-primary"> Registrarse </button>
				</div>
				</div>
				);
		}
		else
		{
			return(
				<div className="container formU form-horizontal">
				<h5 id="sig">
				{this.props.estado}:
				</h5>
				<div className="form-group">
				<label className="control-label col-sm-2" htmlFor="userL">Usuario:</label>
				<div class="col-sm-8">
				<input className="inputText form-control" id="userL" placeholder="Ingresa nombre de usuario"/>
				</div>
				</div>
				<div className="form-group">
				<label className="control-label col-sm-2" htmlFor="passL">Contraseña:</label>
				<div class="col-sm-8">
				<input className="inputText form-control" id="passL" type="password" placeholder="Ingresa tu constraseña"/>
				</div>
				</div>
				<div className="buttonsL" >
				<button className="btn btn-primary"> Inicia Sesión </button>
				</div>
				</div>
				);
		}
	}
}