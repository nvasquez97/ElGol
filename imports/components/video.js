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
						return (<div className="row gris" key={gol.id.videoId}>
								<a onClick={() => this.props.changeVideo(gol.id.videoId)}><p> {gol.snippet.title}</p></a>
							</div>
							)
					}
					return (<div className="row gris" key={gol.id.videoId}>
								<a onClick={() => this.props.changeVideo(gol.id.videoId)}><p>{gol.snippet.title}</p></a>
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
						return (<div className="row gris" key={gol.id.videoId}>
								<a onClick={() => this.props.changeVideo(gol.id.videoId)}><p> {gol.snippet.title}</p></a>
							</div>
							)
					}
					return (<div className="row gris" key={gol.id.videoId}>
								<a onClick={() => this.props.changeVideo(gol.id.videoId)}><p> {gol.snippet.title}</p></a>
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
