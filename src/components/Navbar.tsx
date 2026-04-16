export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center p-4">
      <nav className="flex items-center justify-between w-full max-w-7xl 
                      bg-black/90 backdrop-blur-md border border-neon-green/30 
                      px-6 py-3 relative overflow-hidden">
        
        {/* Decorative corner accents for that 'HUD' feel */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon-green" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon-green" />

        {/* Brand / Terminal Prompt */}
        <div className="flex items-center gap-2 font-mono group cursor-pointer">
          <span className="text-neon-green font-bold tracking-tighter">
            [<span className="text-white group-hover:text-neon-green transition-colors">MICHAEL</span>]
          </span>
          <span className="text-slate-500 text-xs">v1.0.4</span>
        </div>

        {/* Navigation Links - Terminal Style */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.2em]">
            {['Home', 'About', 'Skills', 'Projects'].map((item) => (
              <li 
                key={item} 
                className="relative text-slate-400 hover:text-neon-green cursor-pointer transition-all group/item"
              >
                <span className="text-neon-green opacity-0 group-hover/item:opacity-100 transition-opacity mr-1">
                  &gt;
                </span>
                {item}
                {item === 'Home' && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-neon-green shadow-[0_0_8px_#00ff41]" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button - Styled like a CLI command */}
        <button className="font-mono text-[10px] px-4 py-2 border border-neon-purple text-neon-purple 
                           hover:bg-neon-purple/10 hover:shadow-[0_0_15px_rgba(188,19,254,0.4)] 
                           transition-all active:scale-95 uppercase tracking-widest">
          ./contact_me.sh
        </button>
      </nav>
    </header>
  );
}