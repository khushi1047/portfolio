export const Navbar = () =>{
    return(
        <>
        <div className="flex flex-row justify-between bg-linear-to-r w-full from-blue-950 via-purple-900 to-gray-900 
        p-6 lg:p-12 lg:text-2xl">
            <ul  className="flex flex-row gap-4">
                <button className=" border-2 border-amber-50  h-6 w-4 lg:h-10 lg:w-6 ">K</button>
                <p >Khushi | <span className="font-bold">Portfolio</span></p>
                </ul>

                 <ul className="flex flex-row gap-5 ">
               <li><a href="#about" className="hover:text-gray-400 font-bold">About</a></li>
               <li><a href="#skills " className="hover:text-gray-400 font-bold">Skills</a></li>
                <li><a href="#projects" className="hover:text-gray-400 font-bold">Projects</a></li>
                <li><a href="#contact" className="hover:text-gray-400 font-bold">Contact</a></li>
            </ul>
        </div>
        </>
    )
}