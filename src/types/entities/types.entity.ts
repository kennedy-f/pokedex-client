import { PokemonEntity } from "types/entities/pokemon.entity";

export class TypesEntity {
  id!: number;

  name!: string;

  createdAt!: Date;

  updatedAt!: Date;

  pokemons!: PokemonEntity[];
}
