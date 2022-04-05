import React, { useState } from "react";
import { PokemonEntity } from "types/entities";
import { Box, Chip, Typography } from "@mui/material";
import * as S from "./styled";
import { PokemonTypeColors } from "shared/constants";

interface PokemonCardProps {
  pokemon: PokemonEntity;
}

const WIDTH = 300;
const HEIGHT = 300;

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const [mouseIsIn, setMouseIsIn] = useState(false);
  return (
    <S.PokemonCardContainer
      sx={{
        md: {
          width: WIDTH,
        },
        xs: {
          width: "100%",
        },
        height: HEIGHT,
        position: "relative",
        backgroundColor:
          // @ts-ignore
          PokemonTypeColors[pokemon?.type?.[0]?.name || "normal"],
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
      onMouseEnter={() => setMouseIsIn(true)}
      onMouseLeave={() => setMouseIsIn(false)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          width: "100%",
          px: 2,
          pt: 1,
        }}
      >
        {pokemon.type.map((type, key) => (
          <Chip key={key} label={type.name} sx={{ mx: 1 }} />
        ))}
      </Box>
      <Box
        width={{ xs: "100%", md: 300 }}
        sx={{
          zIndex: 1,
          position: "relative",
          display: "flex",
          width: "100% !important",
        }}
        justifyContent={"center"}
      >
        <img
          style={{
            width: 200,
          }}
          loading={"lazy"}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.pokedexNumber}.png`}
        />
      </Box>
      <Box
        sx={{
          width: "98%",
          position: "absolute",
          top: 70,
          zIndex: 2,
        }}
      >
        <Typography
          textAlign={"center"}
          sx={{ fontSize: 100, color: "rgba(51,51,51,0.3)" }}
        >
          #{pokemon.pokedexNumber}
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: WIDTH,
          bottom: 15,
          opacity: mouseIsIn ? "1" : "0",
          transition: "all 0.3s ease",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          zIndex: 3,
        }}
      >
        <Typography
          textAlign={"center"}
          sx={{
            fontSize: 40,
            fontWeight: 600,
            color: "rgba(255,255,255,0.62)",
          }}
        >
          {pokemon.name}
        </Typography>
      </Box>
    </S.PokemonCardContainer>
  );
}
