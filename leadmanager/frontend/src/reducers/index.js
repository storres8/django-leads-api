// this is the file the will house the root reducer
import { combineReducers } from "redux";
import leads from "./leads";
import erros from "./errors";

export default combineReducers({
  leadReducer: leads,
  errosReducer: erros
});
