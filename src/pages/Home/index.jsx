import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Img from "../../img/second_section.png";

function Home() {
  return (
    <>
      <section className={styles.first_section}>
        <h1 className={styles.home_title}>
          Que tal aproveitar um tempo <br></br>
          com a natureza?
        </h1>

        <p>
          Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas
          aventuras e inspire-se com as experiências de outros aventureiros.
          Prepare-se para explorar novos horizontes e se conectar com a natureza
          através do Adventure Trails!
        </p>

        <Link className={styles.link} to="/lista">
          Explorar trilhas
        </Link>
      </section>
      <section className={styles.second_section}>
        <p className={styles.second_section_title}>Explore trilhas incríveis</p>
        <p className={styles.paragraph}>
          O &#34;Adventure Trails FD&#34; é seu portal para explorar e compartilhar as
          melhores trilhas para trekking e ciclismo ao redor do mundo. Descubra
          rotas deslumbrantes, desde caminhos tranquilos por florestas
          exuberantes até trilhas desafiadoras em montanhas majestosas. Encontre
          informações detalhadas sobre cada trilha, incluindo distância,
          dificuldade, pontos de interesse naturais e dicas úteis para uma
          experiência eco-friendly.
        </p>
        <Link
          className={`${styles.link} ${styles.link_second_section}`}
          to="/lista"
        >
          Explorar trilhas
        </Link>

        <div className={styles.second_section_div}>
          <div>
            <p className={styles.second_section_title}>
              Compartilhe fotos, <br /> dicas e localização das suas trilhas favoritas
            </p>
            <Link className={`${styles.link} ${styles.link_cadastrar}`} to="/cadastro">
              Cadastrar nova trilha
            </Link>
          </div>

          <img src={Img} alt="imagem de uma floresta" />
        </div>
      </section>
    </>
  );
}

export default Home;
