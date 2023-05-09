import React from 'react';
import ProjectItem from './ProjectItem';
import calculatechild from '../public/assets/projects/calculatricechildpic.jpg';
import fitwork from '../public/assets/projects/fitworkpic.jpg';
import gamehub from '../public/assets/projects/gamehubpic.jpg';
import github from '../public/assets/projects/githubpic.png';
import portfolio from '../public/assets/projects/portfoliopic.png';
import converter from '../public/assets/projects/converterpic.png';



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
                  <ProjectItem title='Gamehub'
                  backgroundImg={gamehub}
                  technologies="Reactjs, Nodejs, express, PostgreSQL."
                  description="Game application !"
                  github="https://github.com/florine89/plateforme-games" /> 
                  <ProjectItem title='Github search engine'
                  backgroundImg={github}
                  technologies="Reactjs, Nodejs, express, PostgreSQL, Axios, Semantic-UI."
                  description="Look for anything you want on github search engine !"
                  projectUrl="https://github-moteur-de-recherche.netlify.app/" 
                  github="https://github.com/florine89/Moteur-recherche-github" /> 
                  <ProjectItem title='Child calculate'
                  backgroundImg={calculatechild}
                  technologies="Jquery"
                  description="Calculate for kids to play around. On the menu, find educational french popular websites for kids."
                  projectUrl="https://kidsplaycalculate.netlify.app/" 
                  github="https://github.com/florine89/child-calculate" />  
                  <ProjectItem title='Currency conversion calculator'
                  backgroundImg={converter}
                  technologies="Reactjs, Sass"
                  description="Application made during my course to convert money from one currency to another."
                  projectUrl="https://converter2023.netlify.app/" 
                  github="https://github.com/florine89/converter" />  
                     <ProjectItem title='My portfolio'
                  backgroundImg={portfolio}
                  technologies="Nextjs, TailwindCSS"
                  description="Mon portfolio sur lequel vous naviguez actuellement !"
                  github="https://github.com/florine89/portfolioflorine" />  
                        
                        
                </div>
                </div>
        </div>
    )
}

export default Projects