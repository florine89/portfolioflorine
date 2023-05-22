import React from 'react';
import Image from "next/image";
import { BsLinkedin, BsGithub, BsFillEnvelopeAtFill } from 'react-icons/bs';
import flo from "../public/assets/portfoliome.jpg";

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center mb-48'>
            <div className='text-center p-10 font-abc'>
                <h2 className='text-5xl py-2 mt-20 text-pink-900 font-medium '>Florine Ferreira</h2>
                <h3 className='text-2xl py-2'>Developer Fullstack Javascript</h3>
                <h4 className='text-md py-5 leading-8 text-gray-800'>Hello there, Welcome to my portfolio!</h4>
                <p>I am a full-stack developer based in Paris</p>
                <p>Visit my profile and stay connect with me</p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 '>
                <a href='https://github.com/florine89'>
                    <BsGithub className='cursor-pointer hover:scale-110 ease-in duration-300' />
                </a>
                <a href='https://www.linkedin.com/in/florineferreira'>
                    <BsLinkedin className='cursor-pointer hover:scale-110 ease-in duration-300' />
                </a>
                <a href='mailto:ferreiraflorine@gmail.com?Envoyer un mail'>
                    <BsFillEnvelopeAtFill className='cursor-pointer hover:scale-110 ease-in duration-300' />
                </a>

            </div>
            <div className='flex justify-center mt-20'>
                <Image className='w-48 rounded-full brightness-90' src={flo} alt='me' />
            </div>
        </div>
    )
}

export default Main