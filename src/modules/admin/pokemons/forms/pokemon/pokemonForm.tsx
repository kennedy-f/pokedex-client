import React from "react";
import { PokemonEntity, TypesEntity } from "types/entities";
import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { PokemonFormValidationSchema } from "modules/admin/pokemons/forms/pokemon/pokemon-form.validation";
import { useGet } from "zoe-data";

interface PokemonFormProps {
  pokemon?: PokemonEntity;
  onComplete: (pokemon: PokemonEntity) => void;
}

export function PokemonForm({ pokemon, onComplete }: PokemonFormProps) {
  const {
    values,
    touched,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: pokemon || new PokemonEntity(),
    validationSchema: PokemonFormValidationSchema,
    onSubmit: (fields) => {
      onComplete(fields);
    },
  });

  const { data, loading } = useGet<TypesEntity[]>("/types");

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
        <Grid item xs={12} md={3}>
          <Autocomplete
            options={data || []}
            getOptionLabel={(option) => option.name}
            onChange={(_, value) => {
              setFieldValue("type", value);
            }}
            loading={loading}
            renderInput={(props) => (
              <TextField
                {...props}
                name={"type"}
                label={"tipo"}
                value={values.type}
                onBlur={handleBlur}
                error={!!touched.type && !!errors.type}
                helperText={errors?.type}
                fullWidth
              />
            )}
          />
        </Grid>
      </Grid>
      <Box my={2} />
      <Grid container justifyContent={"flex-end"}>
        <Grid item xs={12} md={2} justifySelf={"flex-end"}>
          <Button
            variant={"contained"}
            color={"primary"}
            type={"submit"}
            fullWidth
          >
            Concluir
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
