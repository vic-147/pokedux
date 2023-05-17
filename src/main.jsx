import React from "react";
import ReactDOM from "react-dom/client";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import App from "./App.jsx";
import rootReducer from "./reducers/rootReducer.js";
import { logger } from "./middlewares/indes.js";
import "./index.css";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, composeEnhancers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
