import styles from "../pages/Legal.module.css";

export default function CookiesEN() {
  return (
    <div className={styles.gbPage}>
      <section className={`${styles.hero} text-center text-white py-5 mb-5`}>
        <div className="container">
          <span className="badge bg-light text-dark mb-3 px-3 py-2 rounded-pill">
            🍪 Cookies
          </span>

          <h1 className="display-4 fw-bold mb-3">
            Cookie Policy
          </h1>

          <p className="lead mb-0 mx-auto" style={{ maxWidth: 700 }}>
            Information about the use of cookies on this website.
          </p>
        </div>
      </section>

      <div className="container mb-5">
        <div className={`${styles.card} p-5 rounded-4 shadow-sm`}>

          <h2>Use of cookies</h2>

          <p>
            This website does not currently use cookies for advertising,
            analytics or tracking purposes.
          </p>

          <p>
            No cookies are used to create user profiles or collect information
            for commercial purposes.
          </p>

          <hr />

          <h2>Technical cookies</h2>

          <p>
            The website may rely only on technical browser mechanisms or local
            storage required for certain features to function correctly, such as
            language selection or user preferences.
          </p>

          <p>
            These mechanisms are not used to personally identify users or track
            their activity.
          </p>

          <hr />

          <h2>Updates</h2>

          <p>
            If this website introduces services that use cookies in the future,
            this policy will be updated accordingly.
          </p>

        </div>
      </div>
    </div>
  );
}