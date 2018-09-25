import React, { Component } from 'react';
import styles from '../student.css';

class Student extends Component {
    render (){
        return (
            <div>
            <div className="welcome-student-dash">
                <div className="welcome-info">
                    <p className="welcome-text">Welcome to the Student Dashboard</p>
                    </div>
                    </div>
                <div className="my-vertical-nav">
                <div className="row vertical-test">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" href="/student"><i className="fa fa-home" aria-hidden ="true"></i>Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/report"><i className="fa fa-sticky-note-o" aria-hidden="true"></i>Report</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/schedule"><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Schedule</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/hospitalsmap"><i class="fa fa-hospital-o" aria-hidden="true"></i>Hospital Map</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/help"><i className="fa fa-question-circle" aria-hidden="true"></i>Help</a>
                            </li>
                         </ul>
                    </div>
                </div>
            <div className= "jumbotron">
             
                <container className="contentArea">
                    <div className="cards">
                        <div className="card">
                            <span><i className="fa fa-user-circle-o fa-lg" ></i></span>
                            <span className="user-name">'student name'{this.props.name}</span>
                            <span className="title">'title if applicable'{this.props.title}</span>
                        </div>
                        
                    </div>
                </container>
            </div>
           </div> 
        )
    };
}



export default Student;
