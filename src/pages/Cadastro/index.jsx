import { Link } from "react-router-dom";
import styles from "./Cadastro.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userValidationSchema } from "../../validation/userValidation";
function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidationSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h1 className={styles.title}>Cadastro de nova trilha</h1>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label  className={styles.label} htmlFor="nomeTrilha">
          Nome da trilha
        </label>
        <input
          className={styles.input}
          type="text"
          name="nomeTrilha"
          id="nomeTrilha"
          placeholder="Digite o nome da trilha"
          {...register("nomeTrilha")}
        />
        <div className={styles.errors}>{errors.nomeTrilha?.message}</div>

        <label  className={styles.label} htmlFor="duracao">
          Duração estimada (min)
        </label>
        <input
          className={styles.input}
          type="number"
          name="duracao"
          id="duracao"
          placeholder="Digite a duração em minutos"
          {...register("duracao")}
        />
        <div className={styles.errors}>{errors.duracao?.message}</div>
        <label className={styles.label} htmlFor="trajeto">
          Trajeto (km)
        </label>
        <input
          className={styles.input}
          type="number"
          name="trajeto"
          id="trajeto"
          placeholder="Digite a distancia em km"
          {...register("trajeto")}
        />
        <div className={styles.errors}>{errors.trajeto?.message}</div>
        <label className={styles.label} htmlFor="cidade">
          Cidade
        </label>
        <input
          className={styles.input}
          type="text"
          name="cidade"
          id="cidade"
          placeholder="Digite o nome da cidade"
          {...register("cidade")}
        />
          <div className={styles.errors}>{errors.cidade?.message}</div>
        <label className={styles.label} htmlFor="estado">
          Estado
        </label>
        <input
          className={styles.input}
          type="text"
          name="estado"
          id="estado"
          placeholder="Digite a sigla do estado"
          {...register("estado")}
        />
        <div className={styles.errors}>{errors.estado?.message}</div>
        <label className={styles.label} htmlFor="nomeUsuario">
          Nome completo usuário
        </label>
        <input
          className={styles.input}
          type="text"
          name="nomeUsuario"
          id="nomeUsuario"
          placeholder="Digite o nome completo"
          {...register("nomeUsuario")}
        />
        <div className={styles.errors}>{errors.nomeUsuario?.message}</div>
        <label className={styles.label} htmlFor="dificuldade">
          Dificuldade
        </label>
        <select name="dificuldade" id="dificuldade" className={styles.input} {...register("dificuldade")}>
        <option value="" disabled="disabled" selected="selected" >Selecione</option>
          <option value="Iniciante">Iniciante</option>
          <option value=" Intermediário"> Intermediário</option>
          <option value=" Difícil"> Difícil</option>
        </select>
        <div className={styles.errors}>{errors.dificuldade?.message}</div>

        <label className={styles.label} htmlFor="tipo">
          Tipo de trilha
        </label>
        <select  name="tipo" id="tipo" className={styles.input} {...register("tipo")}>
        <option value="" disabled="disabled" selected="selected" >Selecione</option>
          <option value="Caminhada">Caminhada</option>
          <option value=" Trekking"> Trekking</option>
        </select>
        <div className={styles.errors}>{errors.tipo?.message}</div>

        <label className={styles.label} htmlFor="urlImagem">
          URL da imagem da trilha
        </label>
        <input
        id="urlImagem"
        name="urlImagem"
          className={styles.input}
          type="text"
          placeholder="URL da imagem da trilha"
          {...register("URLImagem")}
        />
        <div className={styles.errors}>{errors.URLImagem?.message}</div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.button}>
            Cadastrar
          </button>
          <Link className={`${styles.button} ${styles.link}`} to="/">
            Voltar
          </Link>
        </div>
      </form>
    </>
  );
}

export default Cadastro;
