import React, { Component } from 'react';
import UserForm from './components/ElGol.js'
import './style.css';

export default class App extends Component {

	render()
	{
		return(
			<div className="fondoApp">
			<div className="container elG">
				<h1 className="elGolT">El GOL</h1>
				<h4>Con <span> El GOL</span> encontrarás tus equipos favoritos, podrás ver sus resultados y podrás encontrar 
				vídeos de los eventos importantes de cada partido y de todos sus goles. Crea una cuenta, añade tus equipos
				y descubre.</h4>
				<UserForm/>
			</div>
			
			</div>);
	}
}