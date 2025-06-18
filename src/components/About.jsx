import React from 'react';
import me from '../assets/me.jpeg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
export const About = () => {
    return (
        <>
        <div className='flex flex-col min-h-screen w-full'>
        <div className='flex flex-row gap-6'>
       
                
        <div className="w-2 h-[300px] bg-linear-to-r from-blue-950 via-purple-900 to-gray-900"></div> 
         
         <div className='flex flex-row gap-45 '>
              <div className='text-9xl '>
            <p className='font-bold'>Hi, I'm</p>
            <p className='font-bold bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent'>Khushi</p>
           
       <p className='text-4xl font-bold'>
        <Typewriter
            words={['A MERN Stack Developer', 'A Full Stack Developer','A Public Speaker', 'A Problem Solver']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
        />
</p>
         </div>

         <img src={me} className='h-[30%] rounded-2xl'></img>
         </div>
        </div>
          
        <div className='flex flex-row text-white text-3xl gap-6'>
            <FaLinkedin />
            <FaGithub />
            <FaInstagramSquare />
            <FaDiscord />
        </div>
        </div>
        </>
    );
};
