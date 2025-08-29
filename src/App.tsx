import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import TechStack from './components/TechStack';
import Innovations from './components/Innovations';
import CallToAction from './components/CallToAction';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Portfolio />
      <CaseStudies />
      <TechStack />
      <Innovations />
      <CallToAction />
      <Testimonials />
      <Team />
      <Pricing />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;