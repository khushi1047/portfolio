import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
export const Navbar = () =>{
   const[open,setOpen] = useState(false);
   const handlebtn=() =>{
        setOpen(!open)
   }
   
    return(
        <>
        <div className="flex flex-row justify-between bg-linear-to-r w-full from-blue-950 via-purple-900 to-gray-900 
        p-6 lg:p-12 lg:text-2xl">
            <ul  className="flex flex-row gap-4">
                <button className=" border-2 border-amber-50  h-6 w-4 lg:h-10 lg:w-6 ">K</button>
                <p >Khushi | <span className="font-bold">Portfolio</span></p>
                </ul>

                 <ul  className=" hidden sm:flex sm:flex-row sm:gap-5 ">
               <li><a href="#about" className="hover:text-gray-400 font-bold">About</a></li>
               <li><a href="#skills " className="hover:text-gray-400 font-bold">Skills</a></li>
                <li><a href="#projects" className="hover:text-gray-400 font-bold">Projects</a></li>
                <li><a href="#contact" className="hover:text-gray-400 font-bold">Contact</a></li>
            </ul>
            <div className="sm:hidden">
                <button onClick={handlebtn}><GiHamburgerMenu />
</button>
            </div>

             {open && (
                <div className="flex flex-col items-center bg-black opacity-50 p-4 sm:hidden">
                    <a href="#about" className="hover:text-gray-400 font-bold p-2">About</a>
                    <a href="#skills" className="hover:text-gray-400 font-bold p-2">Skills</a>
                    <a href="#projects" className="hover:text-gray-400 font-bold p-2">Projects</a>
                    <a href="#contact" className="hover:text-gray-400 font-bold p-2">Contact</a>
                </div>
            )}
        </div>
        </>
    )
}