import { Github, ExternalLink } from "lucide-react";
import { ProjectCardProps } from "../../assets/data/projects";

function ProjectsCard({ 
    title, 
    description, 
    tools, 
    githubLink, 
    liveLink, 
    colorClass, 
    glowClass 
}: ProjectCardProps) {

    const shadowMap: Record<string, string> = {
        "text-neon-green": "hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:border-neon-green/50",
        "text-neon-purple": "hover:shadow-[0_0_20px_rgba(188,19,254,0.3)] hover:border-neon-purple/50",
        "text-neon-blue": "hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:border-neon-blue/50",
    };

    const hoverStyle = shadowMap[colorClass] || "hover:border-white/20";


    return (
        <div className={`flex flex-col bg-black border border-white/10 p-6 md:p-8 transition-all duration-300 h-full hover:scale-105 ${glowClass} ${hoverStyle}`}>
            

            <h3 className={`text-2xl font-bold mb-4 ${colorClass}`}>
                {title}
            </h3>


            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6 grow">
                {description}
            </p>

            {/* Tools/Tags*/}
            <div className="flex flex-wrap gap-2 mb-8">
                {tools.map((tool) => (
                    <span 
                        key={tool} 
                        className="px-3 py-1 border border-neon-green/30 text-neon-green text-[10px] font-mono tracking-tighter"
                    >
                        {tool}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 mt-auto">
                <a 
                    href={githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-mono ${glowClass}`}
                >
                    <Github size={18} /> Code
                </a>
                
                {liveLink && (
                    <a 
                        href={liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-mono ${glowClass}`}
                    >
                        <ExternalLink size={18} /> Demo
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectsCard;