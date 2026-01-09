import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Background from './components/Background';

import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <div className="bg-dark min-h-screen text-white relative">
        <Background />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;

