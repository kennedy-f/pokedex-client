import React from "react";
import { Routes as RoutesWrapper, Route } from "react-router-dom";
import { PokemonsScreen } from "screens/admin/pokemon/pokemons.screen";
export function Routes() {
  return (
    <RoutesWrapper>
      <Route path={"/admin"} element={<PokemonsScreen />} />
    </RoutesWrapper>
  );
}
