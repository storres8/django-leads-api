import axios from "axios";
// Leads Types
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";
// Error Types
import { GET_ERRORS } from "./types";
// Message Types
import { CREATE_MESSAGES } from "./types";

// Get Leads Action
export const getLeads = () => dispatch => {
  axios
    .get("/api/leads/")
    .then(resp => {
      dispatch({
        type: GET_LEADS,
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
    });
};

// Delete Leads Action
export const deleteLeads = id => dispatch => {
  axios
    .delete(`/api/leads/${id}/`)
    .then(resp => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
      dispatch({
        type: CREATE_MESSAGES,
        payload: "Lead Deleted"
      });
    })
    .catch(err => console.log(err));
};

// Add New Lead
export const addLead = newLead => dispatch => {
  axios
    .post("/api/leads/", newLead)
    .then(resp => {
      dispatch({
        type: ADD_LEAD,
        payload: resp.data
      });
      dispatch({
        type: CREATE_MESSAGES,
        payload: "Lead Added"
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
