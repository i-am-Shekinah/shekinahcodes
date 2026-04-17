import Collaborate from "./Collaborate";

function Contact() {
    return (
        <div id="contact" className="mx-12 my-6">
            
            <div className="mb-12">
                <h2 className="heading2"><span className="text-neon-blue">{"<"}</span>Get in Touch <span className="text-neon-blue">{"/>"}</span></h2>

                {/* The Fading Neon Underline */}
                <div className="w-64 h-1 mt-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-neon-blue via-neon-blue to-transparent" />
                    {/* Subtle glow behind the line */}
                    <div className="absolute inset-0 bg-neon-blue blur-xs opacity-40" />
                </div>
            </div>


            {/* row */}
            <div className="flex justify-between space-x-48">

                {/* col-1 */}
                <div className="flex flex-1 flex-col justify-center border space-y-8 border-neon-green px-6 h-150">
                    <p className="text-neon-green">{">_ contact_form.sh"}</p>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-light text-gray-300"><span className="text-neon-green font-semibold">$</span> name</label>
                        <input type="text" placeholder="Enter your name" className="p-2 w-full border border-neon-green outline-1 focus:border-neon-green outline-neon-green focus:shadow-[0_0_10px_rgba(0,255,65,0.7)]" />
                    </div>


                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-light text-gray-300"><span className="text-neon-green font-semibold">$</span> email</label>
                        <input type="email" placeholder="your@email.com" className="p-2 w-full border border-neon-green outline-1 focus:border-neon-green outline-neon-green focus:shadow-[0_0_10px_rgba(0,255,65,0.7)]" />
                    </div>


                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="font-light text-gray-300"><span className="text-neon-green font-semibold">$</span> message</label>
                        <textarea placeholder="Enter your message..." className="p-2 w-full min-h-40 border border-neon-green outline-1 focus:border-neon-green outline-neon-green focus:shadow-[0_0_10px_rgba(0,255,65,0.7)]"></textarea>
                    </div>

                    <button type="submit" className="w-full p-3 text-neon-green outline-2 outline-neon-green shadow-[0_0_10px_rgba(0,255,65,0.7)] hover:cursor-pointer hover:shadow-[0_0_20px_rgba(0,255,65,0.7)] hover:text-black hover:bg-neon-green hover:font-semibold transition-all duration-300">./send_message.sh</button>
                </div>


                {/* col-2 */}
                <div className="flex-1 flex-col space-y-6">
                    <div className="h-100 w-full">
                        <h3>Let's Collaborate</h3>

                        <p className="font-light text-gray-300 leading-loose">I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>

                        <a href="" className="font-light text-gray-300 block">GitHub</a>
                        <a href="" className="font-light text-gray-300 block">LinkedIn</a>
                        <a href="" className="font-light text-gray-300 block">Twitter</a>
                        <a href="mailto:michaelolatunji.dev@gmail.com" className="font-light text-gray-300 block">Email</a>

                        <Collaborate />
                    </div>

                    <div>
                        <p><span>Status: </span>Available for work</p>
                        <p><span>Location: </span>Remote / Worldwide</p>
                        <p><span>Response: </span>Within 24 hours</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Contact;