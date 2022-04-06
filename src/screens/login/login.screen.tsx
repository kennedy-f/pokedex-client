import React from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import { useAuth } from "contexts/auth";
import { useFormik } from "formik";

export function LoginScreen() {
  const { makeLogin } = useAuth();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (fields) => makeLogin(fields.email, fields.password),
  });
  return (
    <Container>
      <Grid
        container
        justifyContent={"center"}
        alignContent={"center"}
        sx={{ height: "100vh" }}
      >
        <Grid item xs={12} md={4}>
          <form onSubmit={handleSubmit}>
            <Grid container direction={"column"} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  name={"password"}
                  onChange={handleChange}
                  value={values.password}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}
