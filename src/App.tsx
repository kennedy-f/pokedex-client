import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes } from "routes";
import { DefaultMaterialTheme } from "config/theme/material/material.theme";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "contexts/auth";
function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={DefaultMaterialTheme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}

export default App;
