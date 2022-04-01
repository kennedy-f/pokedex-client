import React from "react";
import { Container, Grid } from "@mui/material";
import { AdminDrawer } from "modules/admin-drawer";

export function PokemonsScreen() {
  return (
    <>
      <AdminDrawer>
        <Container>
          <Grid item>Pokemons</Grid>
        </Container>
      </AdminDrawer>
    </>
  );
}
