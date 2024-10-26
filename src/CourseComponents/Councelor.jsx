import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import styles from './Councelor.module.css' // CSS Module import for scoped styling

// Dynamically import Btnform to prevent SSR issues (if it's a client-side component)
const Btnform = dynamic(() => import('../components/Btnform'), { ssr: false })

const CallbackComponent = () => {
  const [showForm, setShowForm] = useState(false) // Show form state

  const handleButtonClick = () => {
    setShowForm(true) // Show form on button click
  }

  const handleCloseForm = () => {
    setShowForm(false) // Close form
  }

  useEffect(() => {
    // AOS library should only run on the client side
    if (typeof window !== 'undefined') {
      const AOS = require('aos')
      require('aos/dist/aos.css')
      AOS.init({ duration: 1000 }) // Initialize AOS with a 1-second duration for animations
    }
  }, [])

  return (
    <div>
      <div className={styles.counselorContainer} data-aos="fade-up">
        <video
          className={styles.backgroundVideo}
          src="https://i.imgur.com/OKLCgpA.mp4"
          autoPlay
          muted
          loop
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        />
        <div className={styles.counselorContent} data-aos="zoom-in">
          <div className={styles.counselorText} data-aos="fade-right">
            {/* Your text or other content goes here */}
          </div>
          <div className={styles.buttonContainer} data-aos="fade-left">
            <button
              className={styles.requestButton}
              onClick={handleButtonClick}
            >
              Request Callback
            </button>
          </div>
        </div>
      </div>
      {showForm && <Btnform onClose={handleCloseForm} />}
    </div>
  )
}

export default CallbackComponent
