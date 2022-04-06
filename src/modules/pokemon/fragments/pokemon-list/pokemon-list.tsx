import React, { useEffect, useMemo, useState } from "react";
import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import { PokemonCard } from "modules/pokemon/cards/pokemon-card/pokemon-card";
import { PokemonEntity } from "types/entities";
import { useInView } from "react-intersection-observer";
import { useGet, usePost } from "hooks";

interface PokemonListProps {}

export function PokemonList(props: PokemonListProps) {
  const [page, setPage] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  const { data } = useGet<PokemonEntity[]>("/pokemon");
  const { ref, inView } = useInView({
    threshold: 0,
  });

  // fiz paginacao no front e nao no back
  const paginatedPokemons = useMemo(() => {
    if (!data) {
      return [];
    }
    if (search && search !== "") {
      return data.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return data.slice(0, page * 21);
  }, [data, page, search]);

  useEffect(() => {
    setPage(page + 1);
  }, [inView]);

  const handleSearch = (value: string | PokemonEntity | null) => {
    if (value && (value as PokemonEntity)?.name) {
      setSearch((value as PokemonEntity).name);
      return;
    }
    setSearch(value as string);
  };

  return (
    <>
      <Grid item container xs={12} justifyContent={"center"} sx={{ mb: 4 }}>
        <Grid item xs={6}>
          <Autocomplete
            renderInput={(props) => (
              <TextField {...props} label={"Search pokemons"} />
            )}
            options={data || []}
            freeSolo
            getOptionLabel={(option) => option.name || search || ""}
            onChange={(_, value, reason) =>
              reason === "clear" ? handleSearch("") : handleSearch(value)
            }
          />
        </Grid>
      </Grid>
      {paginatedPokemons?.map((pokemon, index) => (
        <Grid item xs={12} md={4} key={index}>
          <PokemonCard pokemon={pokemon} />
        </Grid>
      ))}
      <Box ref={ref} mx={5} my={5} />
    </>
  );
}
