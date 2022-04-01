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
    minWidth: 100,
    align: "center",
  },
  {
    field: "name",
    headerName: "Nome",
    flex: 1,
    minWidth: 100,
    align: "center",
  },
  {
    field: "type",
    headerName: "Tipo principal",
    valueGetter: ({ row }) => {
      return row?.type?.[0]?.name || "";
    },
    flex: 1,
    minWidth: 100,
    align: "center",
  },
  {
    field: "type2",
    headerName: "Tipo secundario",
    valueGetter: ({ row }) => {
      return row?.type?.[1]?.name || "";
    },
    minWidth: 100,
    align: "center",
    flex: 1,
  },
  {
    field: "atk",
    headerName: "Ataque",
    minWidth: 100,
    align: "center",
    flex: 1,
  },
  {
    field: "def",
    headerName: "Defesa",
    minWidth: 100,
    flex: 1,

    align: "center",
  },
  {
    field: "sta",
    headerName: "Stamina",
    minWidth: 100,
    flex: 1,

    align: "center",
  },
  {
    field: "stat_total",
    headerName: "Total",
    minWidth: 100,
    flex: 1,

    align: "center",
  },
];
