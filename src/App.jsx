import React from 'react';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Experiences from './Components/Experiences/Experiences'; // Updated from Services to Experiences
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experiences /> {/* Updated naming */}
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
