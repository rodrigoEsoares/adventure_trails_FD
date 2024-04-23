import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/home">
        <h3 className={styles.logo}>Adventure Trais FD</h3>
      </Link>
      <nav className={styles.links}>
      <Link className={styles.link} to="/home">
          Página Inicial
        </Link>
        <Link className={styles.link} to="/lista">
          Explorar Trilhas
        </Link>
        <Link className={styles.link} to="/cadastro">
          Cadastrar Trilhas
        </Link>
      </nav>
    </header>
  );
}

export default Header;
