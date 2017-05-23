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
			videoId:"fKopy74weus",
		}
	}
	searchVideos()
	{
		Youtube({key:API_K, term:'millonarios patriotas', channelId:'UCZjpA3YBPXvJv3pg4SPEjfw'}, (videos)=>
		{	
			console.log(videos)	;
			this.setState({
				goles:videos,
			});	
		});
		Youtube({key:API_K, term:'millonarios patriotas'}, (videos)=>
		{
			this.setState({
				highlights:videos,
			});	
		});
		
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
			<div className="container">
				<div  className="embed-responsive embed-responsive-16by9">
            		<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/{this.state.videoId}?autoplay=1" ></iframe>
          		</div>
          		<hr></hr>
				<div className="videos">
					<div className="row">
						<h4> Goles</h4>
						<Video goles={this.state.goles} />
						<hr></hr>
					</div>
					<div className="row">
						<h4> Highlights</h4>
						<Video high={this.state.highlights} />
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