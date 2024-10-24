import React, { useState, useEffect } from 'react'
import styles from '../CallAdvisorsStrip.module.css'

const CallAdvisorsStrip = () => {
  const [advisorsContact, setAdvisorsContact] = useState('')
  const [location, setLocation] = useState('default')

  // Fetch the JSON file dynamically
  useEffect(() => {
    const fetchContactData = async () => {
      const response = await fetch('/Jsonfolder/datacontact.json')
      const data = await response.json()

      setAdvisorsContact(
        data[location]?.advisorsContact || data['default'].advisorsContact
      )
    }

    fetchContactData()
  }, [location])

  return (
    <div className={styles.callAdvisorsStrip}>
      {/* Left side content */}
      <div className={styles.rightStripContent}>
        <div className={styles.socialIconsStrip}>
          <a href="https://www.facebook.com/sapinstallation.pune.9">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://wa.me/919004002941">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://m.youtube.com/@connectingdotserp4991">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://in.linkedin.com/in/connecting-dots-erp-043039171">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/connecting_dots_sap_training?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Right side content (Call Advisors) */}
      <div className={styles.leftStripContent}>
        <span className={styles.phoneIcon}>
          <i className="fa fa-phone"></i>
        </span>
        <span className={styles.advisorText}>Get Free Career counselling: </span>
        <a href={`tel:${advisorsContact}`} className={styles.advisorNumber}>
          {advisorsContact}
        </a>
      </div>
    </div>
  )
}

export default CallAdvisorsStrip
