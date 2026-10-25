import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>AI Engineering Research Hub</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#research">Research</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#daily-research">Daily Research</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;