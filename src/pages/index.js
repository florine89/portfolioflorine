import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Main from '../../components/Main';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';

function Home() {
  
  return (
    <div>
      <Head>
        <title>Florine Portfolio</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Navbar /> 
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home;