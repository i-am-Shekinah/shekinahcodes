function Header() {
    return (
        <header className="relative min-dvh-screen flex flex-col items-center justify-center px-6 py-30 md:py-32 max-w-4xl mx-auto text-center overflow-hidden">
            
            <div data-aos="fade-up" data-aos-delay="100" className="z-10 w-full">
                <p className="text-neon-green font-mono text-sm md:text-base tracking-tight">
                    {">_ shekinah@shekinah:~$" }
                </p>


                <h1 data-aos="fade-up" data-aos-delay="150" className="text-4xl sm:text-5xl md:text-7xl mt-6 md:mt-10 mb-6 md:mb-8 font-black bg-linear-to-r from-neon-green to-neon-purple bg-clip-text text-transparent animate-fade-in leading-tight">
                    Michael Olatunji
                </h1>


                <p data-aos="fade-up" data-aos-delay="150" className="text-xl md:text-2xl font-light text-gray-300 mb-6 md:mb-8">
                    <span className="text-neon-green text-xl md:text-2xl">{"> "}</span>
                    Software Engineer_
                </p>


                <p data-aos="fade-up" data-aos-delay="200" className="text-gray-400 font-light mb-10 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
                    Crafting digital experiences with code. Specializing in web development, cybersecurity, and innovative solutions.
                </p>
            </div>


            <nav data-aos="fade-up" data-aos-delay="150" className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto">
                <a href="#project" className="w-full sm:w-44 py-4 border-2 border-neon-green text-neon-green shadow-[0_0_10px_rgba(0,255,65,0.4)] 
                   hover:shadow-[0_0_20px_rgba(0,255,65,0.7)] hover:bg-neon-green hover:text-black transition-all duration-300 uppercase text-xs tracking-widest font-bold">
                    View Projects
                </a>

                <a href="#contact" className="w-full sm:w-44 py-4 border-2 border-neon-purple text-neon-purple shadow-[0_0_10px_rgba(188,19,254,0.4)] 
                   hover:shadow-[0_0_20px_rgba(188,19,254,0.7)] hover:bg-neon-purple hover:text-black transition-all duration-300 uppercase text-xs tracking-widest font-bold">
                    Contact Me
                </a>
            </nav>


            {/* The Animated Arrow */}
            <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2">
                <div className="animate-terminal-float">
                    <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-neon-green drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]"
                    >
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                </div>
            </div>
        </header>
    )
}


export default Header;