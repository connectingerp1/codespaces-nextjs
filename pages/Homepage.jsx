// pages/Homepage.jsx
import React, { useRef } from 'react';
import Head from 'next/head';
import HeaderCarousel from '../src/Homepage/HeaderCarousel';
import Marquee2 from '../src/Homepage/Marquee2';
import PlacementSection from '../src/Homepage/PlacementSection';
import Keypoints from '../src/Homepage/Keypoints';
import PopCourses from '../src/Homepage/PopCourses';
import Achievement from '../src/Homepage/Achievement';
import Ourstats from '../src/Homepage/Ourstats';
import Certificate from '../src/Homepage/Certificate';
import OurBranches from '../src/Homepage/OurBranches';
import Chevron from '../src/Homepage/Chevron';
import FeedbackandReviews from '../src/Homepage/FeedbackandReviews';
import Ourclients from '../src/Homepage/Ourclients';


function Homepage() {
  const popCoursesRef = useRef(null);

  const scrollToPopCourses = () => {
    popCoursesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        {/* <title>Homepage - ConnectingDots</title>
        <meta name="description" content="Welcome to the ConnectingDots homepage" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="App">
        <main>
          <HeaderCarousel scrollToPopCourses={scrollToPopCourses} />
          <Marquee2 />
          <Chevron />
          <Keypoints />
          <Ourclients />
          <div ref={popCoursesRef}>
            <PopCourses />
          </div>
          <PlacementSection />
          <Ourstats />
          <Achievement />
          <FeedbackandReviews />
          {/* <Certificate pageId="HomepageCERT" /> */}
          <OurBranches />
        </main>
      </div>
    </>
  );
}

export default Homepage;
