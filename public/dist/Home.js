import React, { Component } from 'react';

export default class Home extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className="container-fluid my-5">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h2>Bem-vinde!</h2>
						<p>Conheça nossa base de dados de artistas utilizando a PedeToca API! ;)</p>
					</div>
				</div>
			</div>
			)
	}
}