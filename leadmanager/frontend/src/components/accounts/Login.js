import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logInUser } from "../../actions/auth";

class Login extends Component {
  static propTypes = {
    logInUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  state = {
    username: "",
    password: ""
  };

  onSubmit = e => {
    const { username, password } = this.state;
    e.preventDefault();
    this.props.logInUser(username, password);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { username, password } = this.state;

    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login">
        <div className="col-md-6 m-auto">
          <div className="card card-body mt-5">
            <h2 className="text-center" id="loginTitle">
              Login
            </h2>
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
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <p>
                Don't have an account? <Link to="/register">Register</Link>
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
    isAuthenticated: state.authReducer.isAuthenticated
  };
};

const actionCreators = {
  logInUser
};

export default connect(
  mapStateToProps,
  actionCreators
)(Login);
