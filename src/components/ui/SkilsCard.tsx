import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  icon: LucideIcon;
  items: string[];
}


function SkillsCard({ title, icon: Icon, items }: CardProps) {
  return (
    <div className="flex flex-col flex-1 justify-center h-64 px-6 bg-black/40 border border-neon-blue backdrop-blur-md hover:scale-105 hover:shadow-[0_0_20px_rgba(0,217,255,0.7)] hover:shadow-neon-blue transition-all group duration-500 relative overflow-hidden">

      <div className="mb-6">
        <Icon
          size={40}
          strokeWidth={1.5}
          className="text-neon-blue drop-shadow-[0_0_10px_rgba(19,254,254,0.6)]"
        />
      </div>

      <h3 className="text-xl font-bold mb-6 titlecase tracking-tight text-white/90">
        {title}
      </h3>

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 font-mono text-sm text-gray-400 group/item hover:text-white transition-colors"
          >
            <span className="text-neon-blue opacity-50 group-hover/item:opacity-100 transition-opacity font-bold">
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