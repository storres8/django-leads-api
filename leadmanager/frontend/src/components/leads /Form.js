import React, { Component } from "react";
import { connect } from "react-redux";
import { addLead } from "../../actions/leads";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;

    const newLead = {
      name: name,
      email: email,
      message: message
    };

    this.props.addLead(newLead);

    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={e => this.handleChange(e)}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={e => this.handleChange(e)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={e => this.handleChange(e)}
              value={message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const actionCreaters = {
  addLead
};

export default connect(
  null,
  actionCreaters
)(Form);
