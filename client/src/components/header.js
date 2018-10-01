import React, { Component } from 'react';



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
        <a className="nav-link" href="admin">Admin</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="student">Dashboard</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Student Resources
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a className="dropdown-item"  href="/schedule">Schedule</a>
          <a className="dropdown-item"  href="/report">Report</a>
          <a className="dropdown-item" href="/hospitalsmap">Clinical Sites</a>
          <a className="dropdown-item"  href="/help">FAQ</a>
        </div>
        </li> 
      <li className="nav-item">
        <a className="nav-link" href="Login">Log In</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/logout">Log Out</a>
      </li>
    </ul>
  </div> 
  </nav>   
    );
  }
}

export default Header;
