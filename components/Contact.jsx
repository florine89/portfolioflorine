import React from 'react';
import Image from 'next/image';
import contact from '../public/assets/contact2.jpg';
import { BsLinkedin, BsGithub, BsFillEnvelopeAtFill, BsChevronDoubleUp } from 'react-icons/bs';
import Link from 'next/link'

const Contact = () => {
    return (
        <div id="contact" className='font-abc w-full pt-14 lg:h-screen flex'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-pink-700'>Contact</p>
                <h2 className='py-4'>Get In Touch</h2>

                <div className='grid lg:grid-cols-5 gap-8'>
                    <div className='col-span-3 lg:col-span2-w-full h-full shadow-xl rounded-xl p-4'>
                        <div className='lg:p-3 h-full'>
                            <div>
                                <Image className='rounded-xl hover:scale-95 ease-in duration-300' src={contact} alt='contact' />
                            </div>

                            <h2 className='py-2 sm: text-s lg: text-2xl'>Florine Ferreira</h2>

                            <p>Front-End Developer</p>

                            <p className='uppercase pt-8'>Connect with me</p>
                            <div className='flex items-center justify-between py-4'>

                                <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 '>
                                    <a href='https://github.com/florine89'>
                                        <BsGithub className='cursor-pointer hover:scale-110 ease-in duration-300' />
                                    </a>
                                    <a href='https://www.linkedin.com/in/florineferreira' >
                                        <BsLinkedin className='cursor-pointer hover:scale-110 ease-in duration-300' />
                                    </a>
                                    <a href='mailto:ferreiraflorine@gmail.com?Envoyer un mail' >
                                        <BsFillEnvelopeAtFill className='cursor-pointer hover:scale-110 ease-in duration-300' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-16 mt-12'>
                    <Link href=''>
                        <div className='rounded-full shadow-xl cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsChevronDoubleUp className='text-5xl text-gray-400' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact