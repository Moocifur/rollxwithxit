import React, { useState } from 'react';
import styles from './Services.module.css';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Service data
  const services = [
    {
      id: 'mens-mental-health',
      title: "Men's Mental Health",
      description: "Specialized therapy designed for men who want to break through barriers, develop emotional intelligence, and create meaningful change in their lives.",
      icon: "🧠"
    },
    {
      id: 'dbt-therapy',
      title: "Dialectical Behavior Therapy (DBT)",
      description: "Learn practical skills for managing emotions, improving relationships, and handling stress. Perfect for those who feel overwhelmed by intense feelings.",
      icon: "⚖️"
    },
    {
      id: 'cbt-therapy',
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "Evidence-based treatment for anxiety, depression, and social challenges. We'll work together to change thought patterns that aren't serving you.",
      icon: "🎯"
    },
    {
      id: 'mindfulness-stress',
      title: "Mindfulness & Stress Management",
      description: "Learn to slow down, breathe, and find your center. Practical techniques for managing life's pressures without losing yourself.",
      icon: "🌊"
    },
    {
      id: 'relationship-counseling',
      title: "Relationship Counseling",
      description: "Whether it's romantic relationships, friendships, or family dynamics, we'll help you build stronger, more authentic connections.",
      icon: "🤝"
    },
    {
      id: 'life-transitions',
      title: "Life Transitions",
      description: "Major changes can be tough. Whether it's career shifts, breakups, or life milestones, we'll help you navigate with confidence.",
      icon: "🌅"
    }
  ];

  const handleGetStarted = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Services
        </h2>
        
        <div className={styles.intro}>
          <p className={styles.introText}>
            Every journey is unique. Our approach flows with your needs, offering specialized support 
            that meets you where you are and helps you find your path forward.
          </p>
        </div>

        <div className={styles.flowContainer}>
          {services.map((service, index) => {
            const isEven = index % 2 === 1;
            const isHovered = hoveredCard === index;
            
            return (
              <article
                key={service.id}
                className={`
                  ${styles.flowItem} 
                  ${isEven ? styles.flowItemReverse : ''}
                  ${isHovered ? styles.hovered : ''}
                `}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={styles.itemIcon}>
                  <span className={styles.iconContent}>
                    {service.icon}
                  </span>
                </div>
                
                <div className={styles.itemContent}>
                  <h3 className={styles.itemTitle}>
                    {service.title}
                  </h3>
                  <p className={styles.itemDescription}>
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Ready to find your flow? Let's start the conversation.
          </p>
          <button 
            className={styles.ctaButton}
            onClick={handleGetStarted}
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;