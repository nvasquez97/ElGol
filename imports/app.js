import React, { Component } from 'react';
import UserForm from './components/ElGol.js'
import './style.css';

export default class App extends Component {

	render()
	{
		return(
			<div className="fondoApp">
			<div className="container">
				<h1 className="elGolT">El GOL</h1>
				<UserForm/>
			</div>
			
			</div>);
	}
}