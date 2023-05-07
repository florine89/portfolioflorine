import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const ProjectItem = ({title, backgroundImg, description,technologies, projectUrl, github}) => {
    return (
        <div className='relative flex items-center justify-center w-full  h-auto shadow-2xl rounded-xl p-4 group hover:bg-gradient-to-r from-gray-700 to-pink-100'>
        <Image width={300}  src={backgroundImg} alt="/" className='rounded-xl group-hover:opacity-10' />
        <div className='hidden group-hover:block absolute bottom-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]'>
            <h3 className=' text-lg text-white tracking-wider text-center'>{title}</h3>
            <h4  className=' text-sm text-white tracking-wider text-center'>{technologies}</h4>
            <p className='pb-4 pt-2 text-white text-center text-sm'>{description}</p>      
            <Link href={projectUrl}>
                <p className=' text-center my-1 rounded-lg bg-white text-pink-700 font-bold text-base cursor-pointer'>View Project</p>
            </Link>
            <Link href={github}>
                <p className='text-center my-1 rounded-lg bg-white text-pink-700 font-bold text-base cursor-pointer '>View on Github</p>
            </Link>
        </div>
    </div>
    )
}

export default ProjectItem