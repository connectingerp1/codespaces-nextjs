import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Stickyform.module.css' // Using CSS Modules for styling

const SContactForm = ({ isFooterVisible }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    course: '',
    email: '', // Add email field
  })

  const [isMobileView, setIsMobileView] = useState(false)
  const [isFormVisible, setIsFormVisible] = useState(false) // Start as false

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobileView(true)
        setIsFormVisible(false)
      } else {
        setIsMobileView(false)
        setIsFormVisible(true)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Initial check

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (
      formData.name.length === 0 ||
      formData.contact.length < 10 ||
      !/\S+@\S+\.\S+/.test(formData.email) ||
      formData.course.length === 0
    ) {
      alert('Please check your input')
      return
    }

    const submissionData = {
      name: formData.name,
      contact: formData.contact,
      email: formData.email,
      coursename: formData.course,
    }

    try {
      const response = await axios.post(
        'https://serverbackend-0nvg.onrender.com/api/submit',
        submissionData
      ) // Updated URL
      if (response.status === 200) {
        alert('Form data submitted successfully')
        setFormData({ name: '', contact: '', course: '', email: '' }) // Clear the form
        setIsFormVisible(false) // Hide the form after submission
      } else {
        console.error('Error submitting form:', response.status)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred while submitting the form.')
    }
  }

  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev)
  }

  return (
    <>
      {isMobileView && (
        <button className={styles.contactUsButton} onClick={toggleFormVisibility}>
          {isFormVisible ? 'Close' : 'Contact Us'}
        </button>
      )}

      {!isFooterVisible && isFormVisible && (
        <div className={styles.stickyFormContainer}>
          {isMobileView && (
            <button className={styles.closeButton} onClick={toggleFormVisibility}>
              &times; {/* X for close */}
            </button>
          )}

          <form onSubmit={handleSubmit} className={styles.contactFormS}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Eg: Ram"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength="50"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Eg: ram@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Enter a valid email address"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact">Contact Number</label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="Eg: +91-1234567890"
                  value={formData.contact}
                  onChange={handleChange}
                  maxLength={10}
                  required
                  pattern="\d{10}"
                  title="Contact number must be exactly 10 digits"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="course">Course</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a course
                  </option>
                  <option value="SAP">SAP</option>
                  <option value="IT Courses">IT Courses</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Data Visualisation">Data Visualisation</option>
                  <option value="HR Courses">HR Courses</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default SContactForm
