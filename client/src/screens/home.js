import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Home extends Component {
  render() {
    return (
        <div className="home-container">
        <div className="home-logo">
        <img src="https://s3.amazonaws.com/meditrack/MTlogo.png" alt="logo" />
    </div>
    </div>
    );
   }
  }

export default Home;