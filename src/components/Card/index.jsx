import styles from "./Card.module.css";
import Stars from "../../img/Rating.svg";
import CardImage from "../../img/card_img.png"
import { FaRegHeart } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
function Card({nomeTrilha, cidade, estado, nomeUsuario, duracao, trajeto, dificuldade}) {
  return (
    <div className={styles.card}>
      <img
        className={styles.card_image}
        src={CardImage}
        alt="imagem de pessoas caminhando em uma trilha"
      />

      <div className={styles.card_description}>
        <div className={styles.wrap_card_title}>
          <h2 className={styles.card_title}>
           {nomeTrilha} - {cidade}/{estado}
          </h2>
          <FaRegHeart />
          {/* <img className={styles.favorite} src={Favorite} alt="icone de coração" /> */}
        </div>
        <span className={styles.user}>Por: {nomeUsuario}</span>
        <p>Duração: {duracao}min</p>
        <p>Trajeto: {trajeto} km</p>
        <span className={styles.level}>{dificuldade}</span>
        <div className={styles.rating}>
          <img className={styles.stars} src={Stars} alt="estelas" />
          <span>Avaliações</span>
        </div>
      </div>
    </div>
  );
}
export default Card;
