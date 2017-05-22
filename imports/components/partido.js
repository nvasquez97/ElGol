import React, { Component } from 'react';

export default class Partido extends Component {


	render()
	{
		return(
			<div className="container col-md-6">
				<hr></hr>
				<div className="partido">
					<div className="partidoI">
						<h5> Millonarios &emsp;<span>1</span></h5>
					</div>
					<div className="partidoD">
						<h5> <span>1</span>&emsp;	Santa Fé</h5>
					</div>
				</div>
				<hr></hr>
			</div>
			);
	}
}