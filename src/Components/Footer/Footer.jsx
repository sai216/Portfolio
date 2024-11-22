import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_name">
          <h2>Saikiran Tirumani</h2>
        </div>
        <div className="footer_links">
          <BsInstagram className="footer_icon" />
          <LiaLinkedin
            className="footer_icon"
            onClick={() => window.open('https://www.linkedin.com/in/saikirantirumani', '_blank')}
          />
        </div>
      </div>
      <hr />
      <p className="copy">Copyright © Saikiran Tirumani 2024. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
