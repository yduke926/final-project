import React, { Component } from 'react';
import MapContainer from '../components/mapcontainer';

class HospitalsMap extends Component {
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
                          <a className="nav-link" href="/schedule"><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Schedule</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link active" href="/hospitalsmap"><i className="fa fa-hospital-o" aria-hidden="true"></i>Clinical Sites</a>
                            </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/help"><i className="fa fa-question-circle" aria-hidden="true"></i>Help</a>
                        </li>
                      </ul>
                  </div>
                </div> 
          <div className="map-container">               
                    <MapContainer />
          </div>

                   <ul className="list-group map-list">
                        <li className="list-group-item">Elson S. Floyd College of Medicine<br></br>412 E Spokane Falls Blvd, Spokane, WA 99202</li>
                        <li className="list-group-item">Shriners Hospital for Children<br></br> 911 W 5th Ave, Spokane, WA 99204</li>
                        <li className="list-group-item">MultiCare Rockwood Main Clinic<br></br>400 E 5th Ave, Spokane, WA 99202</li>
                        <li className="list-group-item">Cancer Care Northwest <br></br>1204 N. Vercler Rd. Spokane Valley, WA 99216</li>
                        <li className="list-group-item">Columbia Medical Associates<br></br>1003 E. Trent, Suite 150 Spokane, WA 99202</li>
                        <li className="list-group-item">CHAS Health 203 N. Washington, Suite 300 Spokane, WA 99201</li>
                        <li className="list-group-item">Providence Holy Family Hospital<br></br>5633 N. Lidgerwood Street Spokane, WA 99208 </li>
                   </ul>
           </div> 
        )
    };
}
export default HospitalsMap