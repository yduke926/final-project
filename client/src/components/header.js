import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Header extends Component {
  render() {
    return (
      <nav className="navbar my-nav navbar-expand-lg ">
  <a className="navbar-brand" href="#"><img src="https://s3.amazonaws.com/meditrack/MTlogo.png" alt="logo" /></a>
  <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#"><Link to="/">Home</Link><span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="#">Link1</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="#">Link2</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="#">Link3</Link></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <Link to="#">Dropdown Menu</Link>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a className="dropdown-item"  href="#">Action</a>
          <a className="dropdown-item"  href="#">Another action</a>
          <a className="dropdown-item"  href="#">Another action></a>
          <a className="dropdown-item"  href="#">Last action</a>
        </div>
      </li>
    </ul>
  </div> 
  </nav>  
    );
  }
}

export default Header;
