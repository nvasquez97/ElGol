import React, { Component } from 'react';

export default class Equipos extends Component{

	constructor(props)
	{
		super(props);
	}
	render()
	{
		return(
			<div className="col-md-3 container equipo">
				<h5 className="tEquipo"> Equipo tal</h5>
				<div className="centerImg">
					<img className="img-responsive imgEquipo" src="img/eMillos.png" alt="foto equipo"/>
				</div>
			</div>
			);
	}
}