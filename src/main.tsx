import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import "./index.css";
import { darkTheme } from "./themes/light-theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MuiThemeProvider theme={darkTheme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>
);
