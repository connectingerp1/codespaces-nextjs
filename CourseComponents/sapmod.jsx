import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import ContactForm from '../../components/Homepage/ContactForm';
import { CityContext } from '../../components/CityContext';
import styles from './sapmod.module.css';

// This method fetches data server-side for each page load
export async function getServerSideProps(context) {
  const { pageId } = context.params;
  let data = null;
  let error = null;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/Jsonfolder/sapmod.json`);
    if (!response.ok) throw new Error('Network response was not ok');
    const jsonData = await response.json();

    if (jsonData?.[pageId]) {
      const pageData = jsonData[pageId];
      // Assuming `city` will be passed as context
      const city = context.query.city || 'defaultCity'; // You can pass city as part of query or params
      pageData.title2 = pageData.title2?.replace(/{city}/g, city);
      pageData.description = pageData.description?.replace(/{city}/g, city);
      pageData.summary = pageData.summary?.replace(/{city}/g, city);
      pageData.features = pageData.features?.map((feature) => ({
        ...feature,
        description: feature.description?.replace(/{city}/g, city),
      }));
      pageData.overview = {
        ...pageData.overview,
        title: pageData.overview.title?.replace(/{city}/g, city),
        modules: pageData.overview.modules?.map((module) => ({
          ...module,
          name: module.name?.replace(/{city}/g, city),
        })),
      };

      data = pageData;
    } else {
      throw new Error('Page data not found');
    }
  } catch (err) {
    error = err.message;
  }

  return { props: { data, error, pageId } };
}

const SapModComponent = ({ data, error, pageId }) => {
  const [showPopupForm, setShowPopupForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const city = useContext(CityContext);

  const handleDownloadBrochureClick = () => {
    setShowPopupForm(true);
  };

  const handleFormSubmit = () => {
    setFormSubmitted(true);
    setShowPopupForm(false);
    if (data && data.downloadLink) {
      window.open(data.downloadLink, '_blank');
    } else {
      alert('Download link is not available.');
    }
  };

  if (error) {
    return <p>Error loading data: {error}</p>;
  }

  if (!data) {
    return <p>No data available for the specified page.</p>;
  }

  return (
    <div className={styles['sap-mod-container']}>
      <h1 className={styles['sap-mod-heading']}>SYLLABUS</h1>
      <div className={styles['sap-mod-card']}>
        <h2 className="text-2xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: data.title2 }} />
        <p className="mb-4 text-lg">{data.description}</p>
        <p className="text-base mb-6">{data.summary}</p>

        <div id="glow-container" className="glow-text"></div>

        <p className="text-danger mb-6">{data.noteMaster}</p>
        <div className="space-y-4">
          {data.features?.map((feature, index) => (
            <div key={index} className="flex items-center">
              <span className="bg-primary-foreground text-primary rounded-full px-3 py-1 text-sm font-bold">
                {feature.label}
              </span>
              <span className="ml-3 text-base">{feature.description}</span>
            </div>
          ))}
        </div>

        <div className="sap-mod-button-container mt-6">
          <button className="sap-mod-button" onClick={handleDownloadBrochureClick}>
            Download Brochure
          </button>

          <video
            src={data.videoUrl}
            className="download-video"
            autoPlay
            loop
            muted
          />
        </div>
      </div>

      {showPopupForm && (
        <>
          <div className={styles['contact-form-overlay-sapmod']}></div>
          <div className={styles['contact-form-modal-sapmod']}>
            <ContactForm onSubmit={handleFormSubmit} />
          </div>
        </>
      )}

      <div className={styles['sap-mod-card-secondary']}>
        <h3 className="text-xl font-semibold mb-6">{data.overview.title}</h3>
        <div className="space-y-4">
          {data.overview.modules?.map((module, index) => (
            <div key={index} className={index % 2 === 1 ? styles['alt'] : ''}>
              <span className="text-lg">{module.name}</span>
              <span className="text-sm text-gray-600">{module.duration}</span>
            </div>
          ))}
          <p className="sap-mod-note">
            *Note: To see the complete Modules Click on 'Download Syllabus' button
          </p>
        </div>
      </div>

      <div className="sap-mod-note">
        {data.note && (
          <p className="text-lg" dangerouslySetInnerHTML={{ __html: data.note.replace(/\n/g, '<br/>') }} />
        )}
      </div>
    </div>
  );
};

export default SapModComponent;
