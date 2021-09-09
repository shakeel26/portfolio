import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import RunningProjects from './components/RunningProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
       <About />
      <Projects /> 
      <RunningProjects />
       <Skills />
      <Contact /> 
      <Footer />
    </>
  );
}

export default App;

// 1 - Hover all project cards together 
// 2 - Headings , contact , projects to center 
// 3 - projectcard width