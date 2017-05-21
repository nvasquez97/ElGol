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
				<form>
				<div className="form-group">
				<label className="control-label col-sm-5" htmlFor="userR">Usuario:</label>
				<div className="col-sm-11">
				<input className="inputText form-control" id="userR" placeholder="Ingresa nombre de usuario"/>
				</div>
				</div>
				<div className="form-group">
				<label className="control-label col-sm-5" htmlFor="nombreR">Nombre:</label>
				<div className="col-sm-11">
				<input className="inputText form-control" id="nombreR" placeholder="Ingresa tu nombre"/>
				</div>
				</div>
				<div className="form-group">
				<label className="control-label col-sm-5" htmlFor="passR">Contraseña:</label>
				<div className="col-sm-11">
				<input className="inputText form-control" id="passR" type="password" placeholder="Ingresa tu constraseña"/>
				</div>
				</div>
				<div className="buttonsL col-sm-11" id="sig">
				<button className="btn btn-primary" type="submit"> Registrarse </button>
				</div>
				</form>
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
				<form>
				<div className="form-group">
				<label className="control-label col-sm-2" htmlFor="userL">Usuario:</label>
				<div className="col-sm-11">
				<input className="inputText form-control" id="userL" placeholder="Ingresa nombre de usuario"/>
				</div>
				</div>
				<div className="form-group">
				<label className="control-label col-sm-2" htmlFor="passL">Contraseña:</label>
				<div className="col-sm-11">
				<input className="inputText form-control" id="passL" type="password" placeholder="Ingresa tu constraseña"/>
				</div>
				</div>
				<div className="buttonsL col-sm-11" >
				<button className="btn btn-primary" type="submit"> Inicia Sesión </button>
				</div>
				</form>
				</div>
				);
		}
	}
}