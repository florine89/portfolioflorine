import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Main from '../../components/Main';
import About from '../../components/About';

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
    </div>
  )
}

export default Home;