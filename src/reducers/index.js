import { combineReducers } from "redux";
import todos from "./todos";
import names from "./names";
import counter from "./counter";
import visibilityFilter from "./visibilityFilter";
//setup root reducer
export default combineReducers({
  counter,
  names,
  todos,
  visibilityFilter,
});
