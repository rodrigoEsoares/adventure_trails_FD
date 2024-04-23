import { Link } from "react-router-dom";
import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/home">
        <p className={styles.logo}>Adventure Trails FD</p>
      </Link>
      <nav className={styles.links}>
        <Link to="https://github.com/rodrigoeduss" target="_blank" className={styles.link}>Github</Link>
        <Link to="https://www.linkedin.com/in/rodrigoeduss/" target="_blank" className={styles.link}>LinkedIn</Link>
        <Link to="https://www.instagram.com/rodrigoedux/" target="_blank" className={styles.link}>Instagram</Link>
      </nav>
    </footer>
  );
}

export default Footer;
