import React, { Component } from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import './App.css';
import Login from './screens/login';
import Register from './screens/register';
import Header from './components/header';
import Footer from './components/footer';
import Student from './screens/Studentdash';
import Admin from './screens/Admin';
import Home from './screens/home';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <h1 className="App-intro">
        {/* Your main content will go here! */}
        </h1>
      
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/student' component={Student}/>
        <Route exact path='/admin' component={Admin}/>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
