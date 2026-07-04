import styles from "./Info.module.css";
import { useLanguage } from "../../context/useLanguage";
import icPrimeraVictoria from "../../assets/TTR/ic_primera_victoria.svg";
import icVictoriaEstelar from "../../assets/TTR/ic_victoria_estelar.svg";
import icJuegoNiños from "../../assets/TTR/ic_juego_ninos.svg";
import icVictoriaInapelable from "../../assets/TTR/ic_victoria_inapelable.svg";
import icAFK from "../../assets/TTR/ic_afk.svg";
import icEnSerio from "../../assets/TTR/ic_en_serio.svg";

export default function Objetivo() {
  const { t } = useLanguage();

  return (
    <div className="text-center">
      {/* Objetivo */}
      <section className="mb-5">
        <h2 className="mb-4">{t.voidLord}</h2>
        <div className="mx-auto text-start" style={{ maxWidth: 650 }}>
          {t.TTR_void_lord}
        </div>
      </section>

      {/* Logros */}
      <section>
        <h2 className="mb-4">{t.achivements}</h2>
        <div className="row g-4 justify-content-center">

          <div className="col-6 col-md-4 col-lg-3">
            <div className={`${styles.achievementCard} p-3 rounded-4 shadow-sm h-100`}>
              <img
                src={icPrimeraVictoria}
                alt={t.TTR_primera_victoria}
                className={`${styles.achievementIcon} mx-auto mb-2`}
              />
              <h6 className="mb-1">{t.TTR_primera_victoria}</h6>
              <p className="mb-0 small text-muted">{t.TTR_primera_victoria_expl}</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className={`${styles.achievementCard} p-3 rounded-4 shadow-sm h-100`}>
              <img
                src={icVictoriaEstelar}
                alt={t.TTR_victoria_estelar}
                className={`${styles.achievementIcon} mx-auto mb-2`}
              />
              <h6 className="mb-1">{t.TTR_victoria_estelar}</h6>
              <p className="mb-0 small text-muted">{t.TTR_victoria_estelar_expl}</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className={`${styles.achievementCard} p-3 rounded-4 shadow-sm h-100`}>
              <img
                src={icJuegoNiños}
                alt={t.TTR_juego_ninos}
                className={`${styles.achievementIcon} mx-auto mb-2`}
              />
              <h6 className="mb-1">{t.TTR_juego_ninos}</h6>
              <p className="mb-0 small text-muted">{t.TTR_juego_ninos_expl}</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className={`${styles.achievementCard} p-3 rounded-4 shadow-sm h-100`}>
              <img
                src={icVictoriaInapelable}
                alt={t.TTR_victoria_inapelable}
                className={`${styles.achievementIcon} mx-auto mb-2`}
              />
              <h6 className="mb-1">{t.TTR_victoria_inapelable}</h6>
              <p className="mb-0 small text-muted">{t.TTR_victoria_inapelable_expl}</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className={`${styles.achievementCard} p-3 rounded-4 shadow-sm h-100`}>
              <img
                src={icAFK}
                alt="AFK"
                className={`${styles.achievementIcon} mx-auto mb-2`}
              />
              <h6 className="mb-1">AFK</h6>
              <p className="mb-0 small text-muted">{t.TTR_afk_expl}</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className={`${styles.achievementCard} p-3 rounded-4 shadow-sm h-100`}>
              <img
                src={icEnSerio}
                alt={t.TTR_en_serio}
                className={`${styles.achievementIcon} mx-auto mb-2`}
              />
              <h6 className="mb-1">{t.TTR_en_serio}</h6>
              <p className="mb-0 small text-muted">{t.TTR_en_serio_expl}</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}