import React from "react";
import { PokemonFormCreateFragment } from "modules/admin/pokemons/fragments/pokemon-form-create";
import { AdminDrawer } from "shared";
import { Container, Grid, Typography } from "@mui/material";

export function PokemonCreateScreen() {
  return (
    <AdminDrawer>
      <Container>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Typography variant={"h4"}>Criar pokemon</Typography>
          </Grid>
          <Grid item>
            <PokemonFormCreateFragment />
          </Grid>
        </Grid>
      </Container>
    </AdminDrawer>
  );
}
