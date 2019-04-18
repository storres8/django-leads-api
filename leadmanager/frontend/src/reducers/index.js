// this is the file the will house the root reducer
import { combineReducers } from "redux";
import leads from "./leads";

export default combineReducers({
  leadReducer: leads
});
