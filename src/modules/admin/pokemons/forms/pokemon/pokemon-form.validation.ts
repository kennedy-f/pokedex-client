import * as yup from "yup";

const INPUT_FIELD_ERRORS = {
  REQUIRED_FIELD: "Campo obrigatório",
  INVALID_FIELD: "Campo inválido",
  INVALID_NUMBER: "Tipo inválido(numero)",
  WRONG_TYPE_NUMBER: "",
};

export const PokemonFormValidationSchema = yup.object({
  name: yup.string().required(INPUT_FIELD_ERRORS.REQUIRED_FIELD),
  pokedexNumber: yup
    .number()
    .typeError(INPUT_FIELD_ERRORS.INVALID_NUMBER)
    .required("Tem que ter manito"),
  atk: yup.number().typeError(INPUT_FIELD_ERRORS.INVALID_NUMBER).notRequired(),
  def: yup.number().typeError(INPUT_FIELD_ERRORS.INVALID_NUMBER).notRequired(),
  sta: yup.number().typeError(INPUT_FIELD_ERRORS.INVALID_NUMBER).notRequired(),
  generation: yup.string().notRequired(),
  evolution: yup.string().notRequired(),
  stat_total: yup.string().notRequired(),
  legendary: yup.string().notRequired(),
  cp1: yup.string().notRequired(),
  cp2: yup.string().notRequired(),
});
