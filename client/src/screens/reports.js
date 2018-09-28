import React, { Component } from 'react';
import axios from 'axios';
import ReportList from '../components/reportList'

class Reports extends Component {
    // constructor(props) {super(props)
    state={
        userlist:[],
        studentreports: []
    }

    componentDidMount(){
        this.loadUsers();
    }

    loadUsers = () => {
        axios.get('/api/adminhours/load-users').then((res) => {
            console.log(res)
            this.setState({
                userlist: res.data,
            })
        })
    }

    loadReports = e => {
        axios.get(`/studentreports/${e.target.value}`).then(res => {
            console.log(res);
           this.setState({studentreports:res.data});
        });
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
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link" href="/admin"><i className="fa fa-home" aria-hidden ="true"></i>Home</a>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link active" href="/reports"><i className="fa fa-sticky-note-o" aria-hidden="true"></i>Reports</a> */}
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/schedules"><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Schedules</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/students"><i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>Students</a>
                            </li>
                         </ul>
                    </div>
                </div>
                <form>
                    <div className="report-form-container">
                    <label for="StudentInputForm">Select your name:</label>
                    <select className="form-control" id="exampleFormControlSelect0" name="userId" onChange={(e) => this.loadReports(e)}>
                    {(this.state.userlist) ? this.state.userlist.map((user,index) => (
                        <option key={user._id} value={user._id}>{user.name}</option>
                           )):""}
                           )):""}
                            </select>
                            </div>
                    
         </form> 
                <ReportList reports={this.state.studentreports} />
         </div> 
        );
    };
}
export default Reports;
