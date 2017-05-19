'use strict';
import React, { Component } from 'react';

export default class TusEquipos extends Component {

	render() {
		return(
			<div className="selectTeam">
			<h1>Tus Equipos</h1>
			<div className="dropdown">
			<button className="dropbtn">Dropdown</button>
			<div className="dropdown-content">
			<a href="#">Link 1</a>
			<a href="#">Link 2</a>
			<a href="#">Link 3</a>
			</div>
			</div>

			</div>
			)
	}
}