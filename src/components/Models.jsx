import { useEffect, useState } from "react";
import styles from "./Models.module.css";
import { Link } from "react-router";

function Models() {
  const [models, setModels] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getModels() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/bmw?format=json",
        );
        const { Results } = await res.json();
        setModels(Results.slice(0, 10));
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    getModels();
  }, []);

  return (
    <section id="models" className={styles.models}>
      <div className={styles.modelsInner}>
        <h2 className={styles.modelsHeading}>Models</h2>

        {loading && (
          <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
          </div>
        )}

        {!loading && error && (
          <p className={styles.errorText}>
            Couldn't load models right now. Try refreshing the page.
          </p>
        )}

        {!loading && !error && (
          <div className={styles.modelsGrid}>
            {models.map((model) => (
              <Link to={`/model/${model.Model_ID}`} className={styles.link}>
                <div className={styles.modelCard} key={model.Model_ID}>
                  <div className={styles.modelCardImage}></div>
                  <h3 className={styles.modelCardName}>{model.Model_Name}</h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Models;
