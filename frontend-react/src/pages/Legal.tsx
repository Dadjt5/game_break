import styles from "./Legal.module.css";

export default function Legal() {
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
            <li><strong>Javier [Apellidos]</strong></li>
            <li>España</li>
            <li>Correo de contacto: contacto@woaida.com</li>
          </ul>

          <hr />

          <h2>Propiedad intelectual</h2>

          <p>
            Todos los contenidos publicados en este sitio web, incluyendo textos,
            imágenes, logotipos, diseños, videojuegos y código desarrollado para
            este proyecto, pertenecen a WoAiDa Interactive o a sus respectivos
            autores y están protegidos por la legislación vigente sobre propiedad
            intelectual.
          </p>

          <p>
            No está permitida su reproducción, distribución o modificación sin
            autorización previa, salvo en los casos permitidos por la legislación
            aplicable.
          </p>

          <hr />

          <h2>Responsabilidad</h2>

          <p>
            La información publicada en este sitio tiene carácter informativo.
            Aunque se procura mantener el contenido actualizado, no se garantiza
            la ausencia de errores ni la disponibilidad permanente del servicio.
          </p>

          <hr />

          <h2>Enlaces externos</h2>

          <p>
            Este sitio puede contener enlaces a servicios de terceros, como
            plataformas de distribución de videojuegos o repositorios de código.
            WoAiDa Interactive no es responsable del contenido ni del
            funcionamiento de dichos servicios externos.
          </p>

        </div>
      </div>
    </div>
  );
}
