import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes } from "routes";
import { ZoeProvider } from "zoe-data";
import { DefaultMaterialTheme } from "config/theme/material/material.theme";
function App() {
  return (
    <>
      <CssBaseline />
      <ZoeProvider axiosConfigParams={{ baseURL: "http://localhost:3000" }}>
        <ThemeProvider theme={DefaultMaterialTheme}>
          <Routes />
        </ThemeProvider>
      </ZoeProvider>
    </>
  );
}

export default App;
