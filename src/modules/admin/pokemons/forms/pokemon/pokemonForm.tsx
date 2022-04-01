import React from "react";
import { PokemonEntity } from "types/entities";
import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { PokemonFormValidationSchema } from "modules/admin/pokemons/forms/pokemon/pokemon-form.validation";

interface PokemonFormProps {
  pokemon?: PokemonEntity;
}

export function PokemonForm({ pokemon }: PokemonFormProps) {
  const { values, touched, handleChange, handleSubmit, errors, handleBlur } =
    useFormik({
      initialValues: pokemon || new PokemonEntity(),
      validationSchema: PokemonFormValidationSchema,
      onSubmit: (fields) => {
        console.log(fields);
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <TextField
            name={"name"}
            label={"name"}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.name && !!errors.name)}
            helperText={!!touched.name && errors?.name}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name={"pokedexNumber"}
            label={"Numero na pokedex "}
            value={values.pokedexNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.pokedexNumber && !!errors.pokedexNumber}
            helperText={errors?.pokedexNumber}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name={"atk"}
            label={"atk "}
            value={values.atk}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.atk && !!errors.atk}
            helperText={errors?.atk}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name={"def"}
            label={"def "}
            value={values.def}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.def && !!errors.def}
            helperText={errors?.def}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name={"sta"}
            label={"sta "}
            value={values.sta}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.sta && !!errors.sta}
            helperText={errors?.sta}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name={"generation"}
            label={"generation "}
            value={values.generation}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.generation && !!errors.generation}
            helperText={errors?.generation}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name={"evolution"}
            label={"evolution "}
            value={values.evolution}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.evolution && !!errors.evolution}
            helperText={errors?.evolution}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name={"stat_total"}
            label={"stat_total "}
            value={values.stat_total}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.stat_total && !!errors.stat_total}
            helperText={errors?.stat_total}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name={"legendary"}
            label={"legendary "}
            value={values.legendary}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.legendary && !!errors.legendary}
            helperText={errors?.legendary}
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button
            variant={"contained"}
            color={"primary"}
            fullWidth
            type={"submit"}
          >
            Concluir
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
