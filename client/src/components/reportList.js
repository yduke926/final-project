import React, { Component } from 'react';

import axios from 'axios';

class ReportList extends Component {
    state = {
        reports: []
    }

    delete(sr) {
        axios.delete(`/studentreports/${sr._id}`).then(() => {
            window.location.reload();
        })
    }     

  render() {
    let reports = {};

    if(this.props.reports && this.props.reports.length) {
        this.props.reports.forEach(rep => {
            if(reports.hasOwnProperty(rep.specialty)) {
                reports[rep.specialty].push(rep);
            } else {
                reports[rep.specialty] = [rep];
            }
        });
    }

    console.log(reports);

    return (
        <div>
        <div className="accordion" id="accordionExample">
        {(reports) ? Object.keys(reports).map((spec) => (
           
            <div class="card" key={spec}>
                <div class="card-header" id={"heading" + spec}>
                    <h5 class="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapse" + spec.replace(' ', '')} aria-expanded="true" aria-controls="collapseOne">
                        {spec}
                        </button>
                    </h5>
                </div>
                <div id={"collapse" + spec.replace(' ', '')} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                        <div className="list-group"> 
                        {reports[spec].map(rep => (
                            <a key={rep._id} href="#" class="list-group-item flex-column align-items-start">
                                <div className="d-flex justify-content-between">
                                  <h5 className="mb-1">{rep.date}</h5>
                                </div>
                                <p className="mb-1">{rep.report}</p>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-secondary" onClick={() => this.delete(rep)}>Delete</button>
                                </div>
                                <small><center>{rep._id}</center></small>
                            </a>
                        ))}
                        </div>
                    </div>
                </div>   
            </div>
        )):""}
        </div>
    </div>
    );
  };
}

export default ReportList;