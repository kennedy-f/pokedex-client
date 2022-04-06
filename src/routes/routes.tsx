import React from "react";
import { Route, Routes as RoutesWrapper } from "react-router-dom";
import { PokemonsScreen } from "screens/admin/pokemon/pokemons.screen";
import { PokemonUpdateScreen } from "screens/admin/pokemon/update";
import { PokemonCreateScreen, TypesScreen, WeatherScreen } from "screens/admin";
import { Home } from "screens/home";
import { LoginScreen } from "screens/login/login.screen";
import { PrivateRoute } from "routes/private-route/private-route";

export function Routes() {
  return (
    <RoutesWrapper>
      <Route path={"/"} element={<Home />} />
      <Route path={"/admin/login"} element={<LoginScreen />} />
      <Route
        path={"/admin"}
        element={
          <PrivateRoute>
            <PokemonsScreen />
          </PrivateRoute>
        }
      />
      <Route
        path={"/admin/pokemon/new"}
        element={
          <PrivateRoute>
            <PokemonCreateScreen />
          </PrivateRoute>
        }
      />
      <Route
        path={"/admin/pokemon/:id"}
        element={
          <PrivateRoute>
            <PokemonUpdateScreen />
          </PrivateRoute>
        }
      />
      <Route
        path={"/admin/weather"}
        element={
          <PrivateRoute>
            <WeatherScreen />
          </PrivateRoute>
        }
      />
      <Route
        path={"/admin/types"}
        element={
          <PrivateRoute>
            <TypesScreen />
          </PrivateRoute>
        }
      />
    </RoutesWrapper>
  );
}
