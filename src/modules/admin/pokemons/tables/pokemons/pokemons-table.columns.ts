import { GridColumns } from "@mui/x-data-grid";

export const PokemonsTableColumns: GridColumns = [
  {
    field: "id",
    headerName: "ID",
    hide: true,
  },
  {
    field: "pokedexNumber",
    headerName: "Pokedex Number",
    flex: 1,
  },
  {
    field: "name",
    headerName: "Nome",
    flex: 1,
  },
  {
    field: "type",
    headerName: "Tipo principal",
    valueGetter: ({ row }) => {
      return row?.type?.[0]?.name || "";
    },
    flex: 1,
  },
  {
    field: "type2",
    headerName: "Tipo secundario",
    valueGetter: ({ row }) => {
      return row?.type?.[1]?.name || "";
    },
    flex: 1,
  },
  {
    field: "atk",
    headerName: "Ataque",
    flex: 1,
  },
  {
    field: "def",
    headerName: "Defesa",
    flex: 1,
  },
  {
    field: "sta",
    headerName: "Stamina",
    flex: 1,
  },
  {
    field: "stat_total",
    headerName: "Total",
    flex: 1,
  },
];
