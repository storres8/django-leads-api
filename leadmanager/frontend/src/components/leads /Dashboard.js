import Form from "./Form";
import Leads from "./Leads";
import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      // <div className="container mx-0">
      <div className="row mt-3">
        <div className="col-4">
          <div className="container ml-2">
            <Form />
          </div>
        </div>
        <div className="col-8">
          <div className="container mt-2">
            <Leads />
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Dashboard;
