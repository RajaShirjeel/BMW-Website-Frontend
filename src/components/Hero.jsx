import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeadline}>Every curve has a reason.</h1>
        <p className={styles.heroSubtext}>
          Precision engineering, built for the drive ahead.
        </p>
        <a href="#models" className={styles.heroCta}>
          View the Lineup
        </a>
      </div>
    </section>
  );
}

export default Hero;
