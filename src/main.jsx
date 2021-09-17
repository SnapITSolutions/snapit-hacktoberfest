import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b53a25",
      light: "#9097bb",
      dark: "#5263c7",
      contrastText: "#fff3f3",
    },
    secondary: {
      main: "#2b3531",
    },
    background: {
      default: "#f4f0e1",
    },
    text: {
      primary: "#2b3531",
      secondary: "#fff",
      disabled: "#fff",
      hint: "#aaa",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
