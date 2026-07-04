import styles from "./Info.module.css";
import { useLanguage } from "../../context/useLanguage";

export default function Info() {
  const { t } = useLanguage();

  return (
    <div className="text-center">
      {/* Descripción */}
      <section className="mb-5">
        <h2 className="mb-3">{t.TTRInfoTitle}</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: 650 }}>
          {t.TTR_description}
        </p>
      </section>

      {/* Reglas */}
      <section className="mb-5">
        <h2 className="mb-4">{t.rules}</h2>
        <div className="mx-auto text-start" style={{ maxWidth: 650 }}>
          {t.TTR_rules}
        </div>
      </section>
    </div>
  );
}