import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Usuarios } from '../api/usuarios.js';
import Gol from './gols.js';
import { Goles } from '../api/goles.js';


class Jugador extends Component{

	constructor(props)
	{
		super(props);
		this.state={
			verGoles:false,
		}
	}
	anadirJugador(){
		Meteor.call('user.addPlayer',this.props.jugador.nombre, Meteor.userId());
		this.props.anadir();
	}

	eliminarJugador(){
		Meteor.call('user.DeletePlayer',this.props.jugador.nombre, Meteor.userId());
	}

	verGoles()
	{
		ver = !this.state.verGoles;
		this.setState(
		{
			verGoles:ver,
		});
	}
	render()
	{
		return(
			<div>
			<div className="gris jugador row">
			<div className="jugI col-md-5">
				<img src={this.props.jugador.url_img} alt={this.props.jugador.nombre} className="img-responsive img-circle imgJug"/>
			</div>
			<div className="jugD col-md-5">
			 	<h5> {this.props.jugador.nombre}</h5>
			</div>
			<div className="col-md-2">
				{this.props.agregar?
				<button className="btn btn-success" onClick={this.anadirJugador.bind(this)}> <i className="fa fa-thumbs-o-up fa-lg"></i></button>:
				<button className="btn btn-default" onClick={this.eliminarJugador.bind(this)}> <i className="fa fa-trash fa-2x"></i></button>
				}
			</div>
			 </div>
			 {this.state.verGoles ? this.props.goles.map(gol=>{
			 	return <Gol key={gol._id} gol={gol} nombre={this.props.jugador.nombre}/> 
			 }): <span></span>}	
			 </div>
			);
	}

}
export default createContainer(()=>{ 
	Meteor.subscribe('goles');
	
	let goles=Goles.find({}).fetch();
	let gols=[];
	if(goles.length>0)
	{
		gols=goles;
	}
	return{
		goles:gols,
	}
},Jugador); 