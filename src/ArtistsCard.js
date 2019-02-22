import React, { Component } from 'react';
import Card from './Card.js';
import ArtistTrack from './ArtistTrack.js';
import { Button } from 'reactstrap';

export default class ArtistCard extends Component {

	constructor(props) {
		super(props);
		this.state = {
      tracks: []
		}

		this.getArtistTracks = this.getArtistTracks.bind(this);
	}

	getArtistTracks() {
		const BASE_URL = 'https://peaceful-badlands-98440.herokuapp.com';

		const options = {
          method: 'get',
          credentials: 'include'
        }

		fetch(`${BASE_URL}/artists/${this.props.id}/tracks`, options)
			.then(res => res.json())
      .then(data => this.setState({tracks: data}));

  }
  
  renderCard() {
    return (
      <Card className="text-center">
        <h4>{this.props.name}</h4>
				<h5>{this.props.genre}</h5>
				<Button onClick={this.getArtistTracks} className="">Ouça!</Button>
				<ul>
					{this.state.tracks.map((track) => ArtistTrack(track))}
				</ul>
		  </Card>)
  }

  renderSpinner() {
    return (
      <p className="text-center">loading...</p>
    )
  }
	
	render() {
      return (
        <div>
        {this.state !== [] 
        ? this.renderCard()
        : this.renderSpinner()}
        </div>
        )
	}
}