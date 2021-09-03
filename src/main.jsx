import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { IntlContextProvider } from "./context/IntlContext";

ReactDOM.render(
  <React.StrictMode>
    <IntlContextProvider>
      <App />
    </IntlContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
