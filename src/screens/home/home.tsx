import React, { useEffect, useMemo, useState } from "react";
import { Autocomplete, Box, Container, Grid, TextField } from "@mui/material";
import { useGet } from "zoe-data";
import { PokemonEntity } from "types/entities";
import { PokemonCard } from "modules/pokemon/cards/pokemon-card/pokemon-card";
import { useInView } from "react-intersection-observer";
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
