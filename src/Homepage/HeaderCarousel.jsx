import { useEffect, useState } from 'react'
import { Carousel, Col, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './HeaderCarousel.module.css' // Assuming CSS Modules for scoping
import Btnform from '../components/Btnform'
import Image from 'next/image'
import logostrip from '/public/Headercarousel/logo strip.avif'

// Static text and image data
const TEXTS1 = [
  'Connect Your Dots with SAP Expertise',
  'Connect Your Dots with Data Science',
  'Connect Your Dots in IT Excellence',
  'Connect Your Dots in Digital Marketing',
]

const IMAGES = [
  '/Headercarousel/SAP module1.avif',
  '/Headercarousel/DSh.avif',
  '/Headercarousel/IT.avif',
  '/Headercarousel/DGM.avif',
]

const HeaderCarousel = ({ scrollToPopCourses }) => {
  const [isMobileView, setIsMobileView] = useState(false)
  const [index, setIndex] = useState(0)
  const [textVisible, setTextVisible] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [question, setQuestion] = useState({
    title: "Welcome to the <span class='highlight'>Quiz!</span>",
    text: 'Hover me or click on a question button to see the question here.',
  })

  const questionData = {
    Q1: {
      title:
        "Q.What is the function of an <span class='highlight'>HR Payroll</span> system?",
      text: "The function of an <span class='highlight'>HR payroll system</span> is to automate and manage employee compensation processes, including calculating wages, withholding taxes, and ensuring compliance with labor laws.",
    },
    Q2: {
      title:
        "Q.What is the purpose of the <span class='highlight'>CO</span> module in <span class='highlight'>SAP FICO</span>?",
      text: "The <span class='highlight'>CO (Controlling)</span> module in <span class='highlight'>SAP FICO</span> helps manage and monitor internal costs.",
    },
    Q3: {
      title:
        "Q.What is the role of <span class='highlight'>Express.js</span> in the <span class='highlight'>MERN</span> stack?",
      text: "<span class='highlight'>Express.js</span> is a lightweight web application framework for Node.js, used in the <span class='highlight'>MERN</span> stack.",
    },
  }

  // Check for mobile view
  const checkMobileView = () => {
    setIsMobileView(window.innerWidth <= 768)
  }

  useEffect(() => {
    checkMobileView()
    window.addEventListener('resize', checkMobileView)
    return () => window.removeEventListener('resize', checkMobileView)
  }, [])

  // Rotating text functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextVisible(false)
      setTimeout(() => {
        setIndex((index) => (index + 1) % TEXTS1.length)
        setTextVisible(true)
      }, 500)
    }, 3000) // 3 seconds
    return () => clearInterval(intervalId)
  }, [])

  // Handle form modal visibility
  const handleButtonClick = () => {
    setShowForm(true) // Show form on button click
  }

  const handleCloseForm = () => {
    setShowForm(false) // Close form
  }

  const getImageStyle = (index) => ({
    width: '100%',
    height: 'auto',
  })

  return (
    <>
      <div>
        <Carousel>
          {/* First Slide */}
          <Carousel.Item>
            <div className="carouselSlide">
              <div className="carouselText">
                <h2>
                  Unlock your <span className="highlight">Career</span>{' '}
                  potential
                </h2>
                <h3>
                  <span className="highlight">No.1 Training &</span>{' '}
                  Placement Center{' '}
                </h3>
                <p>
                  For more than 10 years, we've been passionate about providing
                  engaging, instructor-led training that helps professionals
                  around the world grow and succeed.
                </p>
                <Col>
                  <p>
                    Est. 2013 Trusted by{' '}
                    <span className="highlight">10000+</span> Students
                  </p>
                </Col>
                <button className="custom-btn btn-3" onClick={handleButtonClick}>
                  <span>Free Consultation</span>
                </button>
                <div className="logostrip">
                  <Image src={logostrip} alt="companies" />
                </div>
              </div>
              <div className="carouselImage">
                <Image
                  src="/Headercarousel/headerManimg.avif"
                  alt="Career Potential"
                  width={500}
                  height={300}
                  priority
                />
              </div>
            </div>
          </Carousel.Item>

          {/* Second Slide */}
          <Carousel.Item>
            <div className="carouselSlide2">
              <div className="carouselText2">
                <h2>
                  All Our <span className="highlight">Top Programs</span>{' '}
                  Include <br />
                  <span className="highlight">Generative AI</span>{' '}
                  Components
                </h2>
                <h1>
                  Be a Leader<span className="highlight"></span> in your
                  field <br />
                  <span className="highlight">
                    Change, Adapt and Build
                  </span>{' '}
                  with AI.
                </h1>
                <Button className="slide2Btn" onClick={scrollToPopCourses}>
                  Explore Our Top Programs
                </Button>
              </div>
              <div className="cardBox2">
                <Card.Img
                  className="transitionImage"
                  style={getImageStyle(index)}
                  src={IMAGES[index]}
                  alt="Future Starts Here"
                />
              </div>
            </div>
          </Carousel.Item>

          {/* Third Slide */}
          {!isMobileView && (
            <Carousel.Item>
              <div className="carouselSlide3">
                <div className="leftSideH3">
                  <h1>
                    Secure your <span className="highlight">Dream Career</span>{' '}
                    with <span className="bold">Live Classes</span> From
                    Industry Experts.
                  </h1>
                  <h2>
                    Our <span className="highlight">Mentors</span> Come From
                    Top <span className="highlight">MNCs</span>
                  </h2>
                  <h2>
                    <Image
                      src="/Headercarousel/assurance.avif"
                      alt="Assurance badge"
                      width={100}
                      height={100}
                      className="assuredPlacementImage"
                    />
                    Assured Placement Opportunity*
                  </h2>
                </div>
                <div className="cardBox3">
                  <h2>Our Mentors Come From</h2>
                  <div className="content3">
                    <div className="imageGrid">
                      {/* List of Company Logos */}
                      <Image src="/Headercarousel/ibm1.avif" alt="ibm logo" width={60} height={60} />
                      <Image src="/Headercarousel/tcs1.avif" alt="tcs logo" width={60} height={60} />
                      <Image src="/Headercarousel/LnT.avif" alt="Lnt logo" width={60} height={60} />
                      {/* Add more logos as needed */}
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          )}

          {/* Fourth Slide */}
          <Carousel.Item>
            <div className="carouselSlide4">
              <div className="leftSideH">
                <h1 dangerouslySetInnerHTML={{ __html: question.title }}></h1>
                <p dangerouslySetInnerHTML={{ __html: question.text }}></p>
                <div className="quizOptions">
                  <button
                    className={circularButton}
                    onMouseEnter={() => setQuestion(questionData.Q1)}
                    onClick={() => setQuestion(questionData.Q1)}
                  >
                    Q1
                  </button>
                  <button
                    className="circularButton"
                    onMouseEnter={() => setQuestion(questionData.Q2)}
                    onClick={() => setQuestion(questionData.Q2)}
                  >
                    Q2
                  </button>
                  <button
                    className="circularButton"
                    onMouseEnter={() => setQuestion(questionData.Q3)}
                    onClick={() => setQuestion(questionData.Q3)}
                  >
                    Q3
                  </button>
                </div>
              </div>
              <div className="imageContainer">
                <Image
                  className="mobileImage"
                  src={IMAGES[index]}
                  alt="Future Starts Here"
                  width={500}
                  height={300}
                  priority
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        {showForm && (
          <div className="formModal">
            <Btnform handleCloseForm="handleCloseForm" />
          </div>
        )}
      </div>
    </>
  )
}

export default HeaderCarousel
