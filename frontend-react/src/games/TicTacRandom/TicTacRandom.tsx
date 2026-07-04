import { NavLink, Outlet } from "react-router-dom";
import icTicTacRandom from "../../assets/ic_launcher.webp";
import styles from "./TicTacRandom.module.css";
import { useLanguage } from "../../context/useLanguage";

export default function TicTacRandom() {
  const { t } = useLanguage();

  return (
    <div className={styles.gamePage}>
      <div className={`${styles.gameHeader} text-center text-white py-5 mb-4`}>
        <div className="container">
          <img
            src={icTicTacRandom}
            alt="Tic Tac Random"
            className={`${styles.gameIcon} shadow rounded mb-3`}
          />
          <h1 className="fw-bold mb-0">Tic Tac Random</h1>
        </div>
      </div>

      <div className="container">
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
          <NavLink
            to="/TicTacRandom/info"
            className={({ isActive }) =>
              `${styles.btnTab} ${isActive ? styles.btnTabActive : ""}`
            }
          >
            ℹ️ {t.information}
          </NavLink>

          <NavLink
            to="/TicTacRandom/objetivo"
            className={({ isActive }) =>
              `${styles.btnTab} ${isActive ? styles.btnTabActive : ""}`
            }
          >
            🎯 {t.objetive}
          </NavLink>

          <NavLink
            to="/TicTacRandom/hall-of-fame"
            className={({ isActive }) =>
              `${styles.btnTab} ${isActive ? styles.btnTabActive : ""}`
            }
          >
            🏆 {t.hallOfFame}
          </NavLink>
          <NavLink
            to="/TicTacRandom/credits"
            className={({ isActive }) =>
              `${styles.btnTab} ${isActive ? styles.btnTabActive : ""}`
            }
          >
            🎬 {t.credits}
          </NavLink>
        </div>

        <Outlet />
      </div>
    </div>
  );
}