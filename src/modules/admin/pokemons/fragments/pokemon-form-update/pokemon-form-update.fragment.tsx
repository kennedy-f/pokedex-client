import React from "react";
import { PokemonEntity } from "types/entities";
import { PokemonForm } from "modules/admin/pokemons/forms";
import { toast } from "react-toastify";
import { useUpdate } from "hooks";

interface PokemonFormUpdateFragmentProps {
  pokemon: PokemonEntity;
}

export function PokemonFormUpdateFragment({
  pokemon,
}: PokemonFormUpdateFragmentProps) {
  const { fetchUpdate } = useUpdate<PokemonEntity, PokemonEntity>("/pokemon");
  const handleUpdate = async (updatePokemon: PokemonEntity) => {
    const { data, status } = await fetchUpdate(pokemon.id, updatePokemon, {
      method: "PUT",
    });

    if (status === 200) {
      toast.success("Pokemon updated");
      return;
    }
    toast.error("Pokemon update failed");
  };
  return (
    <div>
      <PokemonForm onComplete={handleUpdate} pokemon={pokemon} />
    </div>
  );
}
