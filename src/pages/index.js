import Head from 'next/head';
import { BsFillCloudMoonFill, BsLinkedin, BsGithub } from 'react-icons/bs';
import Image from "next/image";
import me from "../../public/portfoliome.jpg"

function Home() {
  return (
    <div>
      <Head>
        <title>Florine Portfolio</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <main className=' bg-slate-100'>
        <section className='min-h-screen'>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className='text-xl font-burtons'>Florine's Portfolio</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillCloudMoonFill className='cursor-pointer text-3xl' />
              </li>
              <li><a href="#" className='bg-gradient-to-r from-pink-200 to-pink-800 text-white px-4 py-2 rounded-lg ml-8'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className='text-5xl py-2 text-pink-900 font-medium '>Florine Ferreira</h2>
            <h3 className='text-2xl py-2'>Developer Javascript</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Hello there ! </p>
            <p> Welcome to my portfolio</p>
            <p>I am a full-stack developer based in Paris. Visit my profile and stay connect with me.</p>
            <p>Let's start with some projects ! </p>
          </div>
          <div className='flex justify-center mt-20'>
            <Image className='w-64  rounded-full brightness-90' src={me} />
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <BsGithub />
            <BsLinkedin />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home;