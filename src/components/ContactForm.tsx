function ContactForm() {
    return (
        <div className="flex flex-1 flex-col justify-center border space-y-8 border-neon-green px-6 h-full shadow-neon-green shadow-[0_0_4px_rgba(0,255,65,0.4)]">
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
    )
}

export default ContactForm;