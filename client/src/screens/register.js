import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    state = {}

    setValue(e) {   
        this.setState({[e.target.name]: e.target.value})
    }

    register(e) {
        e.preventDefault()
        axios.post('/users/signup', this.state).then((res) => {
            localStorage.setItem('token', res.data.token) 
            window.location.pathname = '/';
        })
    }
  render() {
    return (
        <div className="registration-container">
        <div className="registration-form">

            <h1>Register</h1>
                <form onSubmit= {(e)=> this.register(e)}>
                <div className="form-group">
                <label className="inputName" >Name</label>
                <input type="name" name="name" onChange={(e)=> this.setValue(e)} id="inputName" className="form-control my-form-border" placeholder="" required />
                    </div>
                    <div className="form-group">
                        <label className="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" onChange={(e)=> this.setValue(e)} className="form-control my-form-border" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" required />
                       
                    </div>
                    <div className="form-group">
                        <label className="exampleInputPassword1">Password</label>
                        <input type="password" name="password" onChange={(e)=> this.setValue(e)} className="form-control my-form-border" id="exampleInputPassword1" placeholder="" required />
                    </div>
                    <button type="submit" className="btn my-submit-btn btn-secondary">Submit</button>
                    </form>
                    <br></br>
                    <h6><a href="LogIn">Log In</a></h6>
    </div>
    </div>
    );
   }
  }

export default Register;