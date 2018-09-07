import React, { Component } from 'react';

class Schedules extends Component {
    render(){
        return (
            <div className= "jumbotron">
                <div className="heading">
                        <h1 className="dash">Dashboard</h1>
                        <h6 className="welcome">Welcome to the Administration Dashboard</h6>
                    </div>
                <div className="Menu">
                    <nav>
                        <a href="#" class="active"><i className="fa fa-home" aria-hidden ="true"></i> Home</a>
                        <a href="/reports"><i className="fa fa-sticky-note-o" aria-hidden="true"></i>Reports</a>
                        <a href="schedules"><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Schedules</a>
                        <a href="/messages"><i className="fa fa-envelope"aria-hidden="true"></i></a>
                        <span className="notifications">2</span>
                        <a href="students"><i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>Students</a>
                    </nav>
                </div>
                <div>
                <h3>Please use the following form to add student hours:</h3><br></br><br></br>
                <form>
                    <div className="report-form-container">
                    <label for="StudentInputForm">Student Name:</label>
                    <div class="row">
                            <div class="col">
                            <input type="text" className="form-control" placeholder="First Name" />
                            </div>
                            <div class="col">
                            <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                        </div><br></br>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Select Year:</label>
                            <select className="form-control" id="exampleFormControlSelect1" required>
                            <option>M3</option>
                            <option>M4</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect2">Specialty:</label>
                            <select multiple className="form-control" id="exampleFormControlSelect2" required>
                            <option>Obstetrics</option>
                            <option>Pediatrics</option>
                            <option>Surgery</option>
                            <option>Family Medicine</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Add Hours:</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="" required />
                        </div>
                    </div>
                </form>
                <button type="button" className="btn btn-secondary">Submit</button>
             </div>
            </div>
            
            
        )
    };
}
export default Schedules;