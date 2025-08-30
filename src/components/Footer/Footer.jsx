import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {currentYear} Roll with It. All rights reserved. | AMFT License #[License Number]
        </p>
        <p className={styles.tagline}>
          "Mental health matters. Self-care is essential. Healing happens."
        </p>
      </div>
    </footer>
  );
};

export default Footer;