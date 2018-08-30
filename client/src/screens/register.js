import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Register extends Component {
  render() {
    return (

        <div className="registration-form">

            <h1>Register</h1>
                <form>
                <div className="form-group">
                <label className="inputName" >Name</label>
                <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                        <label className="exampleInputEmail1">Email address</label>
                        <input type="email" onChange={this.handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label className="exampleInputPassword1">Password</label>
                        <input type="password" onChange={this.handlePasswordChange} className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                    </div>
                    <button type="submit" className="btn btn-secondary">Submit</button>
                    </form>
                    <br></br>
                    <h6><Link to="LogIn">Log In</Link></h6>
    </div>
    );
   }
  }

export default Register;