import React, { Component } from 'react';
import axios from 'axios';

class Schedule extends Component {
    state = {
        userlist:[],
        specialty: 'Ob',
    
    }
    setValue(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    componentDidMount(){
        this.loadUsers()
    }

    loadUsers = () => {
        axios.get('/api/adminhours/load-users').then((res) => {
            console.log(res)
            this.setState({
                userlist: res.data,
            })
        })
    }

    save() {
        axios.post('/api/adminhours', this.state).then(() => {
            window.location.reload()
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
                                <a className="nav-link" href="/report"><i className="fa fa-sticky-note-o" aria-hidden="true"></i>Report</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/schedule"><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Schedule</a>
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
                {/* <div className="heading">
                        <h1 className="dash">Dashboard</h1>
                        <h6 className="welcome">Welcome to the Student Dashboard</h6>
                    </div> */}
                <h3>Please use the following form for submission of completed student hours:</h3><br></br><br></br>
                <form>
                    <div className="report-form-container">
                    <label for="StudentInputForm">Select your name:</label>
                    <select className="form-control" id="exampleFormControlSelect0" name="userId" onChange={(e) => this.setValue(e)}>
                   {(this.state.userlist) ? this.state.userlist.map((user,index) => (
                        <option key={user._id} value={user._id}>{user.name}</option>
                           )):""}
                            </select>
                        <br></br>
                        
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Select Year:</label>
                            <select className="form-control" id="exampleFormControlSelect1" required name="year" >
                            <option>M3</option>
                            <option>M4</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect2">Specialty:</label>
                            <select className="form-control" id="exampleFormControlSelect2" name= "specialty" required onChange={(e) => this.setValue(e)} >
                            <option>Obstetrics</option>
                            <option>Pediatrics</option>
                            <option>Surgery</option>
                            <option>Family Medicine</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Hours Completed:</label>
                            <input type="number" onChange={(e) => this.setValue(e)} name = "hours" className="form-control" id="exampleFormControlInput1" placeholder="" required />
                        </div>
                    </div>
                </form>
                <button type="button" className="btn btn-secondary" onClick={() => this.save()}>Submit</button>
             </div>
           </div>
            
        )
    };
}
export default Schedule;