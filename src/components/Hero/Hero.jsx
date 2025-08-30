import React from 'react';
import styles from './Hero.module.css';

const Hero = ({ onCtaClick }) => {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      // Default behavior - scroll to contact section
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Counseling with Southern California Soul
        </h1>
        <p className={styles.tagline}>
          Roll with life, heal at your pace
        </p>
        <button
          className={styles.ctaButton}
          onClick={handleCtaClick}
        >
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;