import React from "react";
import { IntlProvider } from "react-intl";
import Router from "./router/Router";
import useLocale from "./hooks/useLocale";

const App = () => {
  const { locale, messages, defaultLanguage } = useLocale();

  return (
    <div data-test="component-app">
      <IntlProvider
        locale={locale}
        messages={messages}
        defaultLanguage={defaultLanguage}
      >
        <Router data-test="router" />
      </IntlProvider>
    </div>
  );
};
export default App;
