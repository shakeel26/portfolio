import './App.css';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Divider from '@material-ui/core/Divider';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import RunningProjects from './components/RunningProjects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <About />
      <Divider />

      <Projects />
      <Divider />

      <RunningProjects />
      <Divider />

      <Skills />
      <Divider />
      <Education />

      <Contact />
      <Divider />

      <Footer />
    </>
  );
}

export default App;

// 1 - Hover all project cards together 
// 2 - Headings , contact , projects to center 
// 3 - projectcard width