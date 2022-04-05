import React from "react";
import { Container, Grid } from "@mui/material";
import { PokemonList } from "modules/pokemon/fragments/pokemon-list";

export function Home() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <img src={"https://crisgon.github.io/pokedex/src/images/logo.png"} />
        </Grid>
        <PokemonList />
      </Grid>
    </Container>
  );
}
