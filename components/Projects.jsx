import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import calculatechild from "../public/assets/projects/calculatricechild.png";


const Projects = () => {
    return (
       <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className=' text-xl tracking-widest uppercase text-pink-700'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='rounded-xl relative flex items-center justify-center h-auto w-full shadow-xl p-4 group hover:bg-gradient-to-r from-black to-pink-100'>
<Image src={calculatechild} alt="/" className='rounded-xl group-hover:opacity-10' />
<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]'>
    <h3 className='text-2xl text-white tracking-wider text-center'>Child calculate</h3>
    <p className='pb-4 pt-2 text-white text-center'>Small Project build with Jquery</p>
    <Link href='/'>
        <p className='text-center py-3 rounded-lg bg-white text-pink-700 font-bold text-lg cursor-pointer'>View Project</p>
    </Link>
</div>
                </div>
            </div>

        </div>

       </div>
    )
}

export default Projects