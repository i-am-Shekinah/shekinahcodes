import { Github, Linkedin, Mail, X, LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  icon: LucideIcon;
  label: string;
  href: string;
  colorClass: string;
  glowClass: string;
}

const SocialLink = ({ icon: Icon, label, href, colorClass, glowClass }: SocialLinkProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-6 group py-2"
  >
    {/* Icon with specific neon glow */}
    <div className={`${colorClass} ${glowClass} transition-transform duration-300 group-hover:scale-110`}>
      <Icon size={24} strokeWidth={1.5} />
    </div>
    
    {/* Label in Monospace */}
    <span className="text-gray-400 font-mono text-lg group-hover:text-white transition-colors">
      {label}
    </span>
  </a>
);

function Collaborate() {
  const socials = [
    { 
      icon: Github, 
      label: "GitHub", 
      href: "https://github.com/i-am-Shekinah", 
      colorClass: "text-neon-green", 
      glowClass: "drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]" 
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/michael-olatunji-75347b247/", 
      colorClass: "text-sky-400", 
      glowClass: "drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" 
    },
    { 
      icon: X, 
      label: "Twitter", 
      href: "https://x.com/ShekinahCodes", 
      colorClass: "text-neon-purple", 
      glowClass: "drop-shadow-[0_0_8px_rgba(188,19,254,0.6)]" 
    },
    { 
      icon: Mail, 
      label: "Email", 
      href: "mailto:michaelolatunji.dev@gmail.com", 
      colorClass: "text-neon-green", 
      glowClass: "drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]" 
    },
  ];

  return (
    <div className="p-8 bg-black border border-neon-purple shadow-neon-purple shadow-[0_0_4px_rgba(188,19,254,0.4)]">
      {/* Section Header */}
      <h2 className="text-3xl font-bold mb-6 bg-linear-to-r from-neon-purple to-indigo-400 bg-clip-text text-transparent">
        Let's Collaborate
      </h2>

      {/* Description Text */}
      <p className="text-gray-400 font-mono leading-relaxed mb-10">
        I'm always interested in hearing about new projects and opportunities. 
        Whether you have a question or just want to say hi, feel free to reach out!
      </p>

      {/* Social Links List */}
      <div className="flex flex-col gap-4">
        {socials.map((social) => (
          <SocialLink key={social.label} {...social} />
        ))}
      </div>
    </div>
  );
}

export default Collaborate;