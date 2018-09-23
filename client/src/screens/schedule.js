import React, { Component } from 'react';

class Schedule extends Component {
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
                                <a className="nav-link" href="/report"><i className="fa fa-sticky-note-o" aria-hidden="true"></i>Report</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/schedule"><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Schedule</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/help"><i className="fa fa-question-circle" aria-hidden="true"></i>Help</a>
                            </li>
                         </ul>
                    </div>
                </div>
            <div className= "jumbotron">
                {/* <div className="heading">
                        <h1 className="dash">Dashboard</h1>
                        <h6 className="welcome">Welcome to the Student Dashboard</h6>
                    </div> */}
                <h3>Please use the following form for submission of completed student hours:</h3><br></br><br></br>
                <form>
                    <div className="report-form-container">
                    <label for="StudentInputForm">Student Name:</label>
                        <div className="row">
                            <div className="col">
                            <input type="text" className="form-control" placeholder="First Name" />
                            </div>
                            <div className="col">
                            <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                        </div><br></br>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email address:</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email" required />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Select Year:</label>
                            <select className="form-control" id="exampleFormControlSelect1" required >
                            <option>M3</option>
                            <option>M4</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect2">Specialty:</label>
                            <select multiple className="form-control" id="exampleFormControlSelect2" required >
                            <option>Obstetrics</option>
                            <option>Pediatrics</option>
                            <option>Surgery</option>
                            <option>Family Medicine</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Hours Completed:</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="" required />
                        </div>
                    </div>
                </form>
                <button type="button" className="btn btn-secondary">Submit</button>
             </div>
           </div>
            
        )
    };
}
export default Schedule;