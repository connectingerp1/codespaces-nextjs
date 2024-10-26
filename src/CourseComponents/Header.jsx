import React, { useState, useEffect, useMemo, useContext } from 'react';
import Head from 'next/head'; // Use next/head instead of react-helmet
import { CityContext } from '../context/CityContext'; // Update the path as per your project structure
import Btnform from '../components/Btnform'; // Assuming Btnform is a separate component
import './Header.css';

// Fetch data at the server-side with getServerSideProps or getStaticProps
export async function getServerSideProps(context) {
  const { pageId, pageType } = context.query; // Assuming pageId and pageType come from the URL

  try {
    const response = await fetch('https://yourapi.com/api/dsHeaderData.json');
    const jsonData = await response.json();
    const pageData = jsonData[pageType]?.[pageId];

    if (pageData) {
      return {
        props: {
          pageData, // Pass the fetched data as a prop
        },
      };
    } else {
      return {
        notFound: true, // Return a 404 page if no data found
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        error: 'Error loading data', // Handle error properly
      },
    };
  }
}

const DSHeader = ({ pageData, error }) => {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const { city } = useContext(CityContext); // Assuming CityContext is available

  const [showForm, setShowForm] = useState(false);

  // Update data dynamically if city changes
  useEffect(() => {
    if (pageData) {
      const updatedData = {
        ...pageData,
        title: pageData.title.replace(/{city}/g, city),
        subtitle: pageData.subtitle.replace(/{city}/g, city),
        description: pageData.description.replace(/{city}/g, city),
        features: pageData.features.map((feature) =>
          feature.replace(/{city}/g, city)
        ),
        alumni: pageData.alumni.map((company) => ({
          ...company,
          name: company.name.replace(/{city}/g, city),
        })),
      };
      setFormData(updatedData);
    }
  }, [pageData, city]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, phone } = formData;

    if (!name || !email || !phone) {
      setSubmissionError('Fill all required fields');
      return false;
    }

    const phoneRegex = /^\+91\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setSubmissionError('Phone number must start with +91 and be followed by exactly 10 digits');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmissionError('Enter a valid email address');
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://yourapi.com/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      alert('Form submitted successfully!');
      setFormData({});
    } catch (error) {
      setSubmissionError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormInputs = useMemo(() => {
    if (!formData) return null;

    return formData.inputs.map((input, index) => {
      return input.countryCode ? (
        <div key={index} className="phone-input-it-ds" style={{ display: 'flex', gap: '0.5rem', maxWidth: '23.5vw' }}>
          <select style={{ flex: '0 0 80px', padding: '0.5rem', height: '3.5vw', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}>
            <option>{input.countryCode}</option>
          </select>
          <input
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            maxLength="10"
            style={{ flex: '1', padding: '0.5rem', height: '3.5vw', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
            value={formData[input.name] || ''}
            onChange={handleChange}
          />
        </div>
      ) : (
        <input
          key={index}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
          style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
          value={formData[input.name] || ''}
          onChange={handleChange}
        />
      );
    });
  }, [formData]);

  const handleButtonClick = () => {
    setShowForm(true); // Show form on button click
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close form
  };

  if (error) return <div>Error loading data: {error}</div>;

  return (
    <div className="container-it-ds-header">
      <Head>
        <title>{formData.title || 'Default Title'}</title>
        <meta name="description" content={formData.description || 'Default description'} />
        <meta name="keywords" content={formData.keywords?.join(', ') || 'Default, Keywords'} />
      </Head>

      <video
        className="background-video"
        src={formData.backgroundVideo}
        autoPlay
        muted
        loop
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
        loading="lazy"
      />

      <div className="left-section-it-ds">
        <h1>
          <span className="ds-header-span">{formData.title}</span>
        </h1>
        <h2>
          <span className="ds-header-span-2">{formData.subtitle}</span>
        </h2>
        <p>{formData.description}</p>
        <ul className="features-it-ds">
          {formData.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="alumni-it-ds">
          <span>Find our Alumni at -</span>
          <div className="alumni-logos-it-ds">
            {formData.alumni.map((company, index) => (
              <img key={index} src={company.logo} alt={`${company.name} logo`} />
            ))}
          </div>
        </div>
        <div className="buttons-it-ds">
          {formData.buttons.map((button, index) => (
            <button
              key={index}
              className={`batch-button-it-ds ${index === 0 ? 'button-style-1' : 'button-style-2'}`} // Conditional class
              onClick={handleButtonClick}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>

      <div className="right-section-it-ds">
        <h3>{formData.form.title}</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {renderFormInputs}
          <button
            type="submit"
            className="submit-button-it-ds"
            style={{ backgroundColor: '#dc2626', color: 'white', padding: '0.5rem', borderRadius: '0.375rem' }}
            disabled={isSubmitting}
          >
            {formData.form.submitText}
          </button>
        </form>
        {submissionError && <div className="error-message">{submissionError}</div>}
      </div>

      {showForm && <Btnform closeForm={handleCloseForm} />}
    </div>
  );
};

export default DSHeader;
