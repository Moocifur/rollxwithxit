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
              <div className={styles.credentialsList}>
                <div className={styles.credentialItem}>
                  <span className={styles.credentialBadge}>AMFT</span>
                  <span className={styles.credentialDescription}>Associate Marriage & Family Therapist</span>
                </div>
                <div className={styles.credentialItem}>
                  <span className={styles.credentialBadge}>License #</span>
                  <span className={styles.credentialDescription}>[Your License Number]</span>
                </div>
                <div className={styles.credentialItem}>
                  <span className={styles.credentialBadge}>Location</span>
                  <span className={styles.credentialDescription}>Southern California</span>
                </div>
                <div className={styles.credentialItem}>
                  <span className={styles.credentialBadge}>Approaches</span>
                  <span className={styles.credentialDescription}>DBT, CBT, and Mindfulness-Based Therapy</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.imageContent}>
            {/* Enhanced photo with comprehensive alt text */}
            <div className={styles.photoContainer}>
              <img 
                src="/doctor.png" 
                alt="Professional headshot of Art Minas, Licensed Marriage and Family Therapist, smiling warmly in a relaxed outdoor setting that reflects the Southern California therapeutic approach of Roll with It"
                className={styles.therapistPhoto}
                loading="lazy"
                onError={(e) => {
                  // Fallback for missing image
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              
              {/* Fallback placeholder that's hidden by default */}
              <div className={styles.photoPlaceholder} style={{ display: 'none' }}>
                <div className={styles.photoIcon}>
                  <svg 
                    width="60" 
                    height="60" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <p className={styles.photoText}>
                  Professional photo<br />coming soon
                </p>
              </div>
            </div>
            
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