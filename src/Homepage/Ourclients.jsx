import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ourclients.module.css'; // Use CSS Module for scoped styles

import Image from 'next/image'; // Import Next.js Image component

import amdocsLogo from '/public/Ourclients/Artboard 2.avif';
import Logo from '/public/Ourclients/Artboard 10.avif';
import Logo1 from '/public/Ourclients/Artboard 11.avif';
import Logo2 from '/public/Ourclients/Artboard 12.avif';
import Logo3 from '/public/Ourclients/Artboard 13.avif';
import Logo4 from '/public/Ourclients/Artboard 14.avif';
import Logo5 from '/public/Ourclients/Artboard 15.avif';
import Logo6 from '/public/Ourclients/Artboard 16.avif';
import Logo7 from '/public/Ourclients/Artboard 17.avif';
import Logo8 from '/public/Ourclients/Artboard 18.avif';
import Logo9 from '/public/Ourclients/Artboard 19.avif';
import Logo10 from '/public/Ourclients/Artboard 20.avif';
import Logo11 from '/public/Ourclients/Artboard 21.avif';
import Logo12 from '/public/Ourclients/Artboard 22.avif';
import Logo13 from '/public/Ourclients/Artboard 23.avif';
import Logo14 from '/public/Ourclients/Artboard 24.avif';
import Logo15 from '/public/Ourclients/Artboard 25.avif';
import Logo16 from '/public/Ourclients/Artboard 26.avif';
import Logo17 from '/public/Ourclients/Artboard 40.avif';
import Logo18 from '/public/Ourclients/Artboard 41.avif';
import Logo19 from '/public/Ourclients/Artboard 42.avif';
import Logo20 from '/public/Ourclients/Artboard 43.avif';
import Logo21 from '/public/Ourclients/Artboard 44.avif';
import Logo22 from '/public/Ourclients/Artboard 45.avif';
import Logo23 from '/public/Ourclients/Artboard 46.avif';
import Logo24 from '/public/Ourclients/Artboard 47.avif';
import Logo25 from '/public/Ourclients/Artboard 48.avif';
import Logo26 from '/public/Ourclients/Artboard 49.avif';
import Logo27 from '/public/Ourclients/Artboard 50.avif';
import Logo28 from '/public/Ourclients/Artboard 51.avif';
import Logo29 from '/public/Ourclients/Artboard 52.avif';
import Logo30 from '/public/Ourclients/Artboard 53.avif';
import Logo31 from '/public/Ourclients/Artboard 54.avif';

const clients = [
  { name: 'Amdocs', logo: amdocsLogo },
  { name: 'HDFC', logo: Logo },
  { name: 'Genius', logo: Logo1 },
  { name: 'John Deere', logo: Logo2 },
  { name: 'Volkswagen', logo: Logo3 },
  { name: 'Capita', logo: Logo4 },
  { name: 'Crisil', logo: Logo5 },
  { name: 'EXL', logo: Logo6 },
  { name: 'Jindal', logo: Logo7 },
  { name: 'Cummins', logo: Logo8 },
  { name: 'ISS', logo: Logo9 },
  { name: 'Monginis', logo: Logo10 },
  { name: 'Weber', logo: Logo11 },
  { name: 'Syntel', logo: Logo12 },
  { name: 'ASK', logo: Logo13 },
  { name: 'Pizza Hut', logo: Logo14 },
  { name: 'Kelly Services', logo: Logo15 },
  { name: 'Godrej', logo: Logo16 },
  { name: 'Zensar', logo: Logo17 },
  { name: 'Swiggy', logo: Logo18 },
  { name: 'Paytm', logo: Logo19 },
  { name: 'Vyapar', logo: Logo21 },
  { name: 'Airmeet', logo: Logo22 },
  { name: 'MoneyTap', logo: Logo23 },
  { name: 'BharatPe', logo: Logo24 },
  { name: 'HomeLane', logo: Logo25 },
  { name: 'IBM', logo: Logo26 },
  { name: 'Leap Finance', logo: Logo27 },
  { name: 'Dream11', logo: Logo28 },
  { name: 'ShareChat', logo: Logo29 },
  { name: 'BharatAgri', logo: Logo30 },
  { name: 'EatFit', logo: Logo31 },
  { name: 'WhiteHat Jr', logo: Logo20 },
];

const OurClients = () => {
  return (
    <Container fluid className="our-clients-section text-center">
     <h2 className="section-titleC">OUR CLIENTS</h2>
      <div className="marquee-container">
      <div className="marquee marquee1">
      <div className="marquee-content">
            {clients.concat(clients).map((client, index) => (
              <div key={index} className="client-logo-container">
                <Image
                  src={client.logo}
                  alt={client.name}
                   className="client-logo"
                  layout="responsive"
                  width={100} // Adjust as needed
                  height={100} // Adjust as needed
                />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee marquee2 reverse">
        <div className="marquee-content">
            {clients.concat(clients).map((client, index) => (
              <div key={index + clients.length} className="client-logo-container">
                <Image
                  src={client.logo}
                  alt={client.name}
                   className="client-logo"
                  layout="responsive"
                  width={100} // Adjust as needed
                  height={100} // Adjust as needed
                />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee marquee3">
        <div className="marquee-content">
            {clients.concat(clients).map((client, index) => (
              <div key={index} className="client-logo-container">
                <Image
                  src={client.logo}
                  alt={client.name}
                  className="client-logo"
                  layout="responsive"
                  width={100} // Adjust as needed
                  height={100} // Adjust as needed
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurClients;
