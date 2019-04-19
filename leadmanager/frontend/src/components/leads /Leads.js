import React, { Component, Fragment } from "react";
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

  render() {
    return (
      <Fragment>
        <h1>Leads</h1>
        <table className="table table-striped">
          <thead>
            <tr>
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
                <tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.message}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.handleDelete(lead.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Fragment>
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
