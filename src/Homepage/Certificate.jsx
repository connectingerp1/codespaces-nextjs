import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import Btnform from '../components/Btnform';
import './Certificate.module.css';

const Certificate = ({ pageId }) => {
  const [showForm, setShowForm] = useState(false);
  const [certificateInfo, setCertificateInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificateData = async () => {
      try {
        const response = await fetch('/Jsonfolder/certificateData.json');
        if (!response.ok) throw new Error('Failed to fetch certificate data');

        const jsonData = await response.json();
        const pageCertificate = jsonData.pages.find(page => page.pageId === pageId);

        if (pageCertificate) {
          setCertificateInfo(pageCertificate);
        } else {
          throw new Error('Certificate data not found for the specified page ID');
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCertificateData();
  }, [pageId]);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!certificateInfo) return <p>No certificate data available.</p>;

  return (
    <div className="certificateSection">
      <h2 className="certificateTitle">CERTIFICATE</h2>
      <div className="certificateContent">
        <div className="certificateImage">
          <Image
            src={certificateInfo.image}
            alt="Certificate"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="certificateText">
          <h2>Congratulations on Completing Your Training!</h2>
          <h4 className="certificateTitle2">{certificateInfo.courseTitle}</h4>
          <p>{certificateInfo.completionText}</p>
          <p>{certificateInfo.description}</p>
          <div className="mb-3" style={{ display: 'flex', justifyContent: 'left' }}>
            <Button className="outline-btn" onClick={handleButtonClick}>Get your Certificate</Button>
          </div>
          {showForm && <Btnform onClose={handleCloseForm} />}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
