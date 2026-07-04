import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../context/useLanguage";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow py-3">
      <div className="container-fluid px-4">
        <NavLink to="/" className="navbar-brand fw-bold fs-4" onClick={closeMenu}>
          Game break
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-collapse collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item fs-5">
              <NavLink to="/" className="nav-link" onClick={closeMenu}>
                {t.home}
              </NavLink>
            </li>
            <li className="nav-item fs-5">
              <NavLink to="/TicTacRandom" className="nav-link" onClick={closeMenu}>
                Tic tac random
              </NavLink>
            </li>
            <li className="nav-item fs-5">
              <NavLink to="/contacto" className="nav-link" onClick={closeMenu}>
                {t.contact}
              </NavLink>
            </li>
            <li className="nav-item fs-5">
              <button
                className="nav-link lang-btn"
                type="button"
                onClick={toggleLanguage}
                title={language === "es" ? "Switch to English" : "Cambiar a Español"}
              >
                {language === "es" ? "🇪🇸" : "🇬🇧"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}