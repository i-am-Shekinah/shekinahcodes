import ContactForm from "./ContactForm";
import WorkStatus from "./WorkStatus";

function Contact() {
    return (
        <div id="contact" className="mx-6 md:mx-12 my-12 md:my-20 scroll-mt-20">
            
            <div data-aos="fade-up" data-aos-delay="100" className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
                    <span className="text-neon-blue">{"<"}</span>
                    Get in Touch 
                    <span className="text-neon-blue">{" />"}</span>
                </h2>

                <div className="w-48 md:w-64 h-1 mt-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-neon-blue via-neon-blue to-transparent" />
                    <div className="absolute inset-0 bg-neon-blue blur-xs opacity-40" />
                </div>
            </div>


            <div className="flex flex-col lg:flex-row justify-between gap-12 lg:h-full">

                {/* col-1: Contact Form */}
                <div data-aos="fade-right" data-aos-delay="200" className="flex-1 w-full order-2 lg:order-1">
                    <ContactForm />
                </div>

                {/* col-2: Work Status & Collaborate */}
                <div data-aos="fade-left" data-aos-delay="200" className="flex-1 w-full order-1 lg:order-2">
                    <WorkStatus />
                </div>

            </div>
        </div>
    )
}

export default Contact;