import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
    >
      <div className={styles.navbarInner}>
        <a href="#top" className={styles.navbarLogo}>
          BMW
        </a>

        <nav
          className={`${styles.navbarLinks} ${menuOpen ? styles.navbarLinksOpen : ""}`}
        >
          <a href="#models" onClick={closeMenu}>
            Models
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <button
          className={`${styles.navbarToggle} ${menuOpen ? styles.navbarToggleOpen : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
