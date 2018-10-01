import React, { Component } from 'react';

import { Link } from "react-router-dom";
import axios from 'axios';
import report from './report';
import { readFile } from 'fs';
import styles from '../student.css';
import ReportList from '../components/reportList'


// let editButtons = document.querySelectorAll('.editBtn');

// for (let i = 0; i < editButtons.length; i++) {
//     editButtons[i].onclick = () =>{

//         edit(this.state.studentreports.user._id)
//     }
// }

class StudentDash extends React.Component {
    state = {}

    componentDidMount() {
        let authToken = window.localStorage.token;              
        let payload = (authToken) ? JSON.parse(window.atob(authToken.split('.')[1])) : null;

        axios.get(`/studentreports/${payload.id}`).then((res) => {
            this.setState({
                studentreports: res.data
            });
        });

        axios.get(`/users/${payload.id}`).then((res) => {
            if(res.data.length) {
                this.setState({currentUser: res.data[0]});
            }
        });
    }

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
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="/student"><i className="fa fa-home" aria-hidden ="true"></i>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/report"><i className="fa fa-sticky-note-o" aria-hidden="true"></i>Report</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/schedule"><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Schedule</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link" href="/hospitalsmap"><i className="fa fa-hospital-o" aria-hidden="true"></i>Clinical Sites</a>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/help"><i className="fa fa-question-circle" aria-hidden="true"></i>Help</a>
                        </li>
                        </ul>
                </div>
            </div>           
            <ReportList reports={this.state.studentreports} user={this.state.currentUser} />
        </div>
    );    
    };             
}

export default StudentDash;
