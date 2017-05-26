import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Videos from './videos.js';
export default class Partido extends Component {
	
	constructor(props)
	{
		super(props);
		this.state={
			video:false,
		}
	}
	

	irAVideo()
	{	
		let vid = !this.state.video;
		this.setState({
			video:vid
		});
	}

	render()
	{
			return(
			<div className="container col-md-6" >
				<div className="gris" title="¡Haz click!" onClick={this.irAVideo.bind(this)}>
					<hr></hr>
					<h5 className="tEquipo"> <span><i className="fa fa-video-camera" aria-hidden="true"></i> <strong>{this.props.partido.torneo}</strong></span> </h5>
					<div className="partido">
						<div className="partidoI">
							<h5 className="tPartido"> {this.props.partido.local}</h5>
						</div>
						<div classname="partidoM">
							<h5 className="tPartido"><span>{this.props.partido.goleslocal} - {this.props.partido.golesvisitor}</span> </h5>
						</div>
						<div className="partidoD">
							<h5 className="tPartido"> {this.props.partido.visitor}</h5>
						</div>
					</div>
					<hr></hr>
				</div>
				{this.state.video?
					<Videos partido={this.props.partido}/>
					:
					<span></span>
				}
			</div>
			);
	}
}