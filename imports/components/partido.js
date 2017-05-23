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
							<h5> Millonarios &emsp;<span>2</span></h5>
						</div>
						<div className="partidoD">
							<h5> &emsp; <span>0</span>&emsp;	Patriotas</h5>
						</div>
					</div>
					<hr></hr>
				</div>
				{this.state.video?
					<Videos />
					:
					<span></span>
				}
			</div>
			);
	}
}