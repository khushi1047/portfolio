import Card from "./Card"
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";   
import { IoLogoFigma } from "react-icons/io5";

export const Skills = () =>{
    return(
        <>
        {/* <p>Skills</p> */}   
        <div className="flex flex-row justify-between p-10 lg:justify-center lg:gap-5">
           <div className="w-2 h-[100px] bg-linear-to-r from-blue-950 via-purple-900 to-gray-900 " ></div> 
            <p className="text-5xl font-bold lg:text-7xl">Skills</p>
             <div className="w-2 h-[100px] bg-linear-to-r from-blue-950 via-purple-900 to-gray-900 "></div> 
        </div>
        <div className="grid grid-col-1 justify-center items-center gap-4 lg:grid-cols-4 lg:pl-20">
            <Card name="Frontend" skill1="HTML5 " icon1={<FaHtml5 />} skill2="CSS3" icon2={ <FaCss3Alt />} skill3="TailwindCSS" icon3={ <RiTailwindCssFill />} skill4="React" icon4={<FaReact />} skill5="Next.js"  icon5={<RiNextjsFill />}/>
             <Card name="Backend"  skill1="Node.js" icon1={<FaNodeJs />} skill2="Express.js" icon2={<SiExpress />} skill3="Mongodb" icon3={<SiMongodb />} />
              <Card name="Languages"  skill1="C/C++" skill2="Python" skill3="Javascript" skill4="Typescript" />
               <Card name="Tools" skill1="Redux" icon1={<SiRedux />} skill2="Git" icon2={<FaGitSquare />} skill3="Figma" icon3={<IoLogoFigma />     }/>
        </div>
        </>
    )
}