import React from 'react';
import styles from './Marquee.module.css'; // Import the CSS module

const Marquee = () => {
  return (
    <div className={styles.mainContainerMarquee}>
      <div className={styles.mainContainerMarqueeTrack}>
        <div className={styles.mainContainerMarqueeItems}>
          <span className={styles.mainContainerMarqueeItem}>
            SAP FICO Batch Starting Soon!
          </span>
          <span className={styles.mainContainerMarqueeItem}>
            Data Science A1 batch starting from 5th October!
          </span>
        </div>
        <div aria-hidden="true" className={styles.mainContainerMarqueeItems}>
          <span className={styles.mainContainerMarqueeItem}>
            Get exciting benefits by registering before 1st October!
          </span>
          <span className={styles.mainContainerMarqueeItem}>
            SAP HANA batch commencing soon!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
