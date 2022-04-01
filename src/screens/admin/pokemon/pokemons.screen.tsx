import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { AdminDrawer } from "shared/admin-drawer/admin-drawer";
import { PokemonForm, PokemonsTableFragment } from "modules/admin/pokemons";

export function PokemonsScreen() {
  return (
    <>
      <AdminDrawer>
        <Container>
          <Grid item>Pokemons</Grid>
          <PokemonsTableFragment />
          <Box sx={{ my: 4 }}>
            <PokemonForm />
          </Box>
        </Container>
      </AdminDrawer>
    </>
  );
}
