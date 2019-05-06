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
    let tableStyles = {
      maxHeight: "620px",
      width: "inherit",
      overflowY: "scroll"
    };
    let styles = {
      maxHeight: "63px",
      width: "580px",
      overflowY: "scroll"
    };

    return (
      <div>
        <div className="row">
          {/* <div className=" mx-auto">
            <h1 className="text-center">Current Leads</h1>
          </div> */}
        </div>
        <div className="table" style={tableStyles}>
          <table className="table table-hover">
            <thead>
              <tr className="table-success">
                <th scope="col">ID</th>
                <th scope="col" className="text-center">
                  Name
                </th>
                <th scope="col" className="text-center">
                  Email
                </th>
                <th scope="col" className="text-center">
                  Message
                </th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              {this.props.leads.map((lead, index) => {
                return (
                  <tr key={lead.id} className="table-light">
                    <td>{index + 1}</td>
                    <td className="text-center">{lead.name}</td>
                    <td className="text-center">{lead.email}</td>
                    <td className="py-2">
                      <div className="py-0">
                        <div style={styles}>{lead.message}</div>
                      </div>
                    </td>
                    <td>
                      <div className="text-right">
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
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
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
