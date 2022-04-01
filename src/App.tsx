import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes } from "routes";
import { ZoeProvider } from "zoe-data";
import { DefaultMaterialTheme } from "config/theme/material/material.theme";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <CssBaseline />
      <ZoeProvider axiosConfigParams={{ baseURL: "http://localhost:3000" }}>
        <ThemeProvider theme={DefaultMaterialTheme}>
          <Routes />
        </ThemeProvider>
      </ZoeProvider>
      <ToastContainer />
    </>
  );
}

export default App;
