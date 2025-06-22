import React from 'react';
import me from '../assets/me.jpeg';
import { FaLinkedin, FaGithub, FaDiscord, FaInstagramSquare } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export const About = () => {
    return (
        <>
            
            <div className='flex flex-col p-10 lg:p-18 lg:flex-row lg:justify-between'>
                <div className='flex flex-row'>
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 300 }}
                        transition={{ duration: 1 }}
                        className="w-2 h-[300px] bg-gradient-to-r from-blue-950 via-purple-900 to-gray-900"
                    ></motion.div>

                    <motion.div
                        className='p-6 gap-6'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.p
                            className='text-7xl font-bold lg:text-8xl'
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Hi, I'm
                        </motion.p>

                        <motion.p
                            className='text-7xl font-bold bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent lg:text-8xl'
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            Khushi
                        </motion.p>

                        <motion.p
                            className='font-bold text-6xl'
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            <Typewriter
                                words={['A MERN Stack Developer', 'A Full Stack Developer', 'A Public Speaker', 'A Problem Solver']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={90}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </motion.p>
                    </motion.div>
                </div>

                <motion.img
                    src={me}
                    className='h-[30%] rounded-2xl lg:h-[400px] lg:w-[600px] lg:pr-67'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>

          
            <motion.div
                className='flex flex-row text-white text-3xl gap-6 pl-8 lg:pl-20 lg:gap-16 lg:pt-0'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <a href="https://www.linkedin.com/in/khushi-bansal-a8895b32a/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 lg:size-12' />
                </a>

                <a href="https://github.com/khushi1047" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 lg:size-12' />
                </a>

                <FaInstagramSquare className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 lg:size-12' />
                <FaDiscord className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 lg:size-12' />
            </motion.div>

           
            <div className='flex flex-row p-10 gap-7 '>
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 300 }}
                    transition={{ duration: 1 }}
                    className="w-2 h-[300px] bg-gradient-to-r from-blue-950 via-purple-900 to-gray-900 lg:h-[200px] lg:border-indigo-3"
                ></motion.div>

                <motion.div
                    className='p-3 text-white text-left break-words bg-purple-950 opacity-73 rounded-xl lg:h-[190px]'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className='text-5xl font-bold'>Overview</p>
                    <p>
                        I’m a passionate web developer specializing in MERN stack with a strong focus on creating seamless, interactive, and user-centric web applications. I love crafting digital experiences that not only meet expectations but truly exceed them.

                        Always staying in sync with modern trends and technologies, I bring a blend of creativity, problem-solving, and collaboration to every project I undertake. You can rely on me to deliver high-impact solutions with attention to detail and a commitment to quality.
                    </p>
                </motion.div>
            </div>
        </>
    );
};
