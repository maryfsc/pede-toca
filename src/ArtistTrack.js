import React from 'react';
import Likes from './Likes.js';


const ArtistTrack = (props) => {
	return (
		<li className="mb-2">{props.title}
			<div>
				<iframe title={props.title} src={props.url} /><br />
 				<Likes />
			</div>
		</li>
		)
}

export default ArtistTrack;
