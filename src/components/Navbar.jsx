export const Navbar = () =>{
    return(
        <>
        <div className="flex flex-row justify-between sm:pl-34 pt-5 pr-34 fixed  w-full bg-linear-to-r from-blue-950 via-purple-900 to-gray-900 h-[13%]">
            <ul className="flex flex-row gap-3">
                <button className="text-2xl border-2 w-8 h-9">K</button>
                <p className="text-2xl ">Khushi | <span className="font-bold">Portfolio</span></p>
            </ul>
            
            <ul className="flex flex-row gap-8 text-2xl">
               <li><a href="#about">About</a></li>
               <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        </>
    )
}