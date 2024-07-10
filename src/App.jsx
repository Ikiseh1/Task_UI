import React from 'react';
import Navbar from './HOMEPAGE/Navbar/Navbar.jsx';
import Hero from './HOMEPAGE/Hero/Hero.jsx';
import Features from './HOMEPAGE/Features/Features.jsx';
import BusinessTask from './HOMEPAGE/Business/BusinessTask.jsx';
import GetStarted from './HOMEPAGE/GetStarted/GetStarted.jsx';
import Testimonials from './HOMEPAGE/Testimonials/Testimonials.jsx';
import Pricing from './HOMEPAGE/Pricing/Pricing.jsx';
import FAQ from './HOMEPAGE/FAQ/FAQ.jsx';
import './App.css'

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Features />
      <BusinessTask />
      <GetStarted />
      <Testimonials />
      <Pricing />
      <FAQ />
    </div>
  );
}

export default App;