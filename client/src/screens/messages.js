import React, { Component } from 'react';

class Messages extends Component {
    render(){
        return (
            <div className= "jumbotron">
                <div className="heading">
                        <h1 className="dash">Dashboard</h1>
                        <h6 className="welcome">Welcome to the Administration Dashboard</h6>
                    </div>
                <div className="Menu">
                    <nav>
                        <a href="/admin" class="active"><i className="fa fa-home" aria-hidden ="true"></i> Home</a>
                        <a href="/reports"><i className="fa fa-sticky-note-o" aria-hidden="true"></i>Reports</a>
                        <a href="/schedules"><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Schedules</a>
                        <a href="/messages"><i className="fa fa-envelope"aria-hidden="true"></i></a>
                        <span className="notifications">2</span>
                        <a href="/students"><i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>Students</a>
                    </nav>
                </div>
                <div>
                <h1>Here is where we will build the messages page</h1>
            </div>
            </div>
        )
    };
}
export default Messages;
