import axios from "axios";
import { GET_LEADS, DELETE_LEAD } from "./types";

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
    .catch(err => console.log(err));
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
    })
    .catch(err => console.log(err));
};
