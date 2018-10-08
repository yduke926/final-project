import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import AdminNav from '../components/adminnav';

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
            .then (() => {
                window.location = '/students';
            })
        }

    
        const StudentEditHtml=(props)=>{
            return (
              <div>  
              <AdminNav />
                <br></br><br></br>
                <div className="card student-profile-card">
                <h3 className="card-title">{props.student.name}</h3>
                <h6>Email: {props.student.email}</h6>
                <br></br>
                <button type="button" className="btn btn-secondary students-delete" onClick={() => deleteStudent(props.student._id)}>
                    Delete Student Profile
                </button>
                <a className="btn btn-secondary students-delete" href="students" role="button">Return to Students Page</a>
                    
                </div>
               </div> 
                
            )
        }

     
      const ListStudentsHtml = (props) => {
        return (
           <div> 
           <AdminNav />
            <br></br>
                <ListGroup className="student-card">
                    {(props.listofstudents) ? props.listofstudents.map((student,index) => (

                    <ListGroupItem onClick={(event)=>props.toggleClick(event,{student})} header={student.name} key={index}>
                
                    <Image className="student-head" src="https://vignette.wikia.nocookie.net/bungostraydogs/images/1/1e/Profile-icon-9.png/revision/latest?cb=20171030104015" rounded /><br />
                    
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


