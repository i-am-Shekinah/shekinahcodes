import ProjectsCard from "./ui/ProjectsCard";
import { projects } from "../assets/data/projects";

function Project() {
    return (
        <section id="projects" className="mx-6 md:mx-12 my-20 scroll-mt-24">

            <div data-aos="fade-up" data-aos-delay="100" className="mb-12">
                <h2 className="heading2">
                    <span className="text-neon-purple">{"<"}</span>
                    Projects
                    <span className="text-neon-purple">{" />"}</span>
                </h2>
                <div className="w-48 h-1 mt-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-neon-purple via-neon-purple to-transparent" />
                </div>
            </div>



            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {projects.map((project, index) => (
                    <ProjectsCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Project;