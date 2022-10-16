import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { applyMiddleware } from "redux";
import rootReducer from "./redux/modules";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware(logger))
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
