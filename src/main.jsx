import React from "react";
import ReactDOM from "react-dom";
// import { IntlProvider } from 'react-intl';
import App from "./App";
import Wrapper from "./components/Wrapper";

// const messages = {
//   first: "This is the first message"
// }

// console.log("the language is:", language.first);

ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      {/* <IntlProvider locale={userLanguage} key={userLanguage} messages={Spanish}> */}
      <App />
      {/* </IntlProvider> */}
    </Wrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
