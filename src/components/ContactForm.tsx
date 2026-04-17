import { useRef } from "react";
import type React from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
        .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
            () => {
                alert("Message sent successfully!");
                formRef.current?.reset();
            },
            (error) => {
                console.error("Failed to send message:", error);
                alert("Failed to send message. Please try again later.");
            }
        )
    }
    return (
        <form
            ref={formRef}
            onSubmit={sendEmail} className="flex flex-col justify-center border space-y-8 border-neon-green px-6 py-8 bg-black/20 shadow-[0_0_10px_rgba(0,255,65,0.2)] lg:h-full">
            
            <p className="text-neon-green font-mono text-sm">{">_ contact_form.sh"}</p>


            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-light text-gray-300">
                    <span className="text-neon-green font-semibold">$</span> name
                </label>
                <input name="name" type="text" placeholder="Enter your name" required className="input-style p-3 w-full bg-black/40 border border-neon-green/50 text-white outline-none focus:border-neon-green focus:shadow-[0_0_10px_rgba(0,255,65,0.5)] transition-all" />
            </div>


            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-light text-gray-300">
                    <span className="text-neon-green font-semibold">$</span> email
                </label>
                <input name="email" type="email" placeholder="your@email.com" required className="input-style p-3 w-full bg-black/40 border border-neon-green/50 text-white outline-none focus:border-neon-green focus:shadow-[0_0_10px_rgba(0,255,65,0.5)] transition-all" />
            </div>


            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-light text-gray-300">
                    <span className="text-neon-green font-semibold">$</span> message
                </label>
                <textarea name="message" placeholder="Enter your message..." required className="input-style p-3 w-full min-h-32 border border-neon-green/50 bg-black/40 text-white outline-none focus:border-neon-green focus:shadow-[0_0_10px_rgba(0,255,65,0.5)] transition-all"></textarea>
            </div>


            <button type="submit" className="w-full p-4 text-neon-green border-2 border-neon-green shadow-[0_0_10px_rgba(0,255,65,0.4)] hover:cursor-pointer hover:shadow-[0_0_20px_rgba(0,255,65,0.7)] hover:text-black hover:bg-neon-green font-bold transition-all duration-300 uppercase tracking-widest text-xs">
                ./send_message.sh
            </button>
        </form>
    )
}


export default ContactForm;