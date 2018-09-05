<<<<<<< HEAD
import React from 'react';
import axios from 'axios';


render ();
{
    return (
        <div>
            <h1>Student Name</h1>
        </div>
    )
};
=======
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styles from '../student.css';

class Student extends Component {
    render (){
        return (
            <div className= "jumbotron">
                <div className="heading">
                        <h1 className="dash">Dashboard</h1>
                        <h6 className="welcome">Welcome to the Student Dashboard</h6>
                    </div>
                <div className="Menu">
                    <nav>
                        <a href="/student" class="active"><i className="fa fa-home" aria-hidden ="true"></i> Home</a>
                        <a href="/report"><i className="fa fa-sticky-note-o" aria-hidden="true"></i>Report</a>
                        <a href="/schedule"><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Schedule</a>
                        <a href="/help"><i className="fa fa-question-circle" aria-hidden="true"></i>Help</a>
                    </nav>
                </div>
                <container className="contentArea">
                    <div className="cards">
                        <div className="card">
                            <span><i className="fa fa-user-circle-o fa-lg" ></i></span>
                            <span className="user-name">'student name'{this.props.name}</span>
                            <span className="title">'title if applicable'{this.props.title}</span>
                        </div>
                        <div className="card-two">
                            <h6>Completion</h6>
                            <span className="specialty">Obstetrics</span>
                            <div className= "progress">
                                <div className="progress-bar bg-success w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                            </div>
                            <span className="specialty">Pediatrics</span>
                            <div className= "progress">
                                <div className="progress-bar bg-success w-25" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">25%</div>
                            </div>
                            <span className="specialty">Surgery</span>
                            <div className= "progress">
                                <div className="progress-bar bg-success w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">50%</div>
                            </div>
                            <span className="specialty">Family Medicine</span>
                            <div className= "progress">
                                <div className="progress-bar bg-success w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                        </div>
                    </div>
                </container>
            </div>
        )
    };
}



export default Student;
>>>>>>> master
