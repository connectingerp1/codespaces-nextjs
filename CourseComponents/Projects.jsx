import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'; // Next.js Image component
import './Projects.css';

// The Induspro component
const Induspro = ({ pageId, pageType }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [indusproData, setIndusproData] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Jsonfolder/indusprodata.json');
        const data = await response.json();
        const pageData = data[pageType]?.[pageId];
        setIndusproData(pageData);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };
    fetchData();
  }, [pageId, pageType]);

  // Handle carousel item selection
  const handleSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  if (!indusproData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="induspro-container text-center">
      <div className="induspro-title">
        <h2>{indusproData.title}</h2>
      </div>
      <Carousel
        activeIndex={carouselIndex}
        onSelect={handleSelect}
        interval={3000} // 3 seconds interval for automatic sliding
        indicators={false}
        controls={false}
        pause="hover" // Pause the carousel on hover
      >
        {/* First carousel item */}
        <Carousel.Item>
          <div className="induspro-grid">
            {indusproData.projects.slice(0, 5).map((project, index) => (
              <div key={index} className="induspro-card">
                <div className="induspro-container">
                  {/* Use Next.js Image component for optimized image loading */}
                  <Image
                    src={project.icon}
                    alt={`${project.name} icon`}
                    className="induspro-icon"
                    width={100} // Set appropriate width
                    height={100} // Set appropriate height
                  />
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </Carousel.Item>
        {/* Second carousel item */}
        <Carousel.Item>
          <div className="induspro-grid">
            {indusproData.projects.slice(5, 10).map((project, index) => (
              <div key={index} className="induspro-card">
                <div className="induspro-container">
                  {/* Use Next.js Image component for optimized image loading */}
                  <Image
                    src={project.icon}
                    alt={`${project.name} icon`}
                    className="induspro-icon"
                    width={100} // Set appropriate width
                    height={100} // Set appropriate height
                  />
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Radio buttons for carousel navigation */}
      <div className="induspro-radio-buttons">
        <label>
          <input
            type="radio"
            name="carousel-radio"
            checked={carouselIndex === 0}
            onChange={() => handleSelect(0)}
          />
        </label>
        <label>
          <input
            type="radio"
            name="carousel-radio"
            checked={carouselIndex === 1}
            onChange={() => handleSelect(1)}
          />
        </label>
      </div>
    </div>
  );
};

export default Induspro;
