import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./redux/modules";
import { composeWithDevTools } from "redux-devtools-extension";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(rootReducer, composeWithDevTools());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
