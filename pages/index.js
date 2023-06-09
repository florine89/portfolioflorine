import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { useEffect, useState } from 'react';
import React from 'react';



function Home() {

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true)
  }, []);

  return (
    <>
      {domLoaded && (
        <>
          <Head>
            <title>Florine Portfolio</title>
            <meta property="description" content="Generated by create next app" />
          </Head>
          <Main />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
};

export default Home;