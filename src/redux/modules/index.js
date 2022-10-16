import { combineReducers } from "redux";
import todosSlice from "./module/todos";

const rootReducer = combineReducers({
  todos: todosSlice,
});

export default rootReducer;
