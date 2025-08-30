import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>

          {/* Logo */}
          <a href="#hero" className={styles.logo}>
            <div className={styles.logoIcon}>
              <div className={styles.logoCircle}>
                <div className={styles.logoInner} />
              </div>
            </div>
            <div className={styles.logoText}>
              <h1 className={styles.logoTitle}>RollxWithxIt</h1>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <a href="#hero" className={styles.navLink}>Home</a>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#philosophy" className={styles.navLink}>Philosophy</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.menuToggle}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={styles.menuIcon}>
              {isMenuOpen ? '✕' : '☰'}
            </span>
          </button>

        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={styles.mobileNav}>
            <div className={styles.mobileNavContent}>
              <a href="#hero" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#philosophy" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Philosophy</a>
              <a href="#contact" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;