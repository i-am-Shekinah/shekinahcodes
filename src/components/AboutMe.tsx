import SkillsCard from "./ui/SkilsCard";
import { Shield, Code2, Database, Zap } from "lucide-react";

function AboutMe() {

    return (
        <div className="mx-12 my-6">

            <div className="mb-12">
                <h2 className="heading2"><span className="text-neon-green">{"<"}</span>About Me <span className="text-neon-green">{"/>"}</span></h2>

                {/* The Fading Neon Underline */}
                <div className="w-64 h-1 mt-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-neon-green via-neon-green to-transparent" />
                    {/* Subtle glow behind the line */}
                    <div className="absolute inset-0 bg-neon-green blur-xs opacity-40" />
                </div>
            </div>

            <div className="flex justify-between gap-12">
                <div className="flex-1 flex-col space-y-4">
                    <div className="flex-col gap-4 border border-neon-green shadow-[0_0_4px_rgba(0,255,65,0.4)] shadow-neon-green h-64 px-6 flex justify-center leading-loose">
                        <div className="flex gap-2">
                            <div className="h-2 w-2 rounded-full bg-neon-purple"></div>
                            <div className="h-2 w-2 rounded-full bg-neon-green"></div>
                            <div className="h-2 w-2 rounded-full bg-neon-blue"></div>
                        </div>
                        <p>I'm a passionate developer with expertise in building secure, scalable web applications. With a background in both development and cybersecurity, I bring a unique perspective to every project I work on.</p>
                    </div>

                    <div className="border border-neon-purple shadow-[0_0_4px_rgba(188,19,254,0.4)] shadow-neon-purple h-64 px-6 flex items-center leading-loose">
                        <p>When I'm not coding, you'll find me exploring the latest security vulnerabilities, contributing to open-source projects, or diving deep into low-level programming.</p>
                    </div>
                </div>


                <div className="flex-1 flex-col space-y-4">
                    <div className="flex gap-4">
                        <SkillsCard
                            title="Frontend"
                            icon={Code2}
                            items={['React', 'TypeScript', 'Tailwind CSS']}
                        />

                        <SkillsCard
                            title="Backend"
                            icon={Database}
                            items={['Node.js', 'PostgreSQL', 'Django']}
                        />
                    </div>



                    <div className="flex gap-4">
                        <SkillsCard
                            title="Security"
                            icon={Shield}
                            items={['Penetration Testing', 'Encryption', 'Auth']}
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