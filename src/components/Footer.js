import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>AI Engineering Research Hub</h3>
          <p>Documenting my journey as a forward-deployed AI engineer, focusing on Uruguay's AI development landscape.</p>
        </div>
        <div className="footer-section">
          <h3>Uruguay Focus</h3>
          <ul>
            <li>Montevideo Smart Cities</li>
            <li>Local AI Talent Development</li>
            <li>Responsible AI in Uruguay</li>
            <li>Community Building</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Exploring opportunities to contribute to Uruguay's AI ecosystem</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AI Engineering Research Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;