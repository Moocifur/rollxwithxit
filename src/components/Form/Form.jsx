import React, { useState } from 'react';
import { Send, User, Mail, Phone, FileText, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import styles from './Form.module.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual Formspree endpoint or contact form handler
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-form" className={styles.formContainer}>
      <div className={styles.formWrapper}>
        
        {/* Form Header */}
        <div className={styles.formHeader}>
          <h3 className={styles.formTitle}>Send a Message</h3>
          {/* <p className={styles.formSubtitle}>
            Ready to take the first step? Have questions about therapy or my approach? 
            I'd love to hear from you. All messages are confidential.
          </p> */}
        </div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className={styles.statusMessage + ' ' + styles.successMessage}>
            <CheckCircle className={styles.statusIcon} />
            <span className={styles.statusText}>
              Thank you for reaching out! I'll get back to you within 24 hours to schedule your free consultation.
            </span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className={styles.statusMessage + ' ' + styles.errorMessage}>
            <AlertCircle className={styles.statusIcon} />
            <span className={styles.statusText}>
              Sorry, there was an issue sending your message. Please try calling me directly or try again.
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          
          {/* Name Field */}
          <div className={styles.fieldGroup}>
            <label htmlFor="name" className={styles.fieldLabel}>
              Your Name *
            </label>
            <div className={styles.inputWrapper}>
              <User className={styles.inputIcon} />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="What should I call you?"
              />
            </div>
          </div>

          {/* Email and Phone Row */}
          <div className={styles.fieldRow}>
            {/* Email Field */}
            <div className={styles.fieldGroup}>
              <label htmlFor="email" className={styles.fieldLabel}>
                Email Address *
              </label>
              <div className={styles.inputWrapper}>
                <Mail className={styles.inputIcon} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className={styles.fieldGroup}>
              <label htmlFor="phone" className={styles.fieldLabel}>
                Phone Number
              </label>
              <div className={styles.inputWrapper}>
                <Phone className={styles.inputIcon} />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="(Optional) Best number to reach you"
                />
              </div>
            </div>
          </div>

          {/* Subject Field */}
          <div className={styles.fieldGroup}>
            <label htmlFor="subject" className={styles.fieldLabel}>
              Subject
            </label>
            <div className={styles.inputWrapper}>
              <FileText className={styles.inputIcon} />
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.input}
                placeholder="What would you like to talk about?"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className={styles.fieldGroup}>
            <label htmlFor="message" className={styles.fieldLabel}>
              Message
            </label>
            <div className={styles.inputWrapper}>
              <MessageSquare className={styles.textareaIcon} />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={styles.textarea}
                placeholder="What's been on your mind lately?"
              />
            </div>
          </div>

          {/* Privacy Notice */}
          {/* <div className={styles.privacyNotice}>
            <p className={styles.privacyText}>
              <strong>Your privacy matters:</strong> This form is secure and confidential. 
              I'll only use your information to respond to your message and schedule appointments if requested.
            </p>
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
          >
            {isSubmitting ? (
              <>
                <div className={styles.spinner}></div>
                <span>Sending securely...</span>
              </>
            ) : (
              <>
                <Send className={styles.buttonIcon} />
                <span>Send Message</span>
              </>
            )}
          </button>

          {/* Additional Info */}
          {/* <div className={styles.formFooter}>
            <p className={styles.footerText}>
              Prefer to call? Reach me at <strong>(XXX) XXX-XXXX</strong>
            </p>
            <p className={styles.footerText}>
              <small>
                If you're experiencing a crisis, please call 988 (Suicide & Crisis Lifeline) 
                or go to your nearest emergency room.
              </small>
            </p>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Form;