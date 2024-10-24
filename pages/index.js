import React, { useRef } from 'react'
import Head from 'next/head' // Use Next.js' Head for SEO
import HeaderCarousel from '../components/Homepage/HeaderCarousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/App.css'
import Navbar from '/Homepage/Navbar'
import Marquee2 from '/Homepage/Marquee2'
import PlacementSection from '/Homepage/PlacementSection'
import Keypoints from '/Homepage/Keypoints'
import PopCourses from '/Homepage/PopCourses'
import Achievements from '/Homepage/Achievements'
import Ourstats from '/Homepage/Ourstats'
import Certificate from '/Homepage/Certificate'
import OurBranches from '/Homepage/OurBranches'
import Chevron from '/Homepage/Chevron'
import FeedbackandReviews from '/Homepage/FeedbackandReviews'
import Ourclients from '/Homepage/Ourclients'

export default function Homepage() {
  const popCoursesRef = useRef(null)

  // Function to scroll to the PopCourses component
  const scrollToPopCourses = () => {
    popCoursesRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>Connecting Dots ERP | SAP Training Institute In Pune</title>
        <meta
          name="description"
          content="We offer Expert-led training in SAP, Software Development, Digital Marketing, and HR Courses with strong placement support for your career."
        />
        <meta
          name="keywords"
          content="SAP Certification Courses, SAP Course, Data Science Course, Power Bi Course, Digital Marketing Course, HR Training Institute, SAP Training Institute, Python Course, Software Course, Training, Education"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Connecting Dots ERP SAP-Training-Institute" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph meta tags */}
        <meta
          property="og:title"
          content="Connecting Dots ERP SAP-Training-Institute"
        />
        <meta
          property="og:description"
          content="With 10+ years of experience we offer Expert-led training in SAP, Software Development, Digital Marketing, and HR Courses with strong placement support for your career."
        />
        <meta
          property="og:image"
          content="/Navbar/connecting-dot-erp-logo.avif"
        />
        <meta property="og:url" content="https://www.institutename.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Institute Name" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Connecting Dots ERP | Software Training Institute"
        />
        <meta
          name="twitter:description"
          content="India's leading software training institute with 10+ years of experience, offering SAP, IT, Digital Marketing, and HR training with placement"
        />
        <meta name="twitter:site" content="@CD_ERP" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              "name": "Connecting Dots ERP SAP Training Institute",
              "url": "https://www.connectingdotserp.com",
              "logo": "/Navbar/connecting-dot-erp-logo.avif",
              "sameAs": [
                "https://www.facebook.com/sapinstallation.pune.9",
                "https://x.com/CD_ERP",
                "https://www.instagram.com/connecting_dots_sap_training?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919004002958",
                "contactType": "Customer Support",
                "areaServed": "IN",
                "availableLanguage": ["English"]
              },
              "description": "We offer expert-led training in SAP, Software Development, Digital Marketing, and HR courses with strong placement support for your career.",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "1st Floor, 101, Police, Wireless Colony, Vishal Nagar, Pimple Nilakh, Pune, Pimpri-Chinchwad",
                  "addressLocality": "Pune",
                  "addressRegion": "MH",
                  "postalCode": "411027",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "8th Floor, Paradise Tower, next to McDonald's, Naupada, Thane West, Mumbai",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Thane",
                  "postalCode": "400601",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "8th Floor, Paradise Tower, next to McDonald's, Naupada, Thane West, Raipur",
                  "addressLocality": "Chhattisgarh",
                  "addressRegion": "Raipur",
                  "postalCode": "492001",
                  "addressCountry": "IN"
                }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "18.586532821424697",
                "longitude": "73.78137250928907"
              },
              "foundingDate": "2013",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Nitendra Singh"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "185"
              },
              "openingHours": "Mo-Fr 24 hours",
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card"],
              "currenciesAccepted": "INR",
              "telephone": "+919004002958"
            }
          `}
        </script>
      </Head>

      {/* Main Content */}
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
        <Achievements />
        <FeedbackandReviews />
        <Certificate pageId="HomepageCERT" />
        <OurBranches />
      </main>
    </>
  )
}
