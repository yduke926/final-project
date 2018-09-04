import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
// var axios = require("axios");

class Login extends React.Component {
    
    state = {}

    setValue(e) {   
        this.setState({[e.target.name]: e.target.value})
    }

    login() {
        axios.post('/users/login', this.state).then((res) => {
            localStorage.setItem('token', res.data.token) 
            window.location.pathname = '/home';
        })
    }

  render() {
    return (
        <div className="signin-container">
        <div className="signin-form">

            <h1>Log In</h1>
                <form>
                    <div className="form-group">
                        <label className="exampleInputEmail1">Email address:</label>
                        <input type="email" onChange={this.handleEmailChange} className="form-control my-form-border" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" required />
                        
                    </div>
                    <div className="form-group">
                        <label className="exampleInputPassword1">Password</label>
                        <input type="password" onChange={this.handlePasswordChange} className="form-control my-form-border" id="exampleInputPassword1" placeholder="" required />
                    </div>
                    <button type="submit" className="btn my-submit-btn btn-secondary" onClick={this.signIn}>Submit</button>
                    </form>
                    <br></br>
                    <h6><Link to="Register">Register</Link></h6>
    </div>
    </div>
    );
   }
  }

export default Login;