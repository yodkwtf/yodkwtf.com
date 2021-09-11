import React from 'react';
import { Navbar, Sidebar, Hero, About, Projects, Contact } from '../components';

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default HomePage;
