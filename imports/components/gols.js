import React, { Component } from 'react';
import { Usuarios } from '../api/usuarios.js';
import Youtube from 'youtube-api-search';
const API_K="AIzaSyD5gVIxzt4WtEBhoLVgSBgwUkcMMs-FGD0";

export default class Gol extends Component{
	constructor(props)
	{
		super(props);
		this.state={
			gols:[],
		}
	}
	search()
	{
		Youtube({key:API_K, term: "gol "+this.props.gol.jugador+" "+this.props.gol.gol+" vs "+this.props.vs}, (videos)=>
		{	
			this.setState({
				gols:videos,
			});	
		});
	}
	render()
	{
		if(this.state.gols.length<1)
		{
			this.search();
		}
		return(
			<div>
			{this.props.nombre===this.props.gol.jugador?
			
			<div className="row">
			<div className="col-md-6">

			</div>
			<div className="col-md-6">

			</div>
			<h5 className="tEquipo"> Soy un gol </h5>
			</div>
			:<span></span>
			}
			
			</div>);
	}

}