import styles from "../pages/Legal.module.css";

export default function LegalEN() {
  return (
    <div className={styles.gbPage}>
      <section className={`${styles.hero} text-center text-white py-5 mb-5`}>
        <div className="container">
          <span className="badge bg-light text-dark mb-3 px-3 py-2 rounded-pill">
            📄 Legal information
          </span>

          <h1 className="display-4 fw-bold mb-3">
            Legal Notice
          </h1>

          <p className="lead mb-0 mx-auto" style={{ maxWidth: 700 }}>
            Information about the ownership and terms of use of the WoAiDa
            Interactive website.
          </p>
        </div>
      </section>

      <div className="container mb-5">
        <div className={`${styles.card} p-5 rounded-4 shadow-sm`}>

          <h2>Website owner</h2>

          <p>
            This website belongs to <strong>WoAiDa Interactive</strong>, an
            independent video game development project.
          </p>

          <p>Website owner:</p>

          <ul>
            <li><strong>David Juzgado Torell</strong></li>
            <li>Spain</li>
            <li>contact.woaida@gmail.com</li>
          </ul>

          <hr />

          <h2>Intellectual property</h2>

          <p>
            All content published on this website, including games, source code,
            artwork, logos, images, music and texts, belongs to WoAiDa
            Interactive or their respective authors.
          </p>

          <p>
            Reproduction or redistribution without permission is prohibited.
          </p>

          <hr />

          <h2>Liability</h2>

          <p>
            The information on this website is provided for informational
            purposes only. While every effort is made to keep it updated, no
            guarantee is made regarding accuracy or availability.
          </p>

          <hr />

          <h2>External links</h2>

          <p>
            This website may contain links to third-party platforms such as
            itch.io or GitHub. WoAiDa Interactive is not responsible for the
            content or operation of those services.
          </p>

        </div>
      </div>
    </div>
  );
}