import React, { Component } from 'react';
import './ArtistsCard.css';
import Card from './Card.js';
import { Button, Badge } from 'reactstrap';


function ArtistTrack(props) {

	return (
		<li className="mb-2">{props.title}
			<div>
				<iframe title={props.title} src={props.url} /><br />
 				<Button color="secondary" onClick="">
					Like<Badge color="secondary">0</Badge>
				</Button>
			</div>
		</li>
		)
}

// function countLikes(props) {
// 	let likeClick =+ 1
// 		.then(this.setState({likes: likeClick}));
// }

export default class ArtistCard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tracks: []
		}

		this.getArtistTracks = this.getArtistTracks.bind(this);
		// this.countLikes = this.countLikes.bind(this);
	}

	getArtistTracks(event) {
		const BASE_URL = 'https://peaceful-badlands-98440.herokuapp.com';

		const options = {
          method: 'get',
          credentials: 'include'
        }

		fetch(`${BASE_URL}/artists/${this.props.id}/tracks`, options)
			.then(res => res.json())
      .then(data => this.setState({tracks: data}));

	}
	
	render() {
			return (
				<Card className="text-center">
					<h4>{this.props.name}</h4>
					<h5>{this.props.genre}</h5>
					<Button onClick={this.getArtistTracks} className="">Ouça!</Button>
					<ul>
						{this.state.tracks.map((track) => ArtistTrack(track))}
					</ul>
			</Card>
		)

	}
}