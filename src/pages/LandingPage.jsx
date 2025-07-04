// App.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero'
import About from '../components/About';
import Project from '../components/Project'
import Service from '../components/Service'
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact'
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div className="font-sans bg-[#D8DBD5]">
      <Header />
      <Hero />
      <About />
      <Project />
      <Service />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;