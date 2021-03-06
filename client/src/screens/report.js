import React, { Component } from 'react';
import axios from 'axios';

class Report extends React.Component {

    state = {
        specialty: "Obstetrics"
    }

    setValue(e) {   
        this.setState({[e.target.name]: e.target.value})
    }

save() {
    let authToken = window.localStorage.token;

    axios.post('/studentreports', this.state,
        {
            headers: { Authorization: "Bearer " + authToken }
        }).then(() => {
            window.location = '/student';
        })
}


render(){
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
                                <a className="nav-link" href="/student"><i className="fa fa-home" aria-hidden ="true"></i>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/report"><i className="fa fa-sticky-note-o" aria-hidden="true"></i>Report</a>
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
            <div className= "jumbotron">
                
                <h3>Please use the following form for submission of student reports:</h3><br></br><br></br>
                <form>
                    <div className="report-form-container">
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Year:</label>
                            <select className="form-control" id="exampleFormControlSelect1" name = 'year' required onChange={(e) => this.setValue(e)}>
                            <option>M3</option>
                            <option>M4</option>
                            </select>
                        </div>
                        <div className="form-group">
                        <label for="exampleFormControlInput1">Specialty:</label>
                            <select className="form-control" id="exampleFormControlSelect1" name = 'specialty' required onChange={(e) => this.setValue(e)}>
                                <option value="Obstetrics">Obstetrics</option>
                                <option value="Pediatrics">Pediatrics</option>
                                <option value="Surgery">Surgery</option>
                                <option value="Family Medicine">Family Medicine</option>
                            </select>      
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Report</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" name = 'reportText' required onChange={(e) => this.setValue(e)}></textarea>
                        </div>
                    </div>
                </form>
                <button type="button" className="btn btn-secondary"onClick={() => this.save()}>Submit</button>
                
             </div>
        </div>
        )
    };
}
export default Report;
