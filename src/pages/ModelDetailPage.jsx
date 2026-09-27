import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import styles from "./ModelDetailPage.module.css";

export default function ModelDetails() {
  const { modelId } = useParams();
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(modelId);
  useEffect(() => {
    async function getModel() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/bmw?format=json",
        );
        const { Results } = await res.json();
        const found = Results.find((m) => String(m.Model_ID) === modelId);
        setModel(found || null);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    getModel();
  }, [modelId]);

  if (loading) {
    return (
      <section className={styles.detail}>
        <div className={styles.detailInner}>
          <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !model) {
    return (
      <section className={styles.detail}>
        <div className={styles.detailInner}>
          <p className={styles.notFound}>
            {error
              ? "Couldn't load this model right now. Try refreshing the page."
              : "We couldn't find a model with that ID."}
          </p>
          <Link to="/" className={styles.backLink}>
            Back to Models
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.detail}>
      <div className={styles.detailInner}>
        <Link to="/" className={styles.backLink}>
          &larr; Back to Models
        </Link>

        <div className={styles.detailImage}></div>

        <h1 className={styles.detailName}>{model.Model_Name}</h1>

        <dl className={styles.detailMeta}>
          <div className={styles.detailMetaRow}>
            <dt>Make</dt>
            <dd>{model.Make_Name}</dd>
          </div>
          <div className={styles.detailMetaRow}>
            <dt>Model ID</dt>
            <dd>{model.Model_ID}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
