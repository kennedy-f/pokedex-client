import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes } from "routes";
import { DefaultMaterialTheme } from "config/theme/material/material.theme";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={DefaultMaterialTheme}>
        <Routes />
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}

export default App;
