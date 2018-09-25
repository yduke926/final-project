import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import './App.css';
import Login from './screens/login';
import Register from './screens/register';
import Header from './components/header';
import Footer from './components/footer';
import Student from './screens/Studentdash';
import Admin from './screens/Admin';
import Help from './screens/help';
import Report from './screens/report';
import Reports from './screens/reports';
import Schedule from './screens/schedule';
import Schedules from './screens/schedules';
import Students from './screens/students';
import Home from './screens/home';
import HospitalsMap from './screens/hospitalsmap';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/student' component={Student}/>
        <Route exact path='/admin' component={Admin}/>
        <Route exact path='/help' component={Help}/>
        <Route exact path='/report' component={Report}/>
        <Route exact path='/reports' component={Reports}/>
        <Route exact path='/schedule' component={Schedule}/>
        <Route exact path='/schedules' component={Schedules}/>
        <Route exact path='/students' component={Students}/>
        <Route exact path='/hospitalsmap' component={HospitalsMap}/>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
