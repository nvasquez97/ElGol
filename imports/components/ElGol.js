import React, { Component } from 'react';

export default class UserForm extends Component{

	render()
	{
		return(
			<div className="container buttonsL">
				<button className="btn btn-primary"> Registrarse </button>
				<button className="btn btn-danger"> Iniciar sesión </button>
			</div>
			);
	}
}