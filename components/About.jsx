import React from 'react';
import Image from 'next/image';
import bureau from "../public/bureau.jpg"
const About = () => {
    return (
        <div className='w-full md:h-screen p-2 flex items-center py-16'>

        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
<p>About</p>
<h2>Who I Am</h2>
<p>I have spent the last 10 years in retail working as a manager and trainer, specifically in the field of aesthetics and cosmetics. I enjoyed and learned a lot
    during those years. 
    In my work I am always focused on my goals, motivated and excited about learning new things.

    In fact, I have been always intrigued by new technologies, the web development, and the endless possibilities they offer. 
    Properly, I chosed to make a change in my professionnal carreer and started studying the web development at the school ' O'clock ', with HTML, CSS and Javascript.
    Today, I keep going on this positiv energy to expand my skills and explore new technologies with personnal projects.
</p>
<p>Check out some of my latest projects</p>
        </div>

      

        </div>
<Image src={bureau} className='w-5/12 shadow-xl opacity-75'/>
        </div>
    )
}

export default About