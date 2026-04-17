import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  icon: LucideIcon;
  items: string[];
}

function SkillsCard({ title, icon: Icon, items }: CardProps) {
  return (
    <div className="flex flex-col flex-1 justify-center min-h-64 p-6 bg-black/40 border border-neon-blue backdrop-blur-md 
                    md:hover:scale-105 md:hover:shadow-[0_0_20px_rgba(0,217,255,0.7)] md:hover:shadow-neon-blue 
                    transition-all group duration-500 relative overflow-hidden">

      <div className="mb-4">
        <Icon
          size={32} /* Slightly smaller icon for mobile */
          className="md:size-10 text-neon-blue drop-shadow-[0_0_10px_rgba(19,254,254,0.6)]"
        />
      </div>

      <h3 className="text-lg md:text-xl font-bold mb-4 uppercase tracking-tight text-white/90">
        {title}
      </h3>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 font-mono text-xs md:text-sm text-gray-400 group-hover:text-white transition-colors"
          >
            <span className="text-neon-blue opacity-50 transition-opacity font-bold">
              →
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsCard;