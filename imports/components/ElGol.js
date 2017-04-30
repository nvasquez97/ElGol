import React, { Component } from 'react';

export default class UserForm extends Component{

	render()
	{
		return(
			<div className="container formU">
				{this.props.estado}
			</div>
			);
	}
}