import React from 'react';
import styles from './Chevron.module.css'; // CSS Module import

const Phases = () => {
  return (
    <div className={styles.containerCH}>
      <h1>TRAINING TO PLACEMENT APPROACH</h1>
      <div className={styles.phases}>
        <ul>
          <li className={`${styles['chevron-item']} ${styles['highest-salary']}`}>
            <a href="#1">
              <h4 style={{ marginTop: '10px' }}>Enroll</h4>
            </a>
          </li>
          <li className={`${styles['chevron-item']} ${styles['highest-salary']}`}>
            <a href="#2">
              <h4>Corporate Style Training</h4>
            </a>
          </li>
          <li className={`${styles['chevron-item']} ${styles['students-trained']}`}>
            <a href="#3">
              <h4>Real-Time Projects</h4>
            </a>
          </li>
          <li className={`${styles['chevron-item']} ${styles['hiring-companies']}`}>
            <a href="#4">
              <h4>Interview Preparation</h4>
            </a>
          </li>
          <li className={`${styles['chevron-item']} ${styles['total-branches']}`}>
            <a href="#5">
              <h4>Experience Alteration</h4>
            </a>
          </li>
          <li className={`${styles['chevron-item']} ${styles['highest-salary']}`}>
            <a href="#6">
              <h4>Job Assistance</h4>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Phases;
