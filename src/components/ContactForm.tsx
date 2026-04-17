function ContactForm() {
    return (
        <div className="flex flex-col justify-center border space-y-8 border-neon-green px-6 py-8 bg-black/20 shadow-[0_0_10px_rgba(0,255,65,0.2)] lg:h-full">
            <p className="text-neon-green font-mono text-sm">{">_ contact_form.sh"}</p>


            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-light text-gray-300">
                    <span className="text-neon-green font-semibold">$</span> name
                </label>
                <input type="text" placeholder="Enter your name" className="p-3 w-full bg-black/40 border border-neon-green/50 text-white outline-none focus:border-neon-green focus:shadow-[0_0_10px_rgba(0,255,65,0.5)] transition-all" />
            </div>


            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-light text-gray-300">
                    <span className="text-neon-green font-semibold">$</span> email
                </label>
                <input type="email" placeholder="your@email.com" className="p-3 w-full bg-black/40 border border-neon-green/50 text-white outline-none focus:border-neon-green focus:shadow-[0_0_10px_rgba(0,255,65,0.5)] transition-all" />
            </div>


            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-light text-gray-300">
                    <span className="text-neon-green font-semibold">$</span> message
                </label>
                <textarea placeholder="Enter your message..." className="p-3 w-full min-h-32 border border-neon-green/50 bg-black/40 text-white outline-none focus:border-neon-green focus:shadow-[0_0_10px_rgba(0,255,65,0.5)] transition-all"></textarea>
            </div>


            <button type="submit" className="w-full p-4 text-neon-green border-2 border-neon-green shadow-[0_0_10px_rgba(0,255,65,0.4)] hover:cursor-pointer hover:shadow-[0_0_20px_rgba(0,255,65,0.7)] hover:text-black hover:bg-neon-green font-bold transition-all duration-300 uppercase tracking-widest text-xs">
                ./send_message.sh
            </button>
        </div>
    )
}


export default ContactForm;