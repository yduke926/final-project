import React, { Component } from 'react';

class Schedule extends Component {
    render(){
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
                {/* schedule reporting form */}
                <h3>Please use the following form for submission of completed student hours:</h3><br></br><br></br>
                <form>
                    <div className="report-form-container">
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Student Name:</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" required />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email address:</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" required />
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
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="" required />
                        </div>
                    </div>
                </form>
                <button type="button" className="btn btn-secondary">Submit</button>
             </div>
           
            
        )
    };
}
export default Schedule;