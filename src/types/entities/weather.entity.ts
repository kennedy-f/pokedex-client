import { PokemonEntity } from "types/entities/pokemon.entity";

export class WeatherEntity {
  id!: number;

  name!: string;

  createdAt!: Date;

  updatedAt!: Date;

  pokemons!: PokemonEntity[];
}
