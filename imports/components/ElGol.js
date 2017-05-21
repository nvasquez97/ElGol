import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class UserForm extends Component{

	contructor(props)
	{
		this.state = {
			user:'',
		}
	}

	sumbmission()
	{
		if(this.props.estado==="Registrarse")
		{
			let nombre = document.getElementById('nombreR').value;
			let pass = document.getElementById('passR').value;
			if(pass ==="" || nombre ==="" || this.state.user ==="")
			{

			}
			else{
				Accounts.createUser({
					username:this.state.user,
					password:pass,
					name:nombre,
				},
				(error)=>{
					if(error)
					{
						console.log(error.reason);
					}
					else{
						Meteor.loginWithPassword(this.state.user, pass, (error)=>{
							if(error)
							{
								console.log(error);
							}
							else{
								this.props.nombre(nombre);
							}
						});
					}
				});
			}
		}
		else
		{
			let pass = document.getElementById('passL').value;
			if(pass ==="" || this.state.user ==="")
			{

			}
			else
			{
				Meteor.loginWithPassword(this.state.user, pass, (error)=>{
					if(error)
					{

					}
					else
					{
						this.props.nombre("login");
					}
				});
			}
		}
	}

	data(usuario){
		this.setState({
			user: usuario,
		});
	}

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
						<label className="control-label col-sm-5" htmlFor="userR">Usuario:</label>
						<div className="col-sm-11">
							<input className="inputText form-control" id="userR" placeholder="Ingresa nombre de usuario" onChange={event => this.data(event.target.value)}/>
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
						<button className="btn btn-primary" onClick={this.sumbmission.bind(this)}> Registrarse </button>
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
						<div className="col-sm-11">
							<input className="inputText form-control" id="userL" placeholder="Ingresa nombre de usuario" onChange={event => this.data(event.target.value)}/>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-sm-2" htmlFor="passL">Contraseña:</label>
						<div className="col-sm-11">
							<input className="inputText form-control" id="passL" type="password" placeholder="Ingresa tu constraseña"/>
						</div>
					</div>
					<div className="buttonsL col-sm-11" >
						<button className="btn btn-primary" onClick={this.sumbmission.bind(this)}> Inicia Sesión </button>
					</div>
				</div>
				);
		}
	}
}