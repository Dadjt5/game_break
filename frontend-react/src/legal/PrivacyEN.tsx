import styles from "../pages/Legal.module.css";

export default function PrivacyEN() {
  return (
    <div className={styles.gbPage}>
      <section className={`${styles.hero} text-center text-white py-5 mb-5`}>
        <div className="container">
          <span className="badge bg-light text-dark mb-3 px-3 py-2 rounded-pill">
            🔒 Privacy
          </span>

          <h1 className="display-4 fw-bold mb-3">
            Privacy Policy
          </h1>

          <p className="lead mb-0 mx-auto" style={{ maxWidth: 700 }}>
            Information about how WoAiDa Interactive handles the data used on
            this website.
          </p>
        </div>
      </section>

      <div className="container mb-5">
        <div className={`${styles.card} p-5 rounded-4 shadow-sm`}>

          <h2>Collected data</h2>

          <p>
            This website does not require user registration and does not
            actively collect personal information.
          </p>

          <p>
            The only information users may voluntarily provide is a name or
            nickname when submitting a score to one of the game's Hall of Fame
            rankings.
          </p>

          <hr />

          <h2>Purpose</h2>

          <p>
            The submitted nickname is used solely to display the public ranking
            of the corresponding game.
          </p>

          <hr />

          <h2>Stored information</h2>

          <ul>
            <li>User's chosen name or nickname.</li>
            <li>Score achieved.</li>
            <li>Date of submission.</li>
          </ul>

          <p>
            No postal addresses, phone numbers or other personally identifying
            information are stored.
          </p>

          <hr />

          <h2>Data retention</h2>

          <p>
            Scores may remain published while the Hall of Fame exists or until
            the user requests their removal.
          </p>

          <hr />

          <h2>Your rights</h2>

          <p>
            You may request the modification or removal of a published score by
            contacting:
          </p>

          <p>
            <strong>contact.woaida@gmail.com</strong>
          </p>

          <hr />

          <h2>Updates</h2>

          <p>
            This policy may be updated to reflect legal or technical changes.
          </p>

        </div>
      </div>
    </div>
  );
}