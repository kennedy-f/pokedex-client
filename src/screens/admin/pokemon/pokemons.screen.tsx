import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { AdminDrawer } from "shared/admin-drawer/admin-drawer";
import { PokemonsTableFragment } from "modules/admin/pokemons";

export function PokemonsScreen() {
  return (
    <>
      <AdminDrawer>
        <Container>
          <Grid item>
            <Typography variant={"h4"}> Pokemons</Typography>
          </Grid>
          <PokemonsTableFragment />
        </Container>
      </AdminDrawer>
    </>
  );
}
