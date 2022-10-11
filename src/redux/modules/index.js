import { combineReducers } from "redux";
import todosReducer from "./module/todos";

const rootReducer = combineReducers({
  todosReducer,
});

export default rootReducer;
