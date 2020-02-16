import React from 'react';
import PropTypes from 'prop-types';
import placeholder from '../images/placeholder/footer.jpg';

const Footer = (props) => {
  return (
    <footer className="app-footer">
      <a href="https://sleeper.app/leagues/515547724327690240" target="_blank">
        <img src={placeholder} className="placeholder" alt="" />
      </a>
    </footer>
  );
};

export default Footer;
