import React from "react";
import { PokemonsTable } from "modules/admin/pokemons/tables/pokemons";
import { useGet } from "zoe-data";
import { PokemonEntity } from "types/entities";
import { LinearProgress } from "@mui/material";

export function PokemonsTableFragment() {
  const { data, loading } = useGet<PokemonEntity[]>("/pokemon");

  return (
    <>
      {loading && <LinearProgress />}
      <PokemonsTable pokemons={data || []} loading={loading} />
    </>
  );
}
