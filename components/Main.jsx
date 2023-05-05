import React from 'react';
import Image from "next/image";
import { BsLinkedin, BsGithub, BsFillArrowDownCircleFill, BsFillEnvelopeAtFill } from 'react-icons/bs';
import me from "../public/assets/portfoliome.jpg";

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center mb-48'>
                <div className='text-center p-10'>
                    <h2 className='text-5xl py-2 mt-20 text-pink-900 font-medium '>Florine Ferreira</h2>
                    <h3 className='text-2xl py-2'>Developer Fullstack Javascript</h3>
                    <h4 className='text-md py-5 leading-8 text-gray-800'>Hello there ! Welcome to my portfolio !</h4>
                    <p>I am a full-stack developer based in Paris. </p>
                    <p>Visit my profile and stay connect with me</p>
                </div>
                <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 '>
                    <BsGithub className='cursor-pointer hover:scale-110 ease-in duration-300'/>
                    <BsLinkedin className='cursor-pointer hover:scale-110 ease-in duration-300' />
                    <BsFillEnvelopeAtFill className='cursor-pointer hover:scale-110 ease-in duration-300' />

                </div>
                <div className='flex justify-center mt-20'>
                    <Image className='w-64  rounded-full brightness-90' src={me} alt='me' />
                </div>
        </div>
    )
}

export default Main