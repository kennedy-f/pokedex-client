import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import { PokemonEntity } from "types/entities";
import { AdminDrawer } from "shared";
import { PokemonFormUpdateFragment } from "modules/admin/pokemons/fragments/pokemon-form-update";
import { Api } from "service";

export function PokemonUpdateScreen() {
  const { id } = useParams<{ id: string }>();

  const [pokemon, setPokemon] = useState<PokemonEntity>();
  useEffect(() => {
    const fetchPokemons = async () => {
      const { data } = await Api.get<PokemonEntity>("/pokemon/" + id);
      if (data) {
        setPokemon(data);
      }
    };
    fetchPokemons();
  }, [id]);

  return (
    <AdminDrawer>
      <Container>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Typography variant={"h4"}>Atualizar pokemon</Typography>
          </Grid>
          {pokemon ? (
            <Grid item>
              <PokemonFormUpdateFragment pokemon={pokemon} />
            </Grid>
          ) : null}
        </Grid>
      </Container>
    </AdminDrawer>
  );
}
