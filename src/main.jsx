import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import App from "./App";
import Wrapper from "./components/Wrapper";
import Spanish from "./lang/es-US.json";
import English from "./lang/en-US.json";

const locale = window.navigator.userLanguage || window.navigator.language;

let messages;
if (locale === "en-US") {
  messages = English;
} else {
  messages = Spanish;
}

ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <IntlProvider locale={locale} messages={messages}>
        <App />
      </IntlProvider>
    </Wrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
