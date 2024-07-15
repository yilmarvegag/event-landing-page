import React from 'react';
import Banner from '../components/Banner';
import InfoSection from '../components/InfoSection';
import SafetyGuidelines from '../components/SafetyGuidelines';
import Organizators from '../components/Recommendations';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className='w-full'>
      {/* <Header /> */}
      <Banner />
      <InfoSection />
      <SafetyGuidelines />
      <Organizators />
      <Footer />
      {/* <a href="https://wa.me/1234567890" className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={35}/>
      </a> */}
    </div>
  );
};

export default Home;
