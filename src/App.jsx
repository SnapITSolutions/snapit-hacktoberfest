import React from "react";
import Box from "@material-ui/core/Box";
import { IntlProvider } from "react-intl";
import Router from "./router/Router";
import useLocale from "./hooks/useLocale";

const App = () => {
  const { locale, messages, defaultLanguage } = useLocale();

  return (
    <IntlProvider
      locale={locale}
      messages={messages}
      defaultLanguage={defaultLanguage}
    >
      <Box
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <div className="App" data-test="component-app">
          <Router data-test="router" />
        </div>
      </Box>
    </IntlProvider>
  );
};
export default App;
