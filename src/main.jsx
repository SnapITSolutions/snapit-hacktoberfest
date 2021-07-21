import React from "react";
import ReactDOM from "react-dom";
import { MDCList } from "@material/list";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Render nav
const list = MDCList.attachTo(document.querySelector(".mdc-list"));
list.wrapFocus = true;
