import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import icTicTacRandom from "../assets/ic_launcher.webp";
import styles from "./Home.module.css";

interface Juego {
  nombre: string;
  icono: string;
  ruta: string;
}

const juegos: Juego[] = [
  {
    nombre: "Tic Tac Random",
    icono: icTicTacRandom,
    ruta: "/TicTacRandom",
  },
];

export default function Home() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className={styles.gbPage}>
      {/* HERO */}
      <section className={`${styles.hero} text-center text-white py-5 mb-5`}>
        <div className="container">
          <span className="badge bg-light text-dark mb-3 px-3 py-2 rounded-pill">
            🎮 {t.homeTitle}
          </span>
          <h1 className="display-4 fw-bold mb-3">WoAiDa Interactive</h1>
          <p className="lead mb-0 mx-auto" style={{ maxWidth: 600 }}>
            {t.homeExpl}
          </p>
        </div>
      </section>

      <div className="container">
        {/* EQUIPO */}
        <section className="text-center mb-5">
          <h2 className="mb-4">{t.team}</h2>
          <p className="text-muted mb-4 mx-auto" style={{ maxWidth: 700 }}>
            {t.homeThanks}
          </p>
        </section>

        {/* JUEGOS */}
        <section className="text-center mb-5">
          <h2 className="mb-4">{t.homeGames}</h2>
          <div className="d-flex justify-content-center flex-wrap gap-4">
            {juegos.map((juego) => (
              <div
                key={juego.nombre}
                className={`${styles.gameCard} p-3 rounded-4 shadow-sm`}
              >
                <button
                  className="btn p-0 border-0 bg-transparent w-100"
                  onClick={() => navigate(juego.ruta)}
                >
                  <img
                    src={juego.icono}
                    alt={juego.nombre}
                    className="img-fluid rounded-3 mb-2"
                    style={{ maxHeight: 100 }}
                  />
                  <span className="d-block fw-semibold text-dark">
                    {juego.nombre}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
