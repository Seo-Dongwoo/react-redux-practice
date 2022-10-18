import { combineReducers } from "redux";
import todosSlice from "./module/todos.ts";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos"],
};

const rootReducer = combineReducers({
  todos: todosSlice,
});

export default persistReducer(persistConfig, rootReducer);
