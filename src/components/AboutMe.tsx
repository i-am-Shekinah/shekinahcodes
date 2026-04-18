import SkillsCard from "./ui/SkilsCard";
import { Shield, Code2, Database, Zap } from "lucide-react";

function AboutMe() {
    return (
        <div className="mx-6 md:mx-12 my-12 md:my-20">

            <div data-aos="fade-up" data-aos-delay="100" className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
                    <span className="text-neon-green">{"<"}</span>
                    About Me
                    <span className="text-neon-green">{" />"}</span>
                </h2>

                <div className="w-48 md:w-64 h-1 mt-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-neon-green via-neon-green to-transparent" />
                    <div className="absolute inset-0 bg-neon-green blur-xs opacity-40" />
                </div>
            </div>


            <div className="flex flex-col lg:flex-row lg:h-full gap-8 lg:gap-12">


                <div data-aos="fade-right" data-aos-delay="100" className="flex-1 flex flex-col space-y-6">

                    <div className="border border-neon-green shadow-[0_0_4px_rgba(0,255,65,0.4)] shadow-neon-green py-8 px-6 flex flex-col justify-center leading-loose relative lg:h-full">
                        <div className="flex gap-2 mb-4">
                            <div className="h-2 w-2 rounded-full bg-neon-purple"></div>
                            <div className="h-2 w-2 rounded-full bg-neon-green"></div>
                            <div className="h-2 w-2 rounded-full bg-neon-blue"></div>
                        </div>
                        <p className="text-sm md:text-base text-gray-200">
                            I'm a full-stack developer making a deliberate transition into robotics systems engineering. My foundation is in building web applications — now I'm going deeper, learning how software gives intelligence to physical machines.
                        </p>
                    </div>

                    <div className="border border-neon-purple shadow-[0_0_4px_rgba(188,19,254,0.4)] shadow-neon-purple py-8 px-6 flex items-center leading-loose lg:h-full">
                        <p className="text-sm md:text-base text-gray-200">
                            When I'm not building web apps, you'll find me studying computer architecture, operating systems, and the fundamentals that power everything from autonomous vehicles to surgical robots.
                        </p>
                    </div>
                </div>

                {/* Skills Grid Section */}
                <div data-aos="fade-left" data-aos-delay="100" className="flex-1 flex flex-col space-y-4">
                    {/* Row 1: Grid for mobile/tablet, flex for desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <SkillsCard
                            title="Frontend"
                            icon={Code2}
                            items={['React', 'TypeScript', 'Tailwind']}
                        />

                        <SkillsCard
                            title="Backend"
                            icon={Database}
                            items={['Node.js | Express.js', 'PostgreSQL', 'Python | Django', 'Java | SpringBoot', 'C/C++']}
                        />
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <SkillsCard
                            title="Systems"
                            icon={Shield}
                            items={['C/C++ (learning)', 'Linux & Bash', 'Computer Architecture']}
                        />

                        <SkillsCard
                            title="Tools"
                            icon={Zap}
                            items={['Git', 'Docker', 'Linux']}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;