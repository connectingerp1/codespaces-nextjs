import React, { useState, useEffect, useRef } from 'react';
import styles from './ContactForm.module.css'; // CSS Module import
import axios from 'axios';
import { IonIcon } from '@ionic/react';
import { personOutline, mailOutline, callOutline } from 'ionicons/icons'; // Importing icons

const ContactForm = ({ course, formData, onClose }) => {
  const [formValues, setFormValues] = useState({});
  const [isThankYouVisible, setThankYouVisible] = useState(false); // For Thank You popup
  const formRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (formData && formData.fields) {
      const initialFormValues = {};
      formData.fields.forEach(field => {
        initialFormValues[field.name] = '';
      });
      setFormValues(initialFormValues);
    }
  }, [formData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://serverbackend-0nvg.onrender.com/api/submit', formValues);
      console.log('Form Submitted:', response.data);
      
      // Show Thank You popup after successful submission
      setThankYouVisible(true);
      setTimeout(() => {
        setThankYouVisible(false);
        onClose(); // Close the form after the Thank You popup
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  if (!formData) return null;

  const buttonText = formData.submitButton.includes('Demo') 
    ? formData.submitButton.replace(/Demo\s*Demo/, 'Demo') 
    : formData.submitButton;

  return (
    <div className={styles.modalOverlay}>
      <div 
        className={`${styles.modalContent} ${isInView ? styles.backgroundLoaded : ''}`}
        ref={formRef}
      >
        <span className={styles.closeBtnContact} onClick={onClose}>&times;</span>
        
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          {formData.fields
            .filter(field => field.name !== 'message')
            .map((field, index) => (
              <div className={styles.contactFormGroup} key={index}>
                <div className={styles.inputWithIcon}>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formValues[field.name] || ''}
                    onChange={handleChange}
                    placeholder={field.label}
                    required
                  />
                  <IonIcon icon={field.name === 'name' ? personOutline : mailOutline} />
                </div>
              </div>
            ))}
          
          <div className={styles.contactFormGroup}>
            <div className={styles.inputWithIcon}>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formValues['contact'] || ''}
                onChange={handleChange}
                placeholder="Contact Number"
                required
              />
              <IonIcon icon={callOutline} />
            </div>
          </div>

          <button type="submit" className={styles.submitBtnContact}>{buttonText}</button>
        </form>

        {/* Uncomment if Thank You component exists */}
        {/* <ThankYouPage isVisible={isThankYouVisible} onClose={() => setThankYouVisible(false)} /> */}
      </div>
    </div>
  );
};

export default ContactForm;
