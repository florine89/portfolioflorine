import React, {useState} from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsFillCloudMoonFill, BsLinkedin, BsGithub, BsFillEnvelopeAtFill } from 'react-icons/bs';


const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        console.log(setNav)
    }

    return (
        //création de ma nav barre fullscreen
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <nav className="flex justify-between items-center w-full px-2 2xl:px-16 ">
                <ul className='mt-3 hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            Home
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            About
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            Skills
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            Projects
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            Contact me
                        </li>
                    </Link>
                </ul>

               <div onClick={handleNav} className='mt-3 cursor-pointer md:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
                <ul className='mt-3 flex items-center'>
                    <li>
                        <BsFillCloudMoonFill className='cursor-pointer text-3xl' />
                    </li>
                    <li className='hover:scale-125 ease-in duration-300 mr-10'><a href="#" className='bg-gradient-to-r from-pink-200 to-pink-800 text-white px-4 py-2 rounded-lg ml-8 scale-50 '>Resume</a></li>
                </ul>
            </nav>
{/* Création de ma navbar under 750px avec mon menu burger */}
            <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>

                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 ease-in duration-500'}>

                    <div className='flex w-full items-center justify-between'>
                        <div className='font-burtons text-pink-700'>
                            Florine's Portfolio
                        </div>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>

                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Lest's work together !</p>
                    </div>

                    <div py-4 flex flex-col>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Contact me</li>
                            </Link>
                        </ul>
                    </div>

                    <div className='pt-20 '>

                        <p className='uppercase tracking-widest text-pink-700'>Let's connect</p>

                        <div className='flex justify-center m-5 rounded-full shadow-lg cursor-pointer'>
                            <BsLinkedin size={20} />
                        </div>

                        <div className='flex justify-center m-5 rounded-full shadow-lg cursor-pointer'>
                            <BsGithub size={20} />
                        </div>

                        <div className='flex justify-center m-5 rounded-full shadow-lg cursor-pointer'>
                            <BsFillEnvelopeAtFill size={20}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar