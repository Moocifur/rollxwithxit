import React from 'react';
import { Phone, Clock, MapPin, Mail } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Ready to Start Your Journey?</h2>
          <p className={styles.subtitle}>
            Taking the first step takes courage. I'm here to make it as comfortable and easy as possible. 
            Reach out today to schedule your first session or ask any questions.
          </p>
        </div>
        
        <div className={styles.contentGrid}>
          
          {/* Location Card with Map */}
          <div className={styles.locationCard}>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <MapPin className={styles.icon} />
                <h3 className={styles.cardTitle}>Office Location</h3>
              </div>
              <p className={styles.cardDescription}>
                Serving clients throughout Southern California
              </p>
              <div className={styles.addressInfo}>
                <p className={styles.addressPrimary}>Southern California</p>
                <p className={styles.addressSecondary}>
                  Exact address provided upon scheduling
                </p>
              </div>
            </div>
            
            {/* Map Embed */}
            <div className={styles.mapEmbed}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52901.89374920128!2d-117.60944!3d34.38169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c358b5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sPi%C3%B1on%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Piñon Hills Office Location"
              ></iframe>
            </div>
          </div>
          
          {/* Info Cards Container */}
          <div className={styles.infoCards}>
            
            {/* Phone Card */}
            <div className={styles.infoCard}>
              <div className={styles.iconContainer}>
                <Phone className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Schedule a Session</h3>
              <p className={styles.cardDescription}>
                Call to book your appointment or ask about our services. 
                I offer both in-person and telehealth options.
              </p>
              
              {/* Contact Details */}
              <div className={styles.contactDetails}>
                <a 
                  href="tel:+1-XXX-XXX-XXXX" 
                  className={styles.primaryContact}
                >
                  (XXX) XXX-XXXX
                </a>
                <div className={styles.secondaryContact}>
                  <div className={styles.contactRow}>
                    <Mail className={styles.smallIcon} />
                    <span className={styles.contactText}>
                      contact@rollwithit.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hours Card */}
            <div className={styles.infoCard}>
              <div className={styles.iconContainer}>
                <Clock className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Session Hours</h3>
              <p className={styles.cardDescription}>
                Flexible scheduling to work with your life. Evening and weekend appointments available.
              </p>
              
              {/* Schedule List */}
              <div className={styles.scheduleList}>
                <div className={styles.scheduleRow}>
                  <span className={styles.scheduleDay}>Monday - Thursday</span>
                  <span className={styles.scheduleTime}>10AM - 7PM</span>
                </div>
                <div className={styles.scheduleRow}>
                  <span className={styles.scheduleDay}>Friday</span>
                  <span className={styles.scheduleTime}>10AM - 5PM</span>
                </div>
                <div className={styles.scheduleRow}>
                  <span className={styles.scheduleDay}>Saturday</span>
                  <span className={styles.scheduleTime}>By Appointment</span>
                </div>
                <div className={styles.scheduleRow}>
                  <span className={styles.scheduleDay}>Sunday</span>
                  <span className={styles.scheduleTimeClosed}>Closed</span>
                </div>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default Contact;