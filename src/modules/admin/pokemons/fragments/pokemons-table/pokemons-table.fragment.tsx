import React from "react";
import { PokemonsTable } from "modules/admin/pokemons/tables/pokemons";
import { useGet } from "zoe-data";
import { PokemonEntity } from "types/entities";
import { Button, Grid, LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function PokemonsTableFragment() {
  const { data, loading } = useGet<PokemonEntity[]>("/pokemon");
  const navigate = useNavigate();

  return (
    <>
      {loading && <LinearProgress />}
      <Grid container direction={"row-reverse"}>
        <Grid item sx={{ mb: 2 }}>
          <Button
            onClick={() => navigate("/admin/pokemon/new")}
            variant={"contained"}
          >
            Cadastrar novo
          </Button>
        </Grid>
      </Grid>
      <PokemonsTable pokemons={data || []} loading={loading} />
    </>
  );
}
