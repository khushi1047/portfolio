import ContactLoader from "./ContactLoader"

export const Contact = () => {
    return (
        <>
            {/* Contact Heading */}
            <div className="flex flex-row justify-between items-center p-10 lg:justify-center lg:gap-5">
                <div className="w-2 h-[100px] bg-gradient-to-r from-blue-950 via-purple-900 to-gray-900 rounded-full"></div>
                <p className="text-5xl font-bold text-white">Contact</p>
                <div className="w-2 h-[100px] bg-gradient-to-r from-blue-950 via-purple-900 to-gray-900 rounded-full"></div>
            </div>

            <p className="text-center text-gray-300 mb-8 text-lg">"Let’s make the internet a better place. Drop me a message!"</p>

            {/* Contact Form */}
            <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-purple-900 lg:flex-row lg:justify-around">
                <form className="backdrop-blur-lg bg-white/10 p-10 rounded-2xl shadow-lg w-[90%] max-w-[600px] flex flex-col gap-6 border border-white/20">
                    
                    <div className="flex flex-col">
                        <label className="text-white mb-2">Your Name</label>
                        <input type="text" placeholder="Enter your name" className="p-3 rounded-lg bg-white/20 placeholder-gray-300 text-white focus:outline-none" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white mb-2">Your Email</label>
                        <input type="email" placeholder="Enter your email" className="p-3 rounded-lg bg-white/20 placeholder-gray-300 text-white focus:outline-none" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white mb-2">Your Message</label>
                        <textarea placeholder="Any idea or question?" className="p-3 rounded-lg bg-white/20 placeholder-gray-300 text-white h-[150px] focus:outline-none"></textarea>
                    </div>

                    <button type="submit" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg hover:scale-105 transition transform duration-300">
                        Send Message
                    </button>
                </form>
                <ContactLoader/>
            </div>
        </>
    )
}
