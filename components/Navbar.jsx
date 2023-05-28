import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsFillCloudMoonFill, BsLinkedin, BsGithub, BsFillEnvelopeAtFill } from 'react-icons/bs';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from "styled-components";


const Navbar = () => {

    //definition couleur light theme
    const lightTheme = {
        body: '#FFF',
        text: '#363537',
        toggleBorder: '#FFF',
        background: '#363537',
    }

    //definition couleur dark theme
    const darkTheme = {
        body: '#363537',
        text: '#C8cecf',
        toggleBorder: '#6B8096',
        background: '#999',
    }
    //je créée mon body selon les themes que je vais appeler
    const GlobalStyles = createGlobalStyle`
        body {
          background: ${({ theme }) => theme.body};
          color: ${({ theme }) => theme.text};
          font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
          transition: all 0.50s linear;
        }
      `
    //mes usestate pour gerer la barre de nav
    const [nav, setNav] = useState(false);
    //usestae pour gerer mon scroll e le shadow de ma nav barre
    const [Shadow, SetShadow] = useState(false);
    //couleur de ma nav barre (!transparent)
    const [navBg, setNavBg] = useState('#ecf0f3');
    //usestae pour la la couleur de mes hover des links
    const [linkColor, setLinkColor] = useState('#1f2937');
    //const changement de theme
    const [theme, setTheme] = useState("light")
    //fonction toggletheme que je vais appeler dans mon composant
    const toggleTheme = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }

     // je gère ma nav barre en version mobile
    const handleNav = () => {
        setNav(!nav)
        console.log(setNav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                SetShadow(true)
            } else {
                SetShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow);

    }, [])



    return (
        //création de ma nav barre fullscreen
        <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />

            <div style={theme === 'light' ? { backgroundColor: `${navBg}` } : { backgroundColor: 'gray' }}
                className={Shadow ? 'fixed display-block w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
                <nav className="flex justify-between items-center w-full px-2 2xl:px-16 ">
                    <ul style={{ color: `${linkColor}` }} className='mt-3 hidden md:flex'>
                        <Link href='/#home' scroll={false}>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                Home
                            </li>
                        </Link>
                        <Link href='/#about' scroll={false}>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                About
                            </li>
                        </Link>
                        <Link href='/#skills' scroll={false}>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                Skills
                            </li>
                        </Link>
                        <Link href='/#projects' scroll={false}>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                Projects
                            </li>
                        </Link>
                        <Link href='/#contact' scroll={false}>
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
                            <BsFillCloudMoonFill onClick={toggleTheme}
                                className='cursor-pointer text-3xl'
                            />
                        </li>
                        <li className='hover:scale-125 ease-in duration-300 mr-1'>
                            <a href="/assets/CVFlorineFerreira.pdf"
                                target='_blank'
                                className='bg-gradient-to-r from-pink-200 to-pink-800 text-white px-4 py-2 rounded-lg ml-8 scale-50 '>Resume</a>
                                </li>
                    </ul>
                </nav>
                
                {/* Création de ma navbar under 750px avec mon menu burger */}
                <div
                    className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>

                    <div style={theme === 'light' ? { backgroundColor: `${navBg}` } : { backgroundColor: 'gray' }}
                        className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 ease-in duration-500'
                        }
                    >

                        <div className='flex w-full items-center justify-between'>
                            <div id='name' className=' text-pink-700'>
                                Florine's Portfolio
                            </div>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>

                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Lest's work together !</p>
                        </div>

                        <div className='py-4 flex flex-col' >
                            <ul className='uppercase'>
                                <Link href='/#home' scroll={false}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                                </Link>
                                <Link href='/#about' scroll={false}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                                </Link>
                                <Link href='/#skills' scroll={false}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                                </Link>
                                <Link href='/#projects' scroll={false}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
                                </Link>
                                <Link href='/#contact' scroll={false}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact me</li>
                                </Link>
                            </ul>
                        </div>

                        <div className='pt-20 '>

                            <p className='uppercase tracking-widest text-pink-700'>Let's connect</p>
                            <Link href='https://www.linkedin.com/in/florineferreira'>
                                <div className='flex justify-center m-5 rounded-full shadow-lg cursor-pointer'>
                                    <BsLinkedin size={20} />
                                </div>
                            </Link>

                            <Link href='https://github.com/florine89'>
                                <div className='flex justify-center m-5 rounded-full shadow-lg cursor-pointer'>
                                    <BsGithub size={20} />
                                </div>
                            </Link>
                            <Link href='mailto:ferreiraflorine@gmail.com?Envoyer un mail'>
                                <div className='flex justify-center m-5 rounded-full shadow-lg cursor-pointer'>
                                    <BsFillEnvelopeAtFill size={20} />
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>

    )
}

export default Navbar