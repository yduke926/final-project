import React, { Component } from 'react';
import axios from 'axios';

class Schedules extends Component {
    state = {
        userlist:[],
        specialty: 'Ob'
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
                    <p className="welcome-text">Welcome to the Admin Dashboard</p>
                    </div>
                    </div>
                <div className="my-vertical-nav">
                <div className="row vertical-test">
                        <ul className="nav flex-column">
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/admin"><i className="fa fa-home" aria-hidden ="true"></i>Home</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="/reports"><i className="fa fa-sticky-note-o" aria-hidden="true"></i>Reports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/schedules"><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Schedules</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/students"><i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>Students</a>
                            </li>
                         </ul>
                    </div>
                </div>
            <div className= "jumbotron">
                <div>
                <h3>Please use the following form to add student hours:</h3><br></br><br></br>
                <form>
                    <div className="report-form-container">
                    <div className="form-group">
                    <label for="StudentInputForm1">Select Student:</label>
                    <select className="form-control" id="exampleFormControlSelect0" name="userId" onChange={(e) => this.setValue(e)}>
                   {(this.state.userlist) ? this.state.userlist.map((user,index) => (
                        <option key={user._id} value={user._id}>{user.name}</option>
                           )):""}
                            </select>
                    </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Select Year:</label>
                            <select className="form-control" id="exampleFormControlSelect1" name= "year" required onChange={(e) => this.setValue(e)}>
                            <option>M3</option>
                            <option>M4</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect2">Specialty:</label>
                            <select className="form-control" id="exampleFormControlSelect2" name="specialty" required onChange={(e) => this.setValue(e)}>
                                <option value="Ob">Obstetrics</option>
                                <option value="Ped">Pediatrics</option>
                                <option value="Op">Surgery</option>
                                <option value="Fm">Family Medicine</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Add Hours:</label>
                            <input type="number" onChange={(e) => this.setValue(e)} name = "hours" className="form-control" id="exampleFormControlInput1" placeholder="" required />
                        </div>
                    </div>
                </form>
                <button type="button" className="btn btn-secondary" onClick={() => this.save()}>Submit</button>
             </div>
          </div>
        </div>
            
        )
    };
}
export default Schedules;
