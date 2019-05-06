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
      <div className="card card-body mt-4 mb-4 text-center">
        <h1>Add Leads</h1>
        <h6 className="card-subtitle mb-2 text-muted">
          Congrats you made a lead! Add them below with a quick blurb to keep
          track of your progress!
        </h6>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="form-group">
            <label className="mb-1 mt-3">
              <i>Name</i>
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={e => this.handleChange(e)}
              value={name}
            />
            <small id="nameEx" className="form-text text-muted">
              <span>
                Ex. <i className="ml-1"> John Smith</i>
              </span>
            </small>
          </div>
          <div className="form-group">
            <label className="mb-1">
              <i>Email</i>
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={e => this.handleChange(e)}
              value={email}
            />
            <small id="emailEx" className="form-text text-muted">
              <span>
                Ex. <i className="ml-1"> Jsmith@gmail.com</i>
              </span>
            </small>
          </div>
          <div className="form-group">
            <label className="mb-1">
              <i>Message</i>
            </label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={e => this.handleChange(e)}
              value={message}
            />
            <small id="messageEx" className="form-text text-muted">
              <span>
                Ex.{" "}
                <i className="ml-1">
                  {" "}
                  Networked with John at the NYC tech meetup 3/21 - message
                  about possible software engineering position
                </i>
              </span>
            </small>
          </div>
          <div className="form-group mb-2 mt-4">
            <button type="submit" className="btn btn-success">
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
