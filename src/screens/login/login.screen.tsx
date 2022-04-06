import React from "react";
import { Container, Grid } from "@mui/material";
import { LoginForm } from "modules/login/forms";

export function LoginScreen() {
  return (
    <Container>
      <Grid
        container
        justifyContent={"center"}
        alignContent={"center"}
        sx={{ height: "100vh" }}
      >
        <Grid item xs={12} md={4}>
          <LoginForm />
        </Grid>
      </Grid>
    </Container>
  );
}
