import React from 'react';
import ProjectItem from './ProjectItem';
import calculatechild from '../public/assets/projects/calculatricechild.png';
import fitwork from '../public/assets/projects/fitworkw.jpg';
import gamehub from '../public/assets/projects/gamehubw.jpg';
import github from '../public/assets/projects/github.png';



const Projects = () => {
    return (
        <div id='projects' className='w-full pt-16'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className=' text-xl tracking-widest uppercase text-pink-700'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem title='FitWork'
                  backgroundImg={fitwork}
                  technologies="Reactjs, React-Bootstrap, Nodejs, PostgreSQL."
                  description="A well-being application build to improve health at work. It gives exercices, advices
                  and permit to follow a worker during his day at work."
                  projectUrl="https://fitwork-app.netlify.app/" 
                  github="https://github.com/florine89/fitwork-front" />   
                  <ProjectItem title='FitWork'
                  backgroundImg={gamehub}
                  technologies="Reactjs, Nodejs, express, PostgreSQL."
                  description=""
                  projectUrl="https://fitwork-app.netlify.app/" 
                  github="https://github.com/florine89/fitwork-front" /> 
                  <ProjectItem title='FitWork'
                  backgroundImg={github}
                  technologies="Reactjs, Nodejs, express, PostgreSQL."
                  description=""
                  projectUrl="https://fitwork-app.netlify.app/" 
                  github="https://github.com/florine89/fitwork-front" /> 
                  <ProjectItem title='Child Calculate'
                  backgroundImg={calculatechild}
                  technologies="Jquery"
                  description="Calculate for kids to play around. On the menu, find educational french popular websites for kids."
                  projectUrl="https://kidsplaycalculate.netlify.app/" 
                  github="https://github.com/florine89/child-calculate" />  
                        
                </div>
                </div>
        </div>
    )
}

export default Projects