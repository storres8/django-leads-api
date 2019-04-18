import axios from "axios";
import { GET_LEADS } from "./types";

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
