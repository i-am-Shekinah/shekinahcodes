function Header() {
    return (
        <header className="min-dvh-screen relative text-center mt-32 pb-32 max-w-xl mx-auto">
            <div>
                <p className="text-neon-green">{">_ shekinah@shekinah:~$"}</p>

                <h1 className="text-6xl mt-10 mb-8 font-black bg-linear-to-r from-neon-green to-neon-purple bg-clip-text text-transparent animate-fade-in">Michael Olatunji</h1>

                <p className="text-2xl font-light text-gray-300 mb-8"><span className="text-neon-green text-2xl">{"> "}</span>Software Engineer_</p>

                <p className="text-gray-400 font-light mb-8">Crafting digital experiences with code. Specializing in web development, cybersecurity, and innovative solutions.</p>
            </div>


            {/* nav buttons */}
            <nav className="flex justify-center space-x-4 mt-12">
                <a href="" className="inline-block border-2 border-neon-green text-neon-green shadow-[0_0_10px_rgba(0,255,65,0.4)] 
                   hover:shadow-[0_0_20px_rgba(0,255,65,0.7)] shadow-neon-green w-44 py-4 hover:cursor-pointer hover:bg-neon-green hover:text-black transition-all duration-300">View Projects</a>

                <a href="#contact" className="inline-block border-2 border-neon-purple text-neon-purple shadow-neon-purple shadow-[0_0_10px_rgba(188,19,254,0.4)] 
                   hover:shadow-[0_0_20px_rgba(188,19,254,0.7)] w-44 py-4 hover:cursor-pointer hover:bg-neon-purple hover:text-black transition-all duration-300">Contact Me</a>
            </nav>


            {/* The Animated Arrow container */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            
                {/* The Animated Arrow */}
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