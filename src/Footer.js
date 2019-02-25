import React from 'react';
import { Row } from 'reactstrap';

const Footer = () => {
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

export default Footer;