import axios from "axios";
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  GET_ERRORS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from "./types";

// Action to check for a token and if true load that user
export const loadUser = () => (dispatch, getState) => {
  dispatch({
    type: USER_LOADING
  });

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

  axios
    .get("/api/auth/user", config)
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

  axios
    .post("/api/auth/logout", null, config)
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
