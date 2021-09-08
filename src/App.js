import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import RunningProjects from './components/RunningProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';


const App = () => {
  return (
    <>
      <Navbar />
      <About />
       <Projects /> 
      <RunningProjects />
       <Skills />
      <Contact /> 
    </>
  );
}

export default App;
