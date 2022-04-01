import React from "react";
import { Route, Routes as RoutesWrapper } from "react-router-dom";
import { PokemonsScreen } from "screens/admin/pokemon/pokemons.screen";
import { PokemonUpdateScreen } from "screens/admin/pokemon/update";
import { PokemonCreateScreen } from "screens/admin";

export function Routes() {
  return (
    <RoutesWrapper>
      <Route path={"/admin"} element={<PokemonsScreen />} />
      <Route path={"/admin/pokemon/new"} element={<PokemonCreateScreen />} />
      <Route path={"/admin/pokemon/:id"} element={<PokemonUpdateScreen />} />
    </RoutesWrapper>
  );
}
