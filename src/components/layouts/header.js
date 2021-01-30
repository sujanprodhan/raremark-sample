import React, { Component } from 'react';
import './layouts.css';

class Header extends Component {
  render() {   
    return (
      <div className="header">
        <div className="top-menu">
            <ul>
                <li><a href="/"> Home </a></li>
                <li><a href="/landing-page"> Landing Page </a></li>
                <li><a href="/details"> Product Details</a></li>
                <li><a href="/search"> Search</a></li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Header;