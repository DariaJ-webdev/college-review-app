import '../styles/nav.css';
import personalBrandLogo from '../assets/personalbrand_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

function Nav() {
  return (      
       <header className="Nav-header">
        <div className="header-wrapper-left">
        <img src={personalBrandLogo} className="personalbrand_logo" alt="frontendwebcrafX" />
        </div>
        <div className="header-wrapper-right">
        <a href="https://github.com/DariaJ-webdev"  
        className="navlink" target="_blank">About the Developer<FontAwesomeIcon icon={faGithub} size="2x"className="kitty" /></a>
        
        </div>  
      </header>
  );
}

export default Nav