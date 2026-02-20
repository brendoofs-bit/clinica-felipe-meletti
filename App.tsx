import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import ImageLoop from './components/sections/ImageLoop';
import TreatmentsGrid from './components/sections/TreatmentsGrid';
import PremiumServices from './components/sections/PremiumServices';
import BeforeAfter from './components/sections/BeforeAfter';
import DoctorProfile from './components/sections/DoctorProfile';
import ScientificImpact from './components/sections/ScientificImpact';
import CaseStudies from './components/sections/CaseStudies';
import ClinicStructure from './components/sections/ClinicStructure';
import Locations from './components/sections/Locations';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import LoadingScreen from './components/ui/LoadingScreen';
import WhatsAppWidget from './components/ui/WhatsAppWidget';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <LoadingScreen finishLoading={!loading} />
      
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <Hero />
          <ImageLoop />
          <BeforeAfter />
          <PremiumServices />
          <DoctorProfile />
          <ScientificImpact />
          <TreatmentsGrid />
          <CaseStudies />
          <ClinicStructure />
          <Locations />
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </>
  );
}

export default App;