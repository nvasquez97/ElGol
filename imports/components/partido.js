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
					<div className="partido">
						<div className="partidoI">
							<h5 className="tPartido"> {this.props.partido.local} &emsp;<span>{this.props.partido.goleslocal}</span></h5>
						</div>
						<div className="partidoD">
							<h5 className="tPartido"> &emsp; <span>{this.props.partido.golesvisitor}</span>&emsp;	{this.props.partido.visitor}</h5>
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