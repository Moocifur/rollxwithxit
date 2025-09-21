import React, { useState } from 'react';
import { Send, User, Mail, Phone, FileText, MessageSquare, CheckCircle, AlertCircle, Check, X } from 'lucide-react';
import styles from './Form.module.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [validationErrors, setValidationErrors] = useState({});
  const [fieldTouched, setFieldTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      
      case 'phone':
        if (value && value.length > 0) {
          const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
          const cleanPhone = value.replace(/[\s\-\(\)\.]/g, '');
          if (!phoneRegex.test(cleanPhone)) return 'Please enter a valid phone number';
        }
        return '';
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation
    if (fieldTouched[name]) {
      const error = validateField(name, value);
      setValidationErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFieldTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setValidationErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const errors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) errors[key] = error;
    });

    setValidationErrors(errors);
    setFieldTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true
    });

    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API delay for demo
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Replace with your actual Formspree endpoint
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
        setValidationErrors({});
        setFieldTouched({});
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

  const getFieldStatus = (fieldName) => {
    if (!fieldTouched[fieldName]) return null;
    if (validationErrors[fieldName]) return 'error';
    if (formData[fieldName]?.trim()) return 'success';
    return null;
  };

  const FieldValidationIcon = ({ fieldName }) => {
    const status = getFieldStatus(fieldName);
    if (!status) return null;
    
    return (
      <div className={`${styles.validationIcon} ${styles[status]}`}>
        {status === 'success' ? <Check size={16} /> : <X size={16} />}
      </div>
    );
  };

  return (
    <div id="contact-form" className={styles.formContainer}>
      <div className={styles.formWrapper}>
        
        {/* Form Header */}
        <div className={styles.formHeader}>
          <h3 className={styles.formTitle}>Send a Message</h3>
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

        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          
          {/* Name Field */}
          <div className={styles.fieldGroup}>
            <label htmlFor="name" className={styles.fieldLabel}>
              Your Name *
            </label>
            <div className={`${styles.inputWrapper} ${getFieldStatus('name') ? styles[getFieldStatus('name')] : ''}`}>
              <User className={styles.inputIcon} />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={styles.input}
                placeholder="What should I call you?"
                aria-describedby={validationErrors.name ? 'name-error' : undefined}
              />
              <FieldValidationIcon fieldName="name" />
            </div>
            {validationErrors.name && (
              <span id="name-error" className={styles.errorText} role="alert">
                {validationErrors.name}
              </span>
            )}
          </div>

          {/* Email and Phone Row */}
          <div className={styles.fieldRow}>
            {/* Email Field */}
            <div className={styles.fieldGroup}>
              <label htmlFor="email" className={styles.fieldLabel}>
                Email Address *
              </label>
              <div className={`${styles.inputWrapper} ${getFieldStatus('email') ? styles[getFieldStatus('email')] : ''}`}>
                <Mail className={styles.inputIcon} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={styles.input}
                  placeholder="your@email.com"
                  aria-describedby={validationErrors.email ? 'email-error' : undefined}
                />
                <FieldValidationIcon fieldName="email" />
              </div>
              {validationErrors.email && (
                <span id="email-error" className={styles.errorText} role="alert">
                  {validationErrors.email}
                </span>
              )}
            </div>

            {/* Phone Field */}
            <div className={styles.fieldGroup}>
              <label htmlFor="phone" className={styles.fieldLabel}>
                Phone Number
              </label>
              <div className={`${styles.inputWrapper} ${getFieldStatus('phone') ? styles[getFieldStatus('phone')] : ''}`}>
                <Phone className={styles.inputIcon} />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.input}
                  placeholder="(Optional) Best number to reach you"
                  aria-describedby={validationErrors.phone ? 'phone-error' : undefined}
                />
                <FieldValidationIcon fieldName="phone" />
              </div>
              {validationErrors.phone && (
                <span id="phone-error" className={styles.errorText} role="alert">
                  {validationErrors.phone}
                </span>
              )}
            </div>
          </div>

          {/* Subject Field */}
          <div className={styles.fieldGroup}>
            <label htmlFor="subject" className={styles.fieldLabel}>
              Subject
            </label>
            <div className={`${styles.inputWrapper} ${getFieldStatus('subject') ? styles[getFieldStatus('subject')] : ''}`}>
              <FileText className={styles.inputIcon} />
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={styles.input}
                placeholder="What would you like to talk about?"
              />
              <FieldValidationIcon fieldName="subject" />
            </div>
          </div>

          {/* Message Field */}
          <div className={styles.fieldGroup}>
            <label htmlFor="message" className={styles.fieldLabel}>
              Message *
            </label>
            <div className={`${styles.inputWrapper} ${getFieldStatus('message') ? styles[getFieldStatus('message')] : ''}`}>
              <MessageSquare className={styles.textareaIcon} />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                rows={6}
                className={styles.textarea}
                placeholder="What's been on your mind lately?"
                aria-describedby={validationErrors.message ? 'message-error' : undefined}
              />
              <FieldValidationIcon fieldName="message" />
            </div>
            {validationErrors.message && (
              <span id="message-error" className={styles.errorText} role="alert">
                {validationErrors.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
          >
            {isSubmitting ? (
              <>
                <div className={styles.spinner} aria-hidden="true"></div>
                <span>Sending securely...</span>
              </>
            ) : (
              <>
                <Send className={styles.buttonIcon} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;