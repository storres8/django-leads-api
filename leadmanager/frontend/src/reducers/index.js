// this is the file the will house the root reducer
import { combineReducers } from "redux";
import leads from "./leads";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  leadReducer: leads,
  errorsReducer: errors,
  messagesReducer: messages
});
