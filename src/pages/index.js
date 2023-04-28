import Head from 'next/head';
import { BsFillCloudMoonFill, BsLinkedin, BsGithub, BsFillArrowDownCircleFill } from 'react-icons/bs';
import Image from "next/image";
import me from "../../public/portfoliome.jpg"
import Navbar from '../../components/Navbar';

function Home() {
  return (
    <div>
      <Head>
        <title>Florine Portfolio</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <main className=''>  
      
      <Navbar />
            
          <div className='text-center p-10 py-10'>
            <h2 className='text-5xl py-2 text-pink-900 font-medium '>Florine Ferreira</h2>
            <h3 className='text-2xl py-2'>Developer Fullstack Javascript</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Hello there ! </p>
            <p> Welcome to my portfolio</p>
            <p>I am a full-stack developer based in Paris. Visit my profile and stay connect with me.</p>
            <p>Let's start with some projects ! </p>
            <a href="#projets" className='text-5xl flex justify-center m-14 animate-bounce'>
            <BsFillArrowDownCircleFill className='cursor-pointer' />
            </a>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <BsGithub />
            <BsLinkedin />
          </div>
          <div className='flex justify-center mt-20'>
            <Image className='w-64  rounded-full brightness-90' src={me} />
          </div>          
        <section id='projets'>
       <h3 className='text-3xl py-1'>My projects</h3>   
       <div>
       </div>
        </section>
      </main>
    </div>
  )
}

export default Home;