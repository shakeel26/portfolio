import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';


const App = () => {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      {/* <Skills />
      <Testimonials />
      <Contact /> */}
    </>
  );
}

export default App;
