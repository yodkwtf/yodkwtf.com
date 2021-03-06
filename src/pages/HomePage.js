import React from 'react';
import { Hero, About, Projects, Skills, Contact } from '../components';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default HomePage;
