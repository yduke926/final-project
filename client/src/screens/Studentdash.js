import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styles from '../student.css'; 
import axios from 'axios';
import report from './report';

// let editButtons = document.querySelectorAll('.editBtn');

// for (let i = 0; i < editButtons.length; i++) {
//     editButtons[i].onclick = () =>{

//         edit(this.state.studentreports.user._id)
//     }
// }

class StudentDash extends React.Component {
    constructor(props) {super(props)
        this.state={studentreports:[]
    }
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
                    console.log(res)
                    this.setState({
                        userID: payload.id,
                        studentreports: res.data
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
            <div className= "jumbotron">
                <div className="heading">
                        <h1 className="dash">Dashboard</h1>
                        <h6 className="welcome">Welcome to the Student Dashboard</h6>
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
        <div class="card">
            <div class="card-header" id="headingOne">
            <h5 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Obstetrics
                </button>
            </h5>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body" {(this.state.studentreports) ? this.state.studentreports.map((user, index) => (
                    <option key={user.specialty}></option>
                )):""}>
               
            </div>
            <div class="card-body">
                Report data #2..
            </div><br></br>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">Edit</button>
                <button type="button" class="btn btn-secondary">Delete</button><br></br>
                </div>
            </div>
        </div>
        
        <div class="card">
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
      </div>

                
               
            </div>
            
        
     );  
    };
    
                    
                
}


export default StudentDash;
