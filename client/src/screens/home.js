import React, { Component } from 'react';



class Home extends Component {
  render() {
    return (
        <div className="home-container">
        <div className="home-logo">
        <img src="https://s3.amazonaws.com/meditrack/MTlogo.png" alt="logo" />
        <a className="btn home-button btn-outline-secondary" href="Login" role="button">Login</a><a className="btn home-button-2 btn-outline-secondary" href="Register" role="button">Register</a>
    </div>
    </div>
    );
   }
  }

export default Home;