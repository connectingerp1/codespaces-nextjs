import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from './OurBranches.module.css'; // Import as CSS module

// Branches data
const branches = [
  {
    city: 'Pune',
    address:
      '1st Floor,101, Police, Wireless Colony, Vishal Nagar, Pimple Nilakh, Pune, Pimpri-Chinchwad, Maharashtra 411027',
    position: { lat: 18.586392186498944, lng: 73.78140166973165 },
    mapLink: 'https://maps.app.goo.gl/DNwzKa2Yt1WB6zUB7',
  },
  {
    city: 'Mumbai',
    address:
      'Office No. 806, 8th Floor, Paradise Tower, next to MCDonalds, Naupada, Thane West, Mumbai, Thane, Maharashtra 400601',
    position: { lat: 19.1877496131839, lng: 72.97525703071106 },
    mapLink: 'https://maps.app.goo.gl/QABRjB87mA79aSyN9',
  },
  {
    city: 'Raipur',
    address: 'New Panchsheel Nagar, Civil Lines, Raipur, Chhattisgarh 492001',
    position: { lat: 21.237314571201736, lng: 81.6539475802003 },
    mapLink: 'https://maps.app.goo.gl/1KA1uhcyoF5Tu4Mg6',
  },
];

const Branches = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Make sure Google Maps is only loaded on the client side
    setIsClient(true);
  }, []);

  const containerStyle = {
    width: '100%',
    height: '200px', // Adjust height as needed
  };

  return (
    <div className={styles.branchesSection}>
      <h2 className={styles.branchesTitle}>OUR BRANCHES</h2>
      <div className={styles.branchesContainer}>
        {branches.map((branch, index) => (
          <div className={styles.branchCard} key={index}>
            <h3>{branch.city}</h3>
            {/* Google Map */}
            {isClient && (
              <div className={styles.mapContainer}>
                <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={branch.position}
                    zoom={13}
                  >
                    <Marker position={branch.position} />
                  </GoogleMap>
                </LoadScript>
              </div>
            )}
            <div className={styles.add2}>
              <a
                href={branch.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {branch.address}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branches;
