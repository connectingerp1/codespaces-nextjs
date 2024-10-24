import React from "react";
import Image from "next/image";
import styles from "./Keypoints.module.css"; // Using CSS module

// Image imports (using public directory)
import logo3 from "/public/Keypoints/watchlogo.avif";
import logo4 from "/public/Keypoints/exp alt.avif";
import logo6 from "/public/Keypoints/job assistance.avif";
import logo7 from "/public/Keypoints/corporate-alt.avif";
import logo8 from "/public/Keypoints/experiencelogo.avif";
import logo9 from "/public/Keypoints/cptraining.avif";

const Keypoints = () => {
  const keyFeatures = [
    {
      title: "10+ Years Experience",
      desc: "Seasoned professional with over 10 years of experience in the field.",
    },
    {
      title: "MNC Experienced Professional",
      desc: "Learn from seasoned professionals with extensive industry experience and knowledge.",
    },
    {
      title: "100% Job Assistance",
      desc: "Round-the-clock assistance to resolve queries and enhance the learning experience.",
    },
    {
      title: "Corporate Style Training",
      desc: "Craft impressive resumes to highlight your skills and achievements effectively.",
    },
    {
      title: "Placement Assistance",
      desc: "Engage in practical projects to apply data science concepts in real-world.",
    },
    {
      title: "Real Time Training & Project",
      desc: "Earn a recognized certification upon successful course completion.",
    },
  ];

  const homeAbout = [
    {
      cover: logo8,
      title: "10+ Years Experience",
      desc: "Seasoned professional with over 10 years of experience in the field",
      className: styles.logo1,
    },
    {
      cover: logo7,
      title: "MNC Experienced Professional",
      desc: "Highly Qualified and Industry Experience Professionals for providing Real-Time Scenario Based Training.",
      className: styles.logo1,
    },
    {
      cover: logo9,
      title: "Corporate Style Training",
      desc: "Multiple Batches & Support Systems to make sure you can learn according to your convenience.",
      className: styles.logo2,
    },
    {
      cover: logo4,
      title: "Experience Alteration",
      desc: "After Training Completion, we provide Job Assistance, Scheduled Interview for every Individual.",
      className: styles.logo5,
    },
    {
      cover: logo3,
      title: "Real Time Training & Project",
      desc: "After Training Completion, we provide Job Assistance, Scheduled Interview for every Individual.",
      className: styles.logo4,
    },
    {
      cover: logo6,
      title: "100% Job Assistance",
      desc: "After Training Completion, we provide Job Assistance, Scheduled Interview for every Individual.",
      className: styles.logo3,
    },
  ];

  return (
    <div className={`text-center ${styles.keyCoursesContainer}`}>
      <div className={styles.keypointsTitle}>WHY CONNECTING DOTS ERP?</div>
      <div className={styles.keypoints}>
        <div className={styles.circle}>
          {keyFeatures.map((feature, index) => (
            <div className={`${styles.feature} ${styles[`feature${index}`]}`} key={index}>
              <div className={styles.title}>{feature.title}</div>
            </div>
          ))}
          <div className={styles.centerFeature}>
            <div className={styles.centerText}>
              <span className={styles.centreKeypoints}>Keypoints</span>
            </div>
          </div>
        </div>
        <div className={styles.keyNotes}>
          {homeAbout.map((feature, index) => (
            <div className={styles.note} key={index}>
              <div className={styles.img}>
                <Image
                  src={feature.cover}
                  alt={feature.title}
                  className={feature.className}
                  width={50} // Specify width and height for next/image
                  height={50}
                />
              </div>
              <div className={styles.textContainer}>
                <strong>{feature.title}:</strong> {feature.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keypoints;
