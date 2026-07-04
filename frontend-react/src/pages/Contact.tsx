import styles from "./Contact.module.css";
import { useLanguage } from "../context/useLanguage";

const EMAIL = "contact.gamebreak@gmail.com";

export default function Contacto() {
  const { t } = useLanguage();

  return (
    <div className={styles.contactPage}>
      <section className={`${styles.hero} text-center text-white py-5 mb-5`}>
        <div className="container">
          <h1 className="fw-bold mb-2">{t.contact}</h1>
          <p className="lead mb-0">{t.contactDoubt}</p>
        </div>
      </section>

      <div className="container text-center mb-5">
        <div className={`${styles.contactCard} mx-auto p-4 rounded-4 shadow-sm`}>
          <div className={`${styles.mailIcon} mx-auto mb-3`}>✉️</div>
          <h6 className="text-muted mb-2">{t.writeUs}</h6>
          <a href={`mailto:${EMAIL}`} className={styles.emailLink}>
            {EMAIL}
          </a>
        </div>
      </div>
    </div>
  );
}