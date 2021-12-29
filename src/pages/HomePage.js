import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar, Sidebar, Hero, About, Projects } from '../components';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Durgesh Chaudhary // yokdwtf.com</title>
        <meta
          name="description"
          content="Durgesh Chaudhary is a freelance web developer based in Delhi, India. He creates
              highly optimized responsive websites to help his clients scale
              their business digitally and help people improve their internet
              surfing experiences."
        />
      </Helmet>
      <main>
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
