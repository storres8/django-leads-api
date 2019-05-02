import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, deleteLeads } from "../../actions/leads";

class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLeads: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getLeads();
  }

  handleDelete = id => {
    this.props.deleteLeads(id);
  };

  handleEdit = () => {
    console.log("editing...");
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className=" mx-auto">
            <h1 className="text-center">Your Current Leads</h1>
          </div>
        </div>
        <table className="table table-hover">
          <thead>
            <tr className="table-success">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Message</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(lead => {
              return (
                <tr key={lead.id} className="table-light">
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.message}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => this.handleDelete(lead.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="ml-2 btn btn-outline-info btn-sm"
                      onClick={() => this.handleEdit()}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    leads: state.leadReducer.leads
  };
};

const actionCreators = {
  getLeads,
  deleteLeads
};

export default connect(
  mapStateToProps,
  actionCreators
)(Leads);
