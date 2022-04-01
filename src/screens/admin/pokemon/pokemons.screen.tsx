import React from "react";
import { Container, Grid } from "@mui/material";
import { AdminDrawer } from "shared/admin-drawer/admin-drawer";
import { PokemonsTableFragment } from "modules/admin/pokemons";

export function PokemonsScreen() {
  return (
    <>
      <AdminDrawer>
        <Container>
          <Grid item>Pokemons</Grid>
          <PokemonsTableFragment />
        </Container>
      </AdminDrawer>
    </>
  );
}
