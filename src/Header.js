import React from 'react';
import Menu from './Menu';

const Header = () => {
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

export default Header;
