import React, { Component } from 'react';
import UserForm from './components/ElGol.js'
import '../style.css';

export default class App extends Component {

	render()
	{
		return(
			<div className="fondoApp container">
			<div>
				<h1 className="elGolT">El GOL</h1>
			</div>
			<UserForm/>
			</div>);
	}
}