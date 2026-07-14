import styles from "../pages/Legal.module.css";

export default function PrivacyES() {
  return (
    <div className={styles.gbPage}>
      <section className={`${styles.hero} text-center text-white py-5 mb-5`}>
        <div className="container">
          <span className="badge bg-light text-dark mb-3 px-3 py-2 rounded-pill">
            🔒 Privacidad
          </span>

          <h1 className="display-4 fw-bold mb-3">
            Política de Privacidad
          </h1>

          <p className="lead mb-0 mx-auto" style={{ maxWidth: 700 }}>
            Información sobre cómo WoAiDa Interactive trata los datos utilizados
            en este sitio web.
          </p>
        </div>
      </section>

      <div className="container mb-5">
        <div className={`${styles.card} p-5 rounded-4 shadow-sm`}>

          <h2>Datos recopilados</h2>

          <p>
            Este sitio web no solicita el registro de usuarios ni recopila datos
            personales de forma activa.
          </p>

          <p>
            La única información que un usuario puede proporcionar
            voluntariamente es un nombre o alias al enviar una puntuación al
            Salón de la Fama de alguno de los videojuegos.
          </p>

          <hr />

          <h2>Finalidad</h2>

          <p>
            El nombre o alias introducido se utiliza exclusivamente para mostrar
            públicamente la clasificación del juego correspondiente.
          </p>

          <hr />

          <h2>Información almacenada</h2>

          <ul>
            <li>Nombre o alias elegido por el usuario.</li>
            <li>Puntuación obtenida.</li>
            <li>Fecha de registro.</li>
          </ul>

          <p>
            No se almacenan direcciones, teléfonos ni otra información personal
            identificativa.
          </p>

          <hr />

          <h2>Conservación de los datos</h2>

          <p>
            Las puntuaciones podrán mantenerse publicadas mientras exista el
            Salón de la Fama o hasta que el usuario solicite su eliminación.
          </p>

          <hr />

          <h2>Derechos del usuario</h2>

          <p>
            Puedes solicitar la modificación o eliminación de una puntuación
            escribiendo a:
          </p>

          <p>
            <strong>contact.woaida@gmail.com</strong>
          </p>

          <hr />

          <h2>Actualizaciones</h2>

          <p>
            Esta política podrá modificarse para adaptarse a cambios legales o
            técnicos.
          </p>

        </div>
      </div>
    </div>
  );
}