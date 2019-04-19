import { GET_LEADS, DELETE_LEAD } from "../actions/types";

// Leads Reducer

const initialState = {
  leads: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload
      };
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter(lead => {
          return lead.id !== action.payload;
        })
      };
    default:
      return state;
  }
}
