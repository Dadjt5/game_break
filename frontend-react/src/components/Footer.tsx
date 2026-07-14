import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container text-center">

        <p className="mb-2">
          © {new Date().getFullYear()} WoAiDa Interactive
        </p>

        <div className={styles.links}>
          <Link to="/legal">Aviso Legal</Link>

          <span>•</span>

          <Link to="/privacy">Privacidad</Link>

          <span>•</span>

          <Link to="/cookies">Cookies</Link>
        </div>

      </div>
    </footer>
  );
}
