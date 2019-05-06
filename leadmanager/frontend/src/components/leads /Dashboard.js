import Form from "./Form";
import Leads from "./Leads";
import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    let cStyle = {
      cursor: "pointer"
    };
    return (
      <div className="container">
        <div className="row mt-2">
          <div className="col-10 text-left">
            <h1>
              <u>Current Leads</u>
            </h1>
          </div>
          <div className="col-2">
            <div className="text-right mt-3">
              <button
                data-toggle="modal"
                data-target="#addContactModal"
                style={cStyle}
                className="btn btn-warning"
                type="button"
              >
                Add a lead
                <i className="fas fa-user-plus ml-1" />
              </button>
            </div>

            <div
              className="modal fade"
              id="addContactModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="addContactModal"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  {/* <div className="modal-header">
                    <div className="modal-title" id="addContactModal">
                      <div className="text-center">
                        <h5>Add a lead</h5>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div> */}
                  <div className="modal-body">
                    <Form />
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm mx-auto"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="leads">
          <Leads />
        </div>
      </div>
    );
  }
}

export default Dashboard;
