import React, { Component } from 'react';
import Youtube from 'youtube-api-search';



export default class Video extends Component{

	constructor(props)
	{
		super(props);
	}
	render()
	{
		if(this.props.goles)
		{
			return (
			<div>
			{this.props.goles.map(gol=>{
					if(gol === this.props.goles[0] || gol === this.props.goles[1])
					{
						return (<div className="col-md-3" key={gol.id.videoId}>
								<p> Soy varios videos de YT</p>
							</div>
							)
					}
					return (<div className="col-md-2" key={gol.id.videoId}>
								<p> Soy varios videos de YT</p>
							</div>)
				})}
			</div>
			);	
		}
		else if(this.props.high)
		{
			return (
			<div>
			{this.props.high.map(gol=>{
					if(gol === this.props.high[0] || gol === this.props.high[1])
					{
						return (<div className="col-md-3" key={gol.id.videoId}>
								<p> Soy varios videos de YT</p>
							</div>
							)
					}
					return (<div className="col-md-2" key={gol.id.videoId}>
								<p> Soy varios videos de YT</p>
							</div>)
				})}
			</div>
			);	
		}
		else
		{
			return <p> No sirvió </p>
		}
	}

}
