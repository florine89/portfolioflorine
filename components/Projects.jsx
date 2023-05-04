import React from 'react';
import ProjectItem from './ProjectItem';
import calculatechild from '../public/assets/projects/calculatricechild.png'


const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className=' text-xl tracking-widest uppercase text-pink-700'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                  <ProjectItem title='Child Calculate'
                  backgroundImg={calculatechild}
                  projectUrl="/childCalculate" /> 
                  <ProjectItem title='Child Calculate'
                  backgroundImg={calculatechild}
                  projectUrl="/childCalculate" /> 
                </div>
                </div>
        </div>
    )
}

export default Projects