import React from 'react';
import Image from 'next/image';
import bureau from "../public/assets/bureau.jpg"
const About = () => {
    return (
        <div id="about" className='w-full pt-20 md:h-screen p-2 flex items-center py-16'>

            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-pink-700'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>During the last 10 years, I have gained experience in retail as a manager and trainer working in the field of aesthetics and cosmetics.
                        In these roles, I led a team in a SPA and train new SPA managers for the new opening boutique spa in Europe.
                    </p>
                    <p className='py-2 text-gray-600'>
                        Furthemore, taking into acount the rise of the use of digital technologies, which have led society to acquiere
                        new skills and adapt to this new context, I decided to expand my knowledege of new technologies in order to grow professionally.
                        <span>To this end, I decided to study a web development course at the school 'O'Clock', which allows me to obtain knowledge in HTML, CSS and Javascript.
                            Today, I continue this process and keep going to learn and discover new technologies on personal projects.
                        </span>
                    </p>
                    <p className='py-2 text-gray-600'>
                        I'm super motivated, focused on my goals and always wiling to learn. I'm ready to build positive relationships, use my skills
                        and experiences on several upcoming projects.
                        Let's work together !
                    </p>
                    <a href='/#projects'>
                        <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
                    </a>
                </div>
                <div className='w-full h-auto m-auto shadow-xl rounded-xl p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={bureau} alt='bureau' className='rounded-xl opacity-75' />
                </div>
            </div>
        </div>
    )
}

export default About