import React, { Component } from 'react';

import { Link } from "react-router-dom";
import axios from 'axios';
import report from './report';
import { readFile } from 'fs';
import styles from '../student.css';


// let editButtons = document.querySelectorAll('.editBtn');

// for (let i = 0; i < editButtons.length; i++) {
//     editButtons[i].onclick = () =>{

//         edit(this.state.studentreports.user._id)
//     }
// }

class StudentDash extends React.Component {
    constructor(props) {super(props)
        this.state={}
    // this.loadStudentReports()
}
// loadStudentReports =() => {
// axios.get('/student/load').then((res) => {
//     console.log(res)
//     this.setState({
//         studentreports:res.data
//     })
// })
// }
setValue(e) {   
    this.setState({[e.target.name]: e.target.value})
}
    componentDidMount() {
                let authToken = window.localStorage.token;
                console.log(authToken);                
                let payload = (authToken) ? JSON.parse(window.atob(authToken.split('.')[1])) : null;
                axios.get(`/studentreports/${payload.id}`).then((res) => {
                
                    let reports = {};

                    if(res.data) {
                        res.data.forEach(rep => {
                            if(reports.hasOwnProperty(rep.specialty)) {
                                reports[rep.specialty].push(rep);
                            } else {
                                reports[rep.specialty] = [rep];
                            }
                        });
                    }

                    console.log(reports);

                    this.setState({
                        userID: payload.id,
                        studentreports: reports
                    })
            })
    }
            save() {
                    axios.post('/studentreports', this.state).then(() => {
                        window.location.reload()
                        window.location.pathname = '/student';
                    })
                }   
                edit(sr) {
                         let newStudentreport = window.prompt(`Update Studentreport: ${sr.description}`);
                         this.setState({newStudentreport: newStudentreport}, () =>
                         {
                             axios.put(`/studentreports/${sr._id}`,
                            this.state).then(() => {
                                window.location.reload();
                            })
                         })
                     } 
                     delete(sr) {
                             axios.delete(`/studentreports/${sr._id}`).then(() => {
                            window.location.reload()
                            })
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
                <div className="Menu">
                    <nav>
                        <a href="/student" className="active"><i className="fa fa-home" aria-hidden ="true"></i> Home</a>
                        <a href="/report"><i className="fa fa-sticky-note-o" aria-hidden="true"></i>Report</a>
                        <a href="/schedule"><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Schedule</a>
                        <a href="/help"><i className="fa fa-question-circle" aria-hidden="true"></i>Help</a>
                    </nav>
                </div>
              
                <div>
                <div class="accordion" id="accordionExample">
                {(this.state.studentreports) ? Object.keys(this.state.studentreports).map((spec) => (
                   
                    <div class="card" key={spec}>
                        <div class="card-header" id={"heading" + spec}>
                            <h5 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapse" + spec.replace(' ', '')} aria-expanded="true" aria-controls="collapseOne">
                                {spec}
                                </button>
                            </h5>
                        </div>
                        <div id={"collapse" + spec.replace(' ', '')} class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                <div class="list-group"> 
                                {this.state.studentreports[spec].map(rep => (
                                    <a key={rep._id} href="#" class="list-group-item flex-column align-items-start">
                                        <div class="d-flex justify-content-between">
                                            <h5 class="mb-1">{rep.date}</h5>
                                        </div>
                                        <p class="mb-1">{rep.report}</p>
                                        <div class="btn-group" role="group" aria-label="Basic example">
                                            <button type="button" class="btn btn-secondary">Edit</button>
                                            <button type="button" class="btn btn-secondary">Delete</button>
                                        </div>
                                        <small>{rep._id}</small>
                                    </a>
                                
                                ))}
                                </div>
                            </div>
                        </div>

              
                        

                    </div>
                    
                )):""}
                </div>
        </div>
    </div>
    );
        {/*<div class="card">
            <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Pediatrics
                </button>
            </h5>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
                Report data..
            </div><br></br>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">Edit</button>
                <button type="button" class="btn btn-secondary">Delete</button><br></br>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" id="headingThree">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               Surgery
                </button>
            </h5>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
                Report data..
            </div><br></br>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">Edit</button>
                <button type="button" class="btn btn-secondary">Delete</button><br></br>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" id="headingFour">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Family
                </button>
            </h5>
            </div>

            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
                Report data..
            </div><br></br>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">Edit</button>
                <button type="button" class="btn btn-secondary">Delete</button><br></br>
                </div>
            </div>
        </div>
        </div> 
           </div> */}
    };
    
                    
                
}


export default StudentDash;
