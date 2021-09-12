import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar, Sidebar, Hero, About, Projects, Contact } from '../components';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Durgesh | Yodkwtf </title>
        <meta
          name="description"
          content="I'm a freelance web developer based in Delhi, India. I create
              highly optimized responsive websites to help my clients scale
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
        <Contact />
      </main>
    </>
  );
};

export default HomePage;
