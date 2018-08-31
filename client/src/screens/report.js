import React, { Component } from 'react';

class Report extends Component {
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
                <h1>Here is we will build the report page</h1>
           </div>
        )
    };
}
export default Report;