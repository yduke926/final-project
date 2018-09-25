// import React from 'react';
import React, { Component } from 'react';
import axios from 'axios';
// var axios = require("axios");

class Login extends React.Component {
    
    state = {}

    setValue = (e) => {   
        this.setState({[e.target.name]: e.target.value})
    }

    login = (e) => {
        e.preventDefault()
        axios.post('/users/login', this.state).then((res) => {
            localStorage.setItem('token', res.data.token) 
            window.location.pathname = '/student';
        })
    }

  render() {
    return (
        <div className="bg-image-container">
        <div className="signin-container">
        <div className="signin-form">

            <h1>Log In</h1>
                <div>
                    <div className="form-group">
                        <label className="exampleInputEmail1">Email address:</label>
                        <input type="email" onChange={(e)=> this.setValue(e)} className="form-control my-form-border" id="exampleInputEmail1" aria-describedby="emailHelp" name = 'email' placeholder="" required />
                        
                    </div>
                    <div className="form-group">
                        <label className="exampleInputPassword1">Password</label>
                        <input type="password" onChange={(e)=> this.setValue(e)} className="form-control my-form-border" id="exampleInputPassword1" name = 'password' placeholder="" required />
                    </div>
                    <button className="btn my-submit-btn btn-secondary" onClick={this.login}>Submit</button>
                </div>
                <br></br>
                <h6><a href="Register">Register</a></h6>
            </div>
         </div>
    </div>
    );
   }
  }

export default Login;