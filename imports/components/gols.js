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
			ver:false,
			videoId:'',
		}
	}
	search()
	{
		Youtube({key:API_K, term: "gol "+this.props.gol.jugador+" "+this.props.gol.gol+" vs "+this.props.vs, channelId:'UCqoAj1bv79eZJc326cemDnw'}, (videos)=>
		{	
			this.setState({
				gols:videos,
				videoId:videos[0].id.videoId,
			});	
		});
	}
	verVideo()
	{		
		let verN = !this.state.ver;
		this.setState({
			ver:verN,
		});
	}
	getURL(){
		let url="https://www.youtube.com/embed/"+this.state.videoId+"?autoplay=1";
		return url;
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
			<div>
			<div className="row gris" title="Mira el video" onClick={this.verVideo.bind(this)}>
			<hr></hr>
			{this.props.gol.orden===31?<h5 className="tEquipo"><span><i className="fa fa-video-camera" aria-hidden="true"></i> <strong> Merjor gol:</strong></span> {this.props.gol.gol} vs {this.props.gol.vs} </h5>
				:<h5 className="tEquipo"><span><i className="fa fa-video-camera" aria-hidden="true"></i></span> {this.props.gol.gol} vs {this.props.gol.vs} 
				</h5>
			}
			</div>
			<hr></hr>
			</div>
			:<span></span>
			}
			{this.state.ver && this.state.videoId!==''?
				<div  className="embed-responsive embed-responsive-16by9">
            		<iframe className="embed-responsive-item" src={this.getURL()} ></iframe>
          		</div>
				:<span></span>}
			
			</div>);
	}

}