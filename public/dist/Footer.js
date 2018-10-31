import React, { Component } from 'react';
import { Row } from 'reactstrap';

export default class Footer extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<footer className="container-fluid">
				<Row>
					<div className="col-lg-12">
						<p className="footer-message text-white text-center">A cool site made with React & PedeToca API!</p>
					</div>
				</Row>
			</footer>
			)
	}
}
