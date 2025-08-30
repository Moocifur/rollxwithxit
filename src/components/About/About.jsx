import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          About Roll with It
        </h2>
        
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p>
              Welcome to a different kind of therapy experience. At Roll with It, we believe that healing happens when you're ready, not when the world expects you to be. Our approach blends evidence-based therapeutic techniques with the laid-back wisdom of Southern California beach culture.
            </p>
            
            <p>
              We specialize in men's mental health, understanding that guys often need a different approach to opening up and working through life's challenges. Whether you're dealing with anxiety, depression, relationship issues, or just feeling stuck, we're here to help you find your flow.
            </p>
            
            <div className={styles.credentials}>
              <h3>Professional Credentials</h3>
              <p><strong>AMFT</strong> - Associate Marriage & Family Therapist</p>
              <p>Located in Southern California</p>
              <p>Offering an intergrative approach including DBT, CBT, and Mindfulness-Based Approaches</p>
            </div>
          </div>
          
          <div className={styles.imageContent}>
            <div className={styles.quoteBox}>
              <blockquote>
                "Self-care is not selfish;<br />it's essential"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;