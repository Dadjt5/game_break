import styles from "./Credits.module.css";
import { useLanguage } from "../../context/useLanguage";

type RolKey =
  | "development"
  | "designArt"
  | "script"
  | "translations"
  | "testers";

interface GrupoCredito {
  rol: RolKey;
  personas: string[];
}
interface MusicCredit {
  title: string;
  author: string;
  url: string;
  license: string;
}

const creditos: GrupoCredito[] = [
  { rol: "development", personas: ["David"] },
  { rol: "designArt", personas: ["Javier"] },
  { rol: "script", personas: ["David"] },
  { rol: "translations", personas: ["Aranzazu"] },
  { rol: "testers", personas: ["David", "Aranzazu", "Javier"] },
];

const musicCredits: MusicCredit[] = [
  { title: "Intro 01", author: "rhodesmas", url: "https://freesound.org/s/353206/", license: "Attribution 3.0" },
  { title: "coin_drop.WAV", author: "Sir Smith", url: "https://freesound.org/s/64327/", license: "Sampling+" },
  { title: "Magic spell shield on whoosh build up.wav", author: "ryusa", url: "https://freesound.org/s/531096/", license: "Attribution 4.0" },
  { title: "Metal impact - Long", author: "Vrymaa", url: "https://freesound.org/s/789214/", license: "Creative Commons 0" },
  { title: "Wind - Tornado, digital", author: "Vrymaa", url: "https://freesound.org/s/735349/", license: "Creative Commons 0" },
  { title: "Comet, Asteroid or Rocket", author: "IENBA", url: "https://freesound.org/s/698696/", license: "Creative Commons 0" },
  { title: "Meteor - Rpg", author: "colorsCrimsonTears", url: "https://freesound.org/s/562298/", license: "Creative Commons 0" },
  { title: "Volcano Mount Yasur, Tanna Island", author: "felix.blume", url: "https://freesound.org/s/661147/", license: "Creative Commons 0" },
  { title: "Lava Loop 1", author: "Fission9", url: "https://freesound.org/s/474849/", license: "Creative Commons 0" },
  { title: "Chalkboard", author: "TimOut789", url: "https://freesound.org/s/751870/", license: "Creative Commons 0" },
  { title: "Draw & Trace - Pencil", author: "Vrymaa", url: "https://freesound.org/s/753216/", license: "Creative Commons 0" },
];

export default function Credits() {
  const { t } = useLanguage();

  return (
    <div className="container py-4 text-center">
      <h2 className="fw-bold mb-2">{t.credits}</h2>
      <p className="text-muted mb-5">{t.TTR_credit_title}</p>

      <div className="row g-4 justify-content-center mb-5">
        {creditos.map((grupo) => (
          <div key={grupo.rol} className="col-6 col-md-4 col-lg-3">
            <div className={`${styles.creditCard} p-4 rounded-4 shadow-sm h-100`}>
              <h6 className="text-uppercase text-primary fw-bold mb-3">
                {t[grupo.rol] ?? grupo.rol}
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

      <div className="row justify-content-center">
        <div className={`${styles.musicCredit} col-12 col-lg-9 col-xl-8 mx-auto p-4 rounded-3 text-start`}>
          <h6 className="mb-3 text-center">🎵 {t.music}</h6>
          <ul className="list-unstyled mb-0">
            {musicCredits.map(({ title, author, url, license }) => (
              <li key={url} className="small text-muted mb-2 pb-2 border-bottom">
                <span className="fw-semibold">{title}</span> by {author} —{" "}
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url.replace("https://", "")}
                </a>{" "}
                — Licencia: {license}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
