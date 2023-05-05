import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const ProjectItem = ({title, backgroundImg, projectUrl}) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-2xl rounded-xl  p-4 group hover:bg-gradient-to-r from-gray-700 to-pink-100'>
        <Image src={backgroundImg} alt="/" className='rounded-xl group-hover:opacity-10' />
        <div className='hidden group-hover:block absolute top-[50%] bottom-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>Small Project build with Jquery</p>
            
            <Link href={projectUrl}>
                <p className='text-center py-3 my-1 rounded-lg bg-white text-pink-700 font-bold text-lg cursor-pointer'>View Project</p>
            </Link>
            <Link href={projectUrl}>
                <p className='text-center py-3 my-1 rounded-lg bg-white text-pink-700 font-bold text-lg cursor-pointer'>View Project on Github</p>
            </Link>
        </div>
    </div>
    )
}

export default ProjectItem