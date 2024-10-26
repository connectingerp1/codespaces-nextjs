// pages/_app.js
 
// import Navbar from '../components/Navbar';
import CallAdvisorsStrip from '../components/CallAdvisorsStrip';
import Marquee1 from '../components/Marquee1';
import Wave from '../components/Wave';
// import Footer2 from '../components/Footer2';

function MyApp({ Component, pageProps }) {
  return (
    <CityProvider>
     <CallAdvisorsStrip />
     <Marquee1 />
      {/* <Navbar /> */}
     
      
     
      <Component {...pageProps} />
      <Wave />
      {/* <Footer2 /> */}
      </CityProvider>
  );
}

export default MyApp;
