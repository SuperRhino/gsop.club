import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.png';

const handleClick = (e) => {
  e.preventDefault();
  alert("💥 boom! great job clickin' that shit, stud");
};

const Header = (props) => {
  return (
    <header className="app-header">
      <a
        className="app-link"
        href="https://sleeper.app/leagues/515547724327690240"
        target="_blank"
      >
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          The Greatest Show On Paper
        </p>
      </a>
      <button type="button" className="app-menu-button" onClick={handleClick}>&#9776;</button>
    </header>
  );
};

export default Header;
