import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Header extends Component {
  render() {
    return (
      <nav className="navbar my-nav navbar-expand-lg">
        <a className="navbar-brand" href="/"><img src="https://s3.amazonaws.com/meditrack/MTlogo.png" alt="logo" /></a>
        <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>
     <div className="collapse navbar-collapse" id="navbarNavDropdown">
         <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="Login">Dashboard</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="Login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="Register">Registration</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Log Out</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown Menu
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a className="dropdown-item"  href="#">One</a>
          <a className="dropdown-item"  href="#">Two</a>
          <a className="dropdown-item"  href="#">Three</a>
          <a className="dropdown-item"  href="#">Four</a>
        </div>
      </li>
    </ul>
  </div> 
  </nav>   
    );
  }
}

export default Header;
