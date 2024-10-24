import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css'; // Import your CSS file here

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer2 from '../components/Footer2';
import PopupForm from '../components/PopupForm';
import Chatbot from '../components/Chatbot';
import CallAdvisorsStrip from '../components/CallAdvisorsStrip';
import Wave from '../components/Wave';
import Floatingcontact from '../components/Floatingcontact';
import Whatsapp from '../components/FloatingWhatsApp';

function MyApp({ Component, pageProps }) {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.getElementById('footer'); 
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        const isVisible = footerRect.top < window.innerHeight && footerRect.bottom >= 0;
        setIsFooterVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="background-animation">
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>

      <CallAdvisorsStrip />
      <Navbar />
      <PopupForm />
      <Component {...pageProps} />
      <Footer2 id="footer" />
      <Chatbot />
      <Wave />
      <Floatingcontact phoneNumber="+919004002958" />
      <Whatsapp phoneNumber="+919004002958" />
    </div>
  );
}

export default MyApp;
