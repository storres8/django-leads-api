import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads } from "../../actions/leads";

class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <div>
        <h1>add leads</h1>
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
  getLeads
};

export default connect(
  mapStateToProps,
  actionCreators
)(Leads);
