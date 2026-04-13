import { motion } from 'motion/react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-8 py-6 flex justify-between items-center mix-blend-difference text-alabaster">
      <div className="text-sm font-mono tracking-widest uppercase" data-hover="true">
        Welwitschi Ree
      </div>
      <div className="flex gap-8 text-xs font-mono tracking-widest uppercase">
        {['Collection', 'About', 'Cart (0)'].map((item) => (
          <a key={item} href="#" className="hover:text-namib-gold transition-colors" data-hover="true">
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
