import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem, Image } from 'react-bootstrap';
class Student extends Component {
    constructor(props) {
        super(props)
        this.toggleHidden=this.toggleHidden.bind(this);  
        this.state={
            studentlist:[],
            editstudent:{}

        } 
        this.loadStudents();
    }
    
    loadStudents = () => {
        axios.get('/users/all').then((res) => {
            //localStorage.setItem('token', res.data.token) 
           // window.location.pathname = '/home'; 
           console.log(res)
           this.setState({
               studentlist:res.data
           })
        })
    }

    toggleHidden=(e ,obj)=>{
        console.log(obj.student)
        this.setState({
            editstudent: obj.student
        });
        console.log(this.state.editstudent)
    }

    render() {
        const editstudent=this.state.editstudent;
        const studentlist=this.state.studentlist;
        let html;
         
        const deleteStudent=(mongoRecordID)=>{
            console.log("MYID",mongoRecordID)
            axios.delete(`/users/${mongoRecordID}`)
        }

        const StudentEditHtml=(props)=>{
            return (
                <div>
                <h3>{props.student.name}</h3>
                <h6>Email:{props.student.email}</h6>
                <h6>Year:{props.student.year}</h6>
                <h8>Speciality:{props.student.speciality} Hours Required:{props.student.hoursrequired} Completed:{props.student.hourscompleted}</h8>
                <button onClick={deleteStudent(props.student._id)}>
                    Delete
                </button>
                </div>
                
            )
        }

     
      const ListStudentsHtml = (props) => {
        return (
            <div>
                <div className= "jumbotron">
                    <div className="welcome-student-dash">
                        <div className="welcome-info">
                            <p className="welcome-text">Welcome to the Admin Dashboard</p>
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
                                        <a className="nav-link" href="/schedules"><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Schedules</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/students"><i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>Students</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        
                <ListGroup>
                    {(props.listofstudents) ? props.listofstudents.map((student,index) => (

                    <ListGroupItem onClick={(event)=>props.toggleClick(event,{student})} header={student.name} key={index}>
                
                
                    <Image src="https://vignette.wikia.nocookie.net/bungostraydogs/images/1/1e/Profile-icon-9.png/revision/latest?cb=20171030104015" rounded /><br />
                    {/* Email:{student.email}<br />
                    Year:{student.year}<br />
                    Speciality:{student.speciality}<br />
                    Hoursrequired:{student.hoursrequired}<br />
                    Hourscompleted:{student.hourscompleted}<br /> */}
                    
                    {/* <button onClick={this.deleteStudent(index)}> */}
                    {/* <button>
                    
                    Delete  
                    </button> */}
                    </ListGroupItem>

                    )): null}
                </ListGroup>
            </div>
        )};

        if (editstudent.name)  
        {
          html = <StudentEditHtml student={editstudent} />
        }
      	else
      	{
          html = <ListStudentsHtml toggleClick={this.toggleHidden} listofstudents={studentlist} />
        }

        return (
            <div>{html}</div>
        )
    }
}
export default Student;


