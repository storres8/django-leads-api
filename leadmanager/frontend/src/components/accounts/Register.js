import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";
import classnames from "classnames";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
    pError: null
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.setState({
        pError: "Passwords do not match"
      });
    } else {
      const newUser = {
        username: username,
        email: email,
        password: password
      };
      this.props.register(newUser);
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    const { username, email, password, password2 } = this.state;
    let passwordClass = classnames({
      "form-control": true,
      "is-invalid": this.state.pError !== null
    });
    return (
      <div className="container">
        <div className="col-md-6 m-auto">
          <div className="card card-body mt-5">
            <h2 className="text-center">Register</h2>
            <form onSubmit={e => this.onSubmit(e)}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  onChange={e => this.onChange(e)}
                  value={username}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={e => this.onChange(e)}
                  value={email}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={e => this.onChange(e)}
                  value={password}
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className={passwordClass}
                  name="password2"
                  onChange={e => this.onChange(e)}
                  value={password2}
                />
                <div className="invalid-feedback">Passwords do not match</div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    message: state.messageReducer
  };
};

const actionCreators = {
  register,
  createMessage
};

export default connect(
  mapStateToProps,
  actionCreators
)(Register);
