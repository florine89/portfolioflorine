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
                    <p className='py-2 text-gray-600'>I have spent the last 10 years in retail working as a manager and trainer, specifically in the field of aesthetics and cosmetics. I enjoyed and learned a lot
                        during those years.
                    </p>
                    <p className='py-2 text-gray-600'>
                        In fact, I have been always intrigued by new technologies, the web development, and the endless possibilities they offer.
                        Properly, I chosed to make a change in my professionnal carreer and started studying the web development at the school ' O'clock ', with HTML, CSS and Javascript.
                        Today, I keep going on this positiv energy to expand my skills and explore new technologies with personnal projects.
                    </p>
                    <p className='py-2 text-gray-600'> 
                    I'm super motivated, focused on my goals and always wiling to learn. I'm ready to build positive relationships, use my skills 
                    and experiences on several upcoming projects. 
                    Let's work together ! 
                    </p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
                </div>       
                <div className='w-full h-auto m-auto shadow-xl rounded-xl p-4 hover:scale-105 ease-in duration-300'>
                <Image src={bureau} alt='/' className='rounded-xl opacity-75' />
                </div>                      
            </div>
        </div>
    )
}

export default About