import { CREATE_MESSAGES } from "../actions/types";

let initialState = {
  message: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_MESSAGES:
      return {
        message: action.payload
      };
    default:
      return state;
  }
}
