import React from 'react';
import './Footer.css'; // Make sure to create this CSS file
import typography from '../../assets/img/TypographyFixed.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-email">
          {/* Email section, if needed */}
        </div>
        <div className="footer-nav">
          <ul className="footer-links">
            <li><a href="#link1"><i className="icon1"></i> About Us</a></li>
            <li><a href="#link2"><i className="icon2"></i> Contact Us</a></li>
            {/* Inserted the typography image here */}
            <img src={typography} className="footer-typography" alt="Sof Hayom Typography" />
            <li><a href="#link3"><i className="icon3"></i> Email</a></li>
            <li><a href="#link4"><i className="icon4"></i> Home Page</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
