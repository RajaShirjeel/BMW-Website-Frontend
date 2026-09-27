import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerInner}>
        <span className={styles.footerLogo}>BMW</span>

        <nav className={styles.footerLinks}>
          <a href="#models">Models</a>
          <a href="#about">About</a>
          <a href="mailto:hello@example.com">Contact</a>
        </nav>

        <p className={styles.footerCopy}>© 2026. Built for the road ahead.</p>
      </div>
    </footer>
  );
}

export default Footer;
