import axios from "axios";
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  GET_ERRORS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

// Action to check for a token and if true load that user
export const loadUser = () => (dispatch, getState) => {
  dispatch({
    type: USER_LOADING
  });
  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then(resp => {
      dispatch({
        type: USER_LOADED,
        payload: resp.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// action to register a User
export const register = ({ username, email, password }) => dispatch => {
  // config object that sets the headers for a request sent with axios
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    username: username,
    email: email,
    password: password
  });

  axios
    .post("/api/auth/register", body, config)
    .then(resp => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: resp.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// Action to log in a user
export const logInUser = (username, password) => dispatch => {
  // config object that sets the headers for a request sent with axios
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    username: username,
    password: password
  });

  axios
    .post("/api/auth/login", body, config)
    .then(resp => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: resp.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// Logout user
export const logOutUser = () => (dispatch, getState) => {
  axios
    .post("/api/auth/logout", null, tokenConfig(getState))
    .then(resp => {
      dispatch({
        type: LOGOUT_SUCCESS
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};

// helper function for identifying user
export const tokenConfig = getState => {
  // Getting token from
  const token = getState().authReducer.token;

  // config object that sets the headers for a request sent with axios
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
