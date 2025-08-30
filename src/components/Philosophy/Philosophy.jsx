import React from 'react';
import styles from './Philosophy.module.css';

const Philosophy = () => {
  const philosophyItems = [
    {
      title: "Flow > Force",
      description: "Real change happens naturally, not through pressure or force. We work with your natural rhythm."
    },
    {
      title: "Roll with Life",
      description: "Like a surfer reading the waves, we'll help you learn to adapt and flow with life's ups and downs."
    },
    {
      title: "Heal at Your Pace",
      description: "There's no timeline for healing. We meet you where you are and move forward when you're ready."
    },
    {
      title: "Authentic Connection",
      description: "Therapy works best when you feel truly seen and understood. We create a space where you can be real."
    }
  ];

  return (
    <section id="philosophy" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Our Philosophy
        </h2>
        
        <div className={styles.grid}>
          {philosophyItems.map((item, index) => (
            <div
              key={index}
              className={styles.item}
            >
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;