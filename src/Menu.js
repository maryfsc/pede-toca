import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {

  render() {
    return (
      <div className="menu-container">
        <Nav className="justify-content-around p-2 text-light">
          <NavItem>
            <Link to='/' className="btn btn-outline-secondary">Home</Link>
          </NavItem>
          <NavItem>
            <Link to='/artists' className="btn btn-outline-secondary">Artistas</Link>
          </NavItem>
          <NavItem>
            <Link to='/contact' className="btn btn-outline-secondary">Contato</Link>
          </NavItem>
          <NavItem>
            <Link to='/about' className="btn btn-outline-secondary">Sobre</Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
}