import React, { Component } from 'react';
import axios from 'axios';

class Report extends React.Component {

    state = {}

    setValue(e) {   
        this.setState({[e.target.name]: e.target.value})
    }

//     componentDidMount() {
//         let authToken = window.localStorage.token;
//         let payload = (authToken) ? JSON.parse(window.atob(authToken.split('.')[1])) : null;
//         axios.get(`/studentreports/${payload.id}`).then((res) => {
//             this.setState({
//                 owner: payload.id,
//                 studentreports: res.data
//             })
//         })
//     }

// save() {
//     axios.post('/studentreports', this.state).then(() => {
//         window.location.reload()
//     })
// }
save() {
    let authToken = window.localStorage.token;

    axios.post('/studentreports', this.state,
        {
            headers: { Authorization: "Bearer " + authToken }
        }).then(() => {
            window.location = '/student';
        })
}

//  edit(sr) {
//      let newStudentreport = window.prompt(`Update Studentreport: ${sr.description}`);
//      this.setState({newStudentreport: newStudentreport}, () =>
//      {
//          axios.put(`/studentreports/${sr._id}`,
//         this.state).then(() => {
//             window.location.reload();
//         })
//      })
//  }

//  delete(sr) {
//      axios.delete(`/studentreports/${sr._id}`).then(() => {
//     window.location.reload()
//     })
//  }

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
                {/* reporting form */}
                <h3>Please use the following form for submission of student reports:</h3><br></br><br></br>
                <form>
                    <div className="report-form-container">
                    <label for="StudentInputForm">Student Name:</label>
                        <div class="row">
                            <div class="col">
                            <input type="text" className="form-control" placeholder="First Name" name = 'firstName' onChange={(e) => this.setValue(e)}/>
                            </div>
                            <div class="col">
                            <input type="text" className="form-control" placeholder="Last Name" name = 'lastName' onChange={(e) => this.setValue(e)} />
                            </div>
                        </div><br></br>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email address:</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email" name = 'email' required onChange={(e) => this.setValue(e)}/>
                        </div>
                        
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Year:</label>
                            <select className="form-control" id="exampleFormControlSelect1" name = 'year' required onChange={(e) => this.setValue(e)}>
                            <option>M3</option>
                            <option>M4</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Obstetrics</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" name = 'studentreport.obstetrics' required onChange={(e) => this.setValue(e)}></textarea>
                            <label for="exampleFormControlTextarea1">Pediatrics</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" name = 'studentreport.pediatrics' required onChange={(e) => this.setValue(e)}></textarea>
                            <label for="exampleFormControlTextarea1">Surgery</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" name = 'studentreport.surgery' required onChange={(e) => this.setValue(e)}></textarea>
                            <label for="exampleFormControlTextarea1">Family Medicine</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" name = 'sudentreport.familyMedicine' required onChange={(e) => this.setValue(e)}></textarea>
                            {/* <option>Obstetrics</option>
                            <select multiple className="form-control" id="exampleFormControlSelect2" name = 'specialty.pediatrics' required onChange={(e) => this.setValue(e)}></select>
                            <option>Pediatrics</option>
                            <select multiple className="form-control" id="exampleFormControlSelect2" name = 'specialty.surgery' required onChange={(e) => this.setValue(e)}></select>
                            <option>Surgery</option>
                            <select multiple className="form-control" id="exampleFormControlSelect2" name = 'specialty.familyMedicine' required onChange={(e) => this.setValue(e)}></select>
                            <option>Family Medicine</option> */}
                            
                        </div>
                        {/* <div className="form-group">
                            <label for="exampleFormControlTextarea1">Report:</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" name = 'report' required onChange={(e) => this.setValue(e)}></textarea>
                        </div> */}
                    </div>
                </form>
                <button type="button" className="btn btn-secondary"onClick={() => this.save()}>Submit</button>
                
             </div>
        )
    };
}
export default Report;
