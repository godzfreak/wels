import { motion } from 'motion/react';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
};

const SplitText = ({ text, className }: { text: string, className?: string }) => {
  return (
    <h2 className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
};

export default function Narrative() {
  return (
    <section className="py-32 px-8 md:px-24 bg-obsidian text-alabaster">
      <div className="max-w-4xl mx-auto space-y-32">
        
        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-namib-gold font-mono text-xs tracking-widest mb-4 uppercase">Origin Story</p>
            <SplitText 
              text="Inspired by the majestic Welwitschia mirabilis." 
              className="text-4xl md:text-5xl font-serif leading-tight mb-8"
            />
            <p className="text-alabaster/60 leading-relaxed font-light">
              A plant that defies the odds and thrives in the harsh Namib Desert. 
              Like this iconic species, our brand lands in the world of fashion to endure 
              with intricate patterns—a testament to the power of tradition and innovation.
            </p>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-sm opacity-80">
             <img 
              src="https://images.unsplash.com/photo-1547234935-80c7142ee969?q=80&w=2574&auto=format&fit=crop" 
              alt="Desert Texture"
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-1000"
             />
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
           <div className="order-2 md:order-1 relative aspect-[4/5] overflow-hidden rounded-sm opacity-80">
             <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2670&auto=format&fit=crop" 
              alt="Namib Dunes"
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-1000"
             />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-namib-gold font-mono text-xs tracking-widest mb-4 uppercase">Philosophy</p>
            <SplitText 
              text="Uniquely adapted to its environment." 
              className="text-4xl md:text-5xl font-serif leading-tight mb-8"
            />
            <p className="text-alabaster/60 leading-relaxed font-light">
              We are drawn to the concept of being "Endemic". 
              A tribe of individuals who embody these values—people who are resilient 
              in the face of adversity, proud of their roots, and elegant in their approach to life.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center py-24 border-t border-alabaster/10 border-b">
          <SplitText 
            text="True luxury is not just about the clothes you wear, but the story you tell." 
            className="text-3xl md:text-6xl font-serif italic leading-tight text-namib-gold"
          />
        </div>

      </div>
    </section>
  );
}
