import styles from "./Lista.module.css";
import Card from "../../components/Card";
import { useEffect, useState } from "react";

// import Favorite from "../../img/favorite.svg";

function Lista() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const searchTrails = async () => {
      const response = await fetch("/dados.json");
      const data = await response.json();
      setTrails(data);
     console.log(data)
    };

    searchTrails();
  }, []);

  return (
    <>
      <section className={styles.section_img}>
    
      </section>
      <section className={styles.trails_container}>
        <h1 className={styles.title}>Explore trilhas incríveis</h1>
        <div className={styles.cards_container}>
          {trails.length > 0 ? (
        

           trails.map((element)=>(
            <Card 
            key={element.id}
            nomeTrilha={element.nomeTrilha} 
            cidade={element.cidade} 
            estado={element.estado}
            nomeUsuario={element.nomeUsuario}
            duracao={element.duracao}
            trajeto={element.trajeto}
            dificuldade={element.dificuldade}/>
           ))
            
            
          ) : <p>Não há dados</p>}
        </div>
      </section>
    </>
  );
}

export default Lista;
