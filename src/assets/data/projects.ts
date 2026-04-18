export interface ProjectCardProps {
    title: string;
    description: string;
    tools: string[];
    githubLink: string;
    liveLink?: string;
    colorClass: string;
    glowClass: string;
}

export const projects: ProjectCardProps[] = [
    {
        title: 'A Booking Management System',
        description: 'A platform where users can book services from professionals',
        tools: ['NextJS', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma'],
        githubLink: 'https://github.com/i-am-Shekinah/work-nest',
        liveLink: 'https://work-nest-self.vercel.app',
        colorClass: "text-neon-green",
        glowClass: "drop-shadow-[0_0_2px_rgba(0,255,65,0.6)]"
    },

    {
        title: 'A Prizeet Redesign',
        description: 'A redesign of the Prizeet platform with a modern UI',
        tools: ['ReactJS', 'TypeScript', 'Tailwind CSS'],
        githubLink: 'https://github.com/i-am-Shekinah/prizeet-redesign',
        liveLink: 'https://prizeet-redesignio.vercel.app/',
        colorClass: "text-neon-purple",
        glowClass: "drop-shadow-[0_0_2px_rgba(188,19,254,0.6)]"
    },
]

