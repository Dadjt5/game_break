import styles from "./Credits.module.css";

interface GrupoCredito {
  rol: string;
  personas: string[];
}

const creditos: GrupoCredito[] = [
  { rol: "Desarrollo", personas: ["Dadjt5"] },
  { rol: "Diseño y arte", personas: ["Javier"] },
  { rol: "Guión", personas: ["David"] },
  { rol: "Traducciones", personas: ["Aranzazu"] },
  { rol: "Testers", personas: ["David", "Aranzazu", "Javier"] },
];

export default function Credits() {
  return (
    <div className="text-center">
      <h2 className="mb-2">Créditos</h2>
      <p className="text-muted mb-5">Creado por Game Break</p>

      <div className="row g-4 justify-content-center mb-5">
        {creditos.map((grupo) => (
          <div key={grupo.rol} className="col-6 col-md-4 col-lg-3">
            <div className={`${styles.creditCard} p-4 rounded-4 shadow-sm h-100`}>
              <h6 className="text-uppercase text-primary fw-bold mb-3">
                {grupo.rol}
              </h6>
              {grupo.personas.map((persona) => (
                <p key={persona} className="mb-1">
                  {persona}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.musicCredit} mx-auto p-3 rounded-3`}>
        <h6 className="mb-2">🎵 Música</h6>
        <p className="mb-0 small text-muted">
          "Intro 01" by rhodesmas —{" "}
          <a href="https://freesound.org/s/353206/" target="_blank" rel="noopener">
            freesound.org/s/353206
          </a>{" "}
          — Licencia: Attribution 3.0
        </p>
      </div>
    </div>
  );
}