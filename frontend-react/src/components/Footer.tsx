import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className="container text-center">

        <p className="mb-2">
          © {new Date().getFullYear()} WoAiDa Interactive
        </p>

        <div className={styles.links}>
          <Link to="/legal">{t.legalNotice}</Link>

          <span>•</span>

          <Link to="/privacy">{t.privacy}</Link>

          <span>•</span>

          <Link to="/cookies">{t.cookies}</Link>
        </div>

      </div>
    </footer>
  );
}