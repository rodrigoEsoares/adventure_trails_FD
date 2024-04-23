import * as Yup from "yup";
// import { duracao } from "./utils";

export const userValidationSchema = Yup.object().shape({
  nomeTrilha: Yup.string().max(100).required("* Nome da trilha é obrigatório"),
  duracao: Yup.string().required(" * Duração da trilha é obrigatório"),
  trajeto: Yup.string().required("* Trajeto é obrigatório"),
  cidade: Yup.string().required("* Cidade é obrigatório"),
  estado: Yup.string().required("* Estado é obrigatório"),
  nomeUsuario:Yup.string().required("* Nome do usuário é obrigatório"),
  URLImagem: Yup.string().url().required("* Url da imagem é obrigatório"),
  dificuldade:Yup.string().required("* Dificuldade é obrigatório"),
  tipo: Yup.string().required("* Tipo de trilha é obrigatório")
});

// Nome da trilha máximo 100 caracteres
// Duração máximo 4 caracteres
// Trajeto máximo 5 caracteres
// Cidade máximo 60 caracteres
// Estado máximo 02 caracteres
// Nome usuário máximo 60 caracteres
//Url imagem máximo 300 caracteres