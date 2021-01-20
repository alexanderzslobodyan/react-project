import React from 'react';

import './index.scss';
import logo from './../../shared/logo_C_24.png'
import {Link, } from 'react-router-dom';


const Header = () => {
    return (
      <nav className="header">
          <div className="header__nav left">
            <Link to="/">
              <div className="header__nav-content">
                <img src={logo} alt="Logo"/>
              <p>Code Market</p>
              </div>
            </Link>
              <div className="header__nav-content">
              <div className="lang">
                
              </div>    
              </div>
          </div>
          <div className="header__nav right">
            <Link to="/cards">
                <div className="header__nav-content">
                <p>FAQ</p>
                </div>
            </Link>
            <Link to="/">
                <div className="header__nav-content">
                <p>FEEDBACK</p>
                </div>
            </Link>
          </div>
      </nav>
    );
  }

export default Header 