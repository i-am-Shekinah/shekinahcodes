import Collaborate from "./Collaborate";
import ContactForm from "./ContactForm";
import WorkStatus from "./WorkStatus";

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
            <div className="flex justify-between space-x-12 h-full">

                {/* col-1 */}
                <div className="flex flex-1 w-full">
                    <ContactForm />
                </div>


                {/* col-2 */}
                <div className="flex-col flex-1 w-full">
                    <WorkStatus />
                </div>

            </div>

        </div>
    )
}

export default Contact;