import React from 'react';
import Image from 'next/image';
import html from '../public/assets/html.png';
import css from '../public/assets/css.png';
import javascript from '../public/assets/js.png';
import react from '../public/assets/react.png';
import nextjs from '../public/assets/nextjs.png';
import typescript from '../public/assets/typescript.png';
import nodejs from '../public/assets/nodejs.png';
import bootstrap from '../public/assets/bootstrap.png';
import tailwind from '../public/assets/tailwindcss.png';
import sass from '../public/assets/sass.png';
import postgresql from '../public/assets/postgresql.png';
import discord from '../public/assets/discord.png';
import git from '../public/assets/git.png';
import github from '../public/assets/github.png';
import slack from '../public/assets/slack.png';
import Vscode from '../public/assets/vscode.png';


const Skills = () => {
    return (
        <div id='skills' className='w-full pt-24 mb-64 lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex-col="+true" justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-pink-700'>Skills</p>
                <h2 className='py-5 mb-6 text-gray-600'>What I can Do</h2>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap_4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={html} alt="html" className='w-16' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap_4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={css} alt="css" className='w-16' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap_4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={javascript} alt="javascript" className='w-16' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JAVASCRIPT</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap_4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={react} alt="react" className='w-16' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>REACTJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap_4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={nextjs} alt="nextjs" className='w-16' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NEXTJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap_4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={typescript} alt="typescript" className='w-16' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>TYPESCRIPT</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap_4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={nodejs} alt="nodejs" className='w-16' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NODEJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap_4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={postgresql} alt="postgresql" className='w-16' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>POSTGRESQL</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap_4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={bootstrap} alt="bootstrap" className='w-16' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>BOOTSTRAP</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap_4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={tailwind} alt="tailwind" className='w-16' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>TAILWIND</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap_4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={sass} alt="sass" className='w-16' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>SASS</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className='py-5 m-6  text-gray-600'>Tools that I Use</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap_4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={git} alt="git" className='w-16' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>GIT</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap_4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={github} alt="github" className='w-16' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>GITHUB</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap_4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Vscode} alt="vscode" className='w-16' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Visual Studio Code</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap_4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={slack} alt="slack" className='w-16' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>SLACK</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap_4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={discord} alt="discord" className='w-16' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>DISCORD</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills