import { TypesEntity } from "types/entities/types.entity";
import { WeatherEntity } from "types/entities/weather.entity";

export class PokemonEntity {
  id!: number;

  name!: string;

  pokedexNumber!: number;

  atk!: number;

  def!: number;

  sta!: number;

  generation!: number;

  evolution!: number;

  stat_total!: number;

  legendary!: boolean;

  cp1!: number;

  cp2!: number;

  createdAt!: Date;

  updatedAt!: Date;

  type!: TypesEntity[];

  weather!: WeatherEntity[];
}
