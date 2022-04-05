import React from "react";
import { Container, Grid } from "@mui/material";
import { useGet } from "zoe-data";
import { PokemonEntity } from "types/entities";
import { PokemonCard } from "modules/pokemon/cards/pokemon-card/pokemon-card";

export function Home() {
  const { data } = useGet<PokemonEntity[]>("/pokemon");

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <img src={"https://crisgon.github.io/pokedex/src/images/logo.png"} />
        </Grid>
        <Grid item xs={12}></Grid>
        {data?.map((pokemon, index) => (
          <Grid item xs={12} md={4} key={index}>
            <PokemonCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
