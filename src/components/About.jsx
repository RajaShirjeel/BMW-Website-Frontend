import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutInner}>
        <div className={styles.aboutImage}></div>

        <div className={styles.aboutText}>
          <h2 className={styles.aboutHeading}>Built with intent.</h2>
          <p>
            We don&apos;t design cars to be admired from a distance. Every
            panel, every switch, every detail on the dash is there because it
            earns its place — not because it looks good in a render.
          </p>
          <p>
            That&apos;s the same standard we hold this build to: nothing on this
            page is here just to fill space.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
