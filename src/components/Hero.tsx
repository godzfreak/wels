import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1000", // Scroll distance for the effect
          scrub: 1,
          pin: true,
        }
      });

      // Parallax Zoom Effect
      tl.to(bgRef.current, {
        scale: 1.5,
        opacity: 0,
        ease: "none",
      }, 0);

      tl.to(logoRef.current, {
        scale: 20, // Massive scale up
        opacity: 0,
        ease: "power2.inOut",
      }, 0);
      
      tl.to(textRef.current, {
        y: -100,
        opacity: 0,
        ease: "power1.in",
      }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-obsidian">
      {/* Background Image - Desert */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1669056847783-024508493021?q=80&w=2532&auto=format&fit=crop)', // Namib desert vibe
          filter: 'grayscale(100%) contrast(120%) sepia(20%)'
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/50 to-obsidian" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div ref={textRef} className="mb-12 text-center">
            <h2 className="text-namib-gold font-mono text-xs tracking-[0.5em] uppercase mb-4">Est. 2024</h2>
            <h1 className="text-alabaster font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter mix-blend-overlay">
              NAMIB
            </h1>
        </div>

        {/* Animated SVG Logo */}
        <svg 
          ref={logoRef}
          viewBox="0 0 200 200" 
          className="w-48 h-48 md:w-64 md:h-64 stroke-alabaster fill-none stroke-[1.5]"
        >
          {/* Stylized 'W' resembling Welwitschia leaves */}
          <motion.path
            d="M40 40 C 40 100, 80 160, 100 160 C 120 160, 160 100, 160 40"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.path
            d="M70 60 C 70 100, 90 140, 100 140 C 110 140, 130 100, 130 60"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
          />
          <motion.path
            d="M100 160 L 100 180"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          />
        </svg>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-alabaster/50 text-xs font-mono animate-bounce">
        SCROLL TO EXPLORE
      </div>
    </div>
  );
}
