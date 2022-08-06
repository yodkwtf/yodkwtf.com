import React from 'react';
import {
  NavAlert,
  Navbar,
  Sidebar,
  Hero,
  About,
  Projects,
} from '../components';

const HomePage = () => {
  return (
    <>
      <main>
        <NavAlert />
        <Navbar />
        <Sidebar />
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
};

export default HomePage;
