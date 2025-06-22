import { FaGithub } from "react-icons/fa";


export const ProjectCard = (props) => {
    return (
        <div className="bg-gradient-to-br from-gray-800 via-purple-800 to-gray-800 w-[320px] max-w-full p-4 flex flex-col items-center justify-center overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out border border-transparent hover:border-purple-400 m-4">
            
            <img src={props.image} className="w-[280px] h-[150px] object-contain rounded-xl mb-4" alt="Project" />

            <p className="text-white text-left break-words p-2 bg-gray-900/50 rounded-xl mb-4 text-sm">
              {props.text}{props.description }
            </p>

           
            <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaGithub size={30} />
            </a>

        </div>
    )
}
