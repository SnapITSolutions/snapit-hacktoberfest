import React from "react";
import Router from "./router/Router";
// import { Context } from "./components/Wrapper";
import "./App.css";

const App = () => (
  // const context = useContext(Context);

  // const onLanguageChange = (event) => {
  //   event.preventDefault();
  //   context.selectLang(event)
  // }

  <div className="App" data-test="component-app">
    {/* <input onChange={onLanguageChange} value={context.locale}/> */}
    {/* <select value={context.locale} onChange={context.selectLang}>
        <option value="en-US">English</option>
        <option value="es-US">Spanish</option>
      </select> */}
    {/* <FormattedMessage
        id="first"
        defaultMessage="this will default to English."
      /> */}
    <Router />
  </div>
);

export default App;
