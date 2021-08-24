import React from "react";
import Box from "@material-ui/core/Box";
import Router from "./router/Router";

const App = () => (
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
);

export default App;
