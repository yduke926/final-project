import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem, Image } from 'react-bootstrap';
class Student extends Component {
    constructor(props){
        super(props)
        this.toggleHidden=this.toggleHidden.bind(this);  
        this.state={
            studentlist:[],
            editstudent:{}

        } 
        this.loadStudents() 
    }
    
    loadStudents = () => {
        axios.get('/student/load').then((res) => {
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
    editstudent:obj.student
})
console.log(this.state.editstudent)
    }
    render(){
        const editstudent=this.state.editstudent
        const studentlist=this.state.studentlist
        let html;
        if (editstudent.name)  
        {
          html = <StudentEditHtml student={editstudent} />
        }
      	else
      	{
          html = <ListStudentsHtml toggleClick={this.toggleHidden} listofstudents={studentlist} />
      	}
        return (
            
        	<div>
          		{html}
          	</div>
        )
    };
     
}
      const ListStudentsHtml=(props)=>{
        return(
          <div className= "jumbotron">
            <div className="heading">
                    <h1 className="dash">Dashboard</h1>
                    <h6 className="welcome">Welcome to the Administration Dashboard</h6>
                </div>
            <div className="Menu">
                <nav>
                    <a href="#" className="active"><i className="fa fa-home" aria-hidden ="true"></i> Home</a>
                    <a href="/reports"><i className="fa fa-sticky-note-o" aria-hidden="true"></i>Reports</a>
                    <a href="/schedules"><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Schedules</a>
                    <a href="/messages"><i className="fa fa-envelope"aria-hidden="true"></i></a>
                    <span className="notifications">2</span>
                    <a href="/students"><i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>Students</a>
                </nav>
            </div>
            <div>
            {/* <h1>Here is where the admin will load the list of students</h1> */}
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
		)
   }
   const deleteStudent=(mongoRecordID)=>{
       console.log("MYID",mongoRecordID)
axios.delete(`/student/${mongoRecordID}`)
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
export default Student;


