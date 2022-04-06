import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useAuth } from "contexts/auth";
import { useFormik } from "formik";

interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const { makeLogin } = useAuth();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (fields) => makeLogin(fields.email, fields.password),
  });
  return (
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
            type={"password"}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
