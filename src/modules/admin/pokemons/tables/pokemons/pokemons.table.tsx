import React from "react";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { PokemonEntity } from "types/entities";
import { PokemonsTableColumns } from "modules/admin/pokemons/tables/pokemons/pokemons-table.columns";
import { useNavigate } from "react-router-dom";

interface PokemonsTableProps extends Omit<DataGridProps, "rows" | "columns"> {
  pokemons: PokemonEntity[];
}

export function PokemonsTable({ pokemons, ...props }: PokemonsTableProps) {
  const navigate = useNavigate();
  return (
    <DataGrid
      rows={pokemons}
      columns={PokemonsTableColumns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      autoHeight={true}
      onRowDoubleClick={(row) => navigate("/admin/pokemon/" + row.id)}
      {...props}
    />
  );
}
