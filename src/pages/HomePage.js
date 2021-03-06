import React from 'react';
import {
  Navbar,
  Sidebar,
  Hero,
  About,
  Projects,
  Skills,
  Contact,
} from '../components';

const HomePage = () => {
  return (
    <main className="page">
      <Navbar />
      <Sidebar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default HomePage;
