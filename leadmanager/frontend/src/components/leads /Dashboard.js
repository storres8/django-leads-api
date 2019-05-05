import Form from "./Form";
import Leads from "./Leads";
import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    let cStyle = {
      cursor: "pointer"
    };
    return (
      // <div className="container mx-0">
      <div>
        {/* <div className="row mt-3"> */}
        {/* <div className="col-4">
          <div className="container ml-2">
            <Form />
          </div>
        </div>
        <div className="col-8">
          <div className="container mt-2">
            <Leads />
          </div>
        </div> */}
        <div className="container">
          <Leads />
        </div>
        <div className="text-center">
          <button
            data-toggle="modal"
            data-target="#exampleModal"
            style={cStyle}
            className="btn btn-warning"
            type="button"
          >
            Add a lead!
            <i className="fas fa-user-plus ml-1" />
          </button>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add a contact
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Form />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Dashboard;
