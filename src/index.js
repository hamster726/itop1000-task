import React from "react";
import ReactDOM from "react-dom";
import "./sass/style.scss";
import App from "./components/app/app";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
