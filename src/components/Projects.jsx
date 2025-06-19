import {ProjectCard} from './ProjectCard.jsx'
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
export const Projects = () =>{
    return(
        <>
        <div className="flex flex-row justify-between p-10 lg:justify-center lg:gap-5">
           <div className="w-2 h-[100px] bg-linear-to-r from-blue-950 via-purple-900 to-gray-900"></div> 
            <p className="text-5xl font-bold lg:text-7xl">Projects</p>
             <div className="w-2 h-[100px] bg-linear-to-r from-blue-950 via-purple-900 to-gray-900"></div> 
        </div>
        
        <div className='grid grid-col-1 justify-center items-center lg:grid-cols-3 lg:pl-30'>
            <ProjectCard 
        image={p1}  
        text={
            <span className='font-bold'>
                YTLinkMate
            </span>
        }
        description=" is a Chrome Extension that solves a real-world problem: When you click a link from a YouTube video description and accidentally close the tab, it’s difficult to find that link in browser history. YTLinkMate solves this by tracking and saving the clicked description links automatically."
    />
             <ProjectCard 
        image={p2}  
        text={
            <span className='font-bold'>
                API-Studio
            </span>
        }
        description=" is a dynamic API testing and backend code editing platform that combines a Postman-like API tester with a live code editor. It enables real-time backend updates and authentication management in a single developer-friendly workspace."
    />

     <ProjectCard 
        image={p2}  
        text={
            <span className='font-bold'>
                API-Studio
            </span>
        }
        description=" is a dynamic API testing and backend code editing platform that combines a Postman-like API tester with a live code editor. It enables real-time backend updates and authentication management in a single developer-friendly workspace."
    />
     <ProjectCard 
        image={p2}  
        text={
            <span className='font-bold'>
                API-Studio
            </span>
        }
        description=" is a dynamic API testing and backend code editing platform that combines a Postman-like API tester with a live code editor. It enables real-time backend updates and authentication management in a single developer-friendly workspace."
    />
     <ProjectCard 
        image={p2}  
        text={
            <span className='font-bold'>
                API-Studio
            </span>
        }
        description=" is a dynamic API testing and backend code editing platform that combines a Postman-like API tester with a live code editor. It enables real-time backend updates and authentication management in a single developer-friendly workspace."
    />
        </div>
        



        </>
    )
}