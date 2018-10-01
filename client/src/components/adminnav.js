import React, { Component } from 'react';

class AdminNav extends Component {
  render() {
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
    );
  };
}

export default AdminNav;
