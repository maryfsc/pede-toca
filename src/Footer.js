import React from 'react';
import { Row } from 'reactstrap';

const Footer = (props) => {
  return (
    <footer className="container-fluid" id="footer">
      <Row>
        <div className="col-lg-12">
          <p className="footer-message text-white text-center">{props.content}</p>
        </div>
      </Row>
    </footer>
    )
}

export default Footer;