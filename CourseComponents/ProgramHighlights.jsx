import React, { useState } from 'react';
import Image from 'next/image';
import './ProgramHighlights.css';

// Import logos from the 'public' folder
import Assignmentlogo from '/DSimages/assignment-icon.avif';
import Jobreadylogo from '/DSimages/job-readiness-icon.avif';
import Companylogo from '/DSimages/company-icon.avif';
import Expalt from '/DSimages/Expaltlogo.avif';

// Steps data
const steps = [
  {
    title: '25+ Assignments',
    description: 'Work on 25+ Assignements',
    progress: 25,
    imgSrc: Assignmentlogo,
    alt: 'Assignments Logo',
  },
  {
    title: 'Tied-up with 2000+ Companies',
    description: 'ConnectingDotsERP has tied up with 2000+ Companies to provide Jobs to Many Students.',
    progress: 50,
    imgSrc: Companylogo,
    alt: 'Company Logo',
  },
  {
    title: 'Experience Alteration System',
    description: 'A dedicated placement who completed the course.',
    progress: 75,
    imgSrc: Expalt,
    alt: 'Experience Alteration Logo',
  },
  {
    title: 'Job Readiness Program',
    description: 'A dedicated placement who completed the course.',
    progress: 100,
    imgSrc: Jobreadylogo,
    alt: 'Job Readiness Logo',
  },
];

const ProgramHighlights = () => {
  const [progress, setProgress] = useState(0);

  const handleMouseEnter = (stepProgress) => {
    setProgress(stepProgress);
  };

  return (
    <div className="container-it-ds-prgrm">
      <h2>PROGRAM HIGHLIGHTS</h2>

      {/* Progress bar */}
      <div className="progress-bar-it-ds">
        <div className="progress-it-ds" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Cards section */}
      <div className="cards-it-ds">
        {steps.map((step, index) => (
          <div
            key={index}
            className="card-it-ds"
            onMouseEnter={() => handleMouseEnter(step.progress)}
          >
            {/* Use the next/image component for optimized image loading */}
            <Image
              src={step.imgSrc}
              alt={step.alt}
              className="card-img-it-ds"
              width={100} // Adjust the width as needed
              height={100} // Adjust the height as needed
            />
            <h3>{step.title}</h3>
            <hr />
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramHighlights;
