import styles from "../pages/Legal.module.css";

export default function LegalES() {
  return (
    <div className={styles.gbPage}>
      <section className={`${styles.hero} text-center text-white py-5 mb-5`}>
        <div className="container">
          <span className="badge bg-light text-dark mb-3 px-3 py-2 rounded-pill">
            📄 Información legal
          </span>

          <h1 className="display-4 fw-bold mb-3">
            Aviso Legal
          </h1>

          <p className="lead mb-0 mx-auto" style={{ maxWidth: 700 }}>
            Información sobre la titularidad y condiciones de uso del sitio web
            de WoAiDa Interactive.
          </p>
        </div>
      </section>

      <div className="container mb-5">
        <div className={`${styles.card} p-5 rounded-4 shadow-sm`}>

          <h2>Titular del sitio web</h2>

          <p>
            Este sitio web pertenece a <strong>WoAiDa Interactive</strong>, un
            proyecto independiente dedicado al desarrollo de videojuegos.
          </p>

          <p>
            Responsable del sitio:
          </p>

          <ul>
            <li><strong>David Juzgado Torell</strong></li>
            <li>España</li>
            <li>Correo de contacto: contact.woaida@gmail.com</li>
          </ul>

          <hr />

          <h2>Propiedad intelectual</h2>

          <p>
            Todos los contenidos publicados en este sitio web, incluyendo
            videojuegos, código fuente, diseños, imágenes, logotipos,
            ilustraciones, sonidos y textos, pertenecen a WoAiDa Interactive o
            a sus respectivos autores.
          </p>

          <p>
            No está permitida su reproducción, distribución o modificación sin
            autorización expresa.
          </p>

          <hr />

          <h2>Responsabilidad</h2>

          <p>
            El contenido de este sitio web se ofrece únicamente con fines
            informativos. Aunque se procura mantener la información actualizada,
            no se garantiza la ausencia de errores o interrupciones.
          </p>

          <hr />

          <h2>Enlaces externos</h2>

          <p>
            Este sitio puede contener enlaces a plataformas de terceros como
            itch.io o GitHub. WoAiDa Interactive no se responsabiliza del
            contenido ni del funcionamiento de dichos servicios.
          </p>

        </div>
      </div>
    </div>
  );
}