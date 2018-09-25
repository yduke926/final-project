import React, { Component } from 'react';
import Toggle from '../components/Toggle';

class Help extends Component {

    
    render (){
        return(
          <div>
              <div className="welcome-student-dash">
              <div className="welcome-info">
              <p className="welcome-text">Welcome to the Student Dashboard</p>
              </div>
              </div>
           <div className="my-vertical-nav">
           <div className="row vertical-test">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="/student"><i className="fa fa-home" aria-hidden ="true"></i>Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/report"><i className="fa fa-sticky-note-o" aria-hidden="true"></i>Report</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/schedule"><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Schedule</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="/help"><i className="fa fa-question-circle" aria-hidden="true"></i>Help</a>
                        </li>
                      </ul>
                  </div>
                </div>
            <div className= "jumbotron">
                  <div className="help-container help-page">
                  <h1>Frequently Asked Questions</h1><br></br>
                  <div className="questions-container">
                  <Toggle render={({on, toggle})=>(
                    <div>
                      <ul className="list-group">
                    </ul>
                    <li onClick={toggle}className="list-group-item my-questions">1) How do I register as a new user?</li>
                      {on && <li className="list-group-item answer-item">•Click the MediTrack logo in the top left corner of the screen and you will be taken to the registration screen.</li>        
                    }
                  </div>        
                )} 
                />
                  <Toggle render={({on, toggle})=>(
                  <div>
                    <li onClick={toggle}className="list-group-item my-questions">2) Where can an Administrator access student reports?</li>
                      {on && <li className="list-group-item answer-item">•From the Administration Dashboard click on Reports.</li>      
                    }     
                  </div>  
                )} 
                />
                  <Toggle render={({on, toggle})=>(
                  <div>
                    <li onClick={toggle}className="list-group-item my-questions">3) Where can I update my student schedule?</li>
                      {on && <li className="list-group-item answer-item">•From the Student Dashboard click on Schedules.</li>
                    }
                  </div>  
                )} 
                />
                  <Toggle render={({on, toggle})=>(
                  <div>
                    <li onClick={toggle}className="list-group-item my-questions">4) Where can I find the Student Reports form?</li>
                      {on && <li className="list-group-item answer-item">•From the Student Dashboard click on Reports.</li>      
                    }     
                  </div>  
                )} 
                />
                  <Toggle render={({on, toggle})=>(
                  <div>
                    <li onClick={toggle}className="list-group-item my-questions">5) How can I log out of my session?</li>
                      {on && <li className="list-group-item answer-item">•In the top right corner of the navigation bar click Log Out.</li>      
                    }     
                  </div>  
                )} 
                />
              </div>
            </div>  
          </div>
        </div>
      );
    }
  }
export default Help;