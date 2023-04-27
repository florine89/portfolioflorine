import Head from 'next/head';
import { BsFillCloudMoonFill } from 'react-icons/bs';


function Home() {
  return (
    <div>
      <Head>
        <title>Florine Portfolio</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <main className=' bg-white px-10'>
        <section className='min-h-screen'>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className='text-xl'>developedbyed</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillCloudMoonFill className='cursor-pointer text-3xl' />
              </li>
              <li><a href="#">Resume</a></li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  )
}

export default Home;