import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const contactItems = [
    {
      title: "Schedule a Session",
      description: "Book your first appointment online or give us a call. We offer both in-person and telehealth options.",
      hasButton: true,
      buttonText: "Book Now",
      buttonAction: () => {
        // Add your booking logic here
        console.log('Book Now clicked');
      }
    },
    {
      title: "Location",
      description: "Piñon Hills, California\nServing San Bernardino County and surrounding areas",
      hasButton: false
    },
    {
      title: "Insurance & Payment",
      description: "We work with most major insurance plans and offer sliding scale fees for those who qualify.",
      hasButton: false
    }
  ];

  const handleCallToday = () => {
    // Add your phone call logic here
    console.log('Call Today clicked');
  };

  const handleSendMessage = () => {
    // Add your message logic here
    console.log('Send Message clicked');
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Ready to Start?
        </h2>
        <p className={styles.subtitle}>
          Taking the first step takes courage. We're here to make it as easy as possible.
        </p>
        
        <div className={styles.grid}>
          {contactItems.map((item, index) => (
            <div key={index} className={styles.item}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>
                {item.description.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < item.description.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
              {item.hasButton && (
                <button 
                  className={styles.itemButton}
                  onClick={item.buttonAction}
                >
                  {item.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>
        
        <div className={styles.actions}>
          <button className={styles.ctaButton} onClick={handleCallToday}>
            Call Today
          </button>
          <button className={styles.ctaButton} onClick={handleSendMessage}>
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;