import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Redirect } from 'react-router-dom';
import Youtube from 'youtube-api-search';
import Video from './video.js';
const API_K="AIzaSyD5gVIxzt4WtEBhoLVgSBgwUkcMMs-FGD0";

export default class Videos extends Component{

	constructor(props)
	{
		super(props);
		this.state={
			goles:[],
			highlights:[],
			videoId:"NoWqnjmh8KU",
		}
		this.changeVideo= this.changeVideo.bind(this);
	}
	searchVideos()
	{
		Youtube({key:API_K, term:this.props.partido.nombreEquipo1+" " + this.props.partido.goles1 + " " + this.props.partido.nombreEquipo2 + " " + this.props.partido.goles2 , channelId:'UCZjpA3YBPXvJv3pg4SPEjfw'}, (videos)=>
		{	
			this.setState({
				goles:videos,
			});	
			console.log(this.props.partido.nombreEquipo1);
		});
		Youtube({key:API_K, term:this.props.partido.nombreEquipo1 + " " + this.props.partido.nombreEquipo2}, (videos)=>
		{
			this.setState({
				highlights:videos,
			});	
		});
		
	}
	changeVideo(idVideo){
		this.setState({
			videoId:idVideo,
		});
	}

	getURL(){
		let url="https://www.youtube.com/embed/"+this.state.videoId+"?autoplay=1";
		return url;
	}

	render()
	{
		if(this.state.highlights.length<1 ||this.state.goles.length<1)
		{
			this.searchVideos();
		}

		if(Meteor.userId())
		{
			return(
			<div className="container vidGris">
				<div  className="embed-responsive embed-responsive-16by9">
            		<iframe className="embed-responsive-item" src={this.getURL()} ></iframe>
          		</div>
          		<hr></hr>
				<div className="videos">
					<div className="row">
						<h4> Goles</h4>
						<Video goles={this.state.goles} changeVideo={this.changeVideo.bind(this)}/>
						<hr></hr>
					</div>
					<div className="row">
						<h4> Highlights</h4>
						<Video high={this.state.highlights} changeVideo={this.changeVideo.bind(this)}/>
						<hr></hr>
					</div>
				</div>
			</div>
			);
		}
		else{
			return <Redirect to="/" />;
		}
	}
}