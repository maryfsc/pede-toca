import React, { Component } from 'react';
import Menu from './Menu.js';

export default class Header extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<header className="container-fluid">
				<div className="row">
					<div className="col-lg-12">
						<h1 className="text-center text-white title">PedeToca</h1>
					</div>
				</div>
				<Menu />
			</header>
			)
	}
}