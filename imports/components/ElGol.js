import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import TusEquipos from './tusEquipos.js'
import { Redirect } from 'react-router-dom';

export default class UserForm extends Component{

	contructor(props)
	{
		this.state = {
			user:'',
			login:false,
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
                  sAlert.success('Debes completar todos los campos para registrarte', {timeout: 20000, position:'top', effect:'jelly'});
			}
			else if(pass.length<=8){
				sAlert.success('Tu contraseña debe tener más de 8 caracteres', {timeout: 20000, position:'top', effect:'jelly'});
			}
			else if(this.state.user.length<=8){
				sAlert.success('Tu usuario debe tener más de 8 caracteres', {timeout: 20000, position:'top', effect:'jelly'});
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
						sAlert.success(error.reason, {timeout: 20000, position:'top', effect:'jelly'});

						console.log(error.reason);
					}
					else{
						Meteor.loginWithPassword(this.state.user, pass, (error)=>{
							if(error)
							{
								sAlert.success(error.reason, {timeout: 20000, position:'top', effect:'jelly'});

								console.log(error);
							}
							else{
								this.props.nombre(nombre);
								this.setState({login:true});
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
                  sAlert.success('Debes completar todos los campos para poder iniciar sesión', {timeout: 20000, position:'top', effect:'jelly'});

			}
			else
			{
				Meteor.loginWithPassword(this.state.user, pass, (error)=>{
					if(error)
					{
						sAlert.success(error.reason, {timeout: 20000, position:'top', effect:'jelly'});

						console.log(error);

					}
					else
					{
						this.setState({login:true});
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
			if(Meteor.userId())
			{
				return <Redirect to="tusEquipos" />
			}
			else
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
		}
		else
		{
			if(Meteor.userId())
			{
				return <Redirect to='partidos' />
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
}