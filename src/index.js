import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import "./stylesheets/main.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import { saveState } from "./store/localStorage";
store.subscribe(() => {
  console.log("state is: ", store.getState().makeQuizzes);
  saveState({
    makeQuizzes: store.getState().makeQuizzes
  });
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
