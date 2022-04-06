import React from "react";
import { PokemonForm } from "modules/admin/pokemons/forms";
import { PokemonEntity } from "types/entities";
import { LinearProgress } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { usePost } from "hooks";

export function PokemonFormCreateFragment() {
  const { fetchPost, loading } = usePost<PokemonEntity, PokemonEntity>(
    "/pokemon"
  );

  const navigate = useNavigate();

  const handleCreatePokemon = async (newPokemon: PokemonEntity) => {
    const { error } = await fetchPost(newPokemon);
    if (error) {
      toast.error("Error Notification !");
      return;
    }
    navigate("/admin");
    toast.success("Success Notification !");
  };

  return (
    <div>
      {loading && <LinearProgress />}
      <PokemonForm onComplete={handleCreatePokemon} />
    </div>
  );
}
