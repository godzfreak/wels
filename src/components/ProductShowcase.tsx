import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=2000", // Scroll distance
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Horizontal Scroll
      tl.to(sectionRef.current, {
        x: "-50%", // Move to show the second product
        ease: "none",
      });

      // Parallax Text
      tl.to(textRef.current, {
        x: "20%", // Move text slightly opposite or slower
        ease: "none",
      }, 0);

    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="relative h-screen overflow-hidden bg-alabaster text-obsidian">
      {/* Parallax Background Text */}
      <div 
        ref={textRef}
        className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap text-[20vw] font-serif font-bold opacity-5 pointer-events-none select-none"
      >
        RESILIENCE
      </div>

      {/* Horizontal Container */}
      <div ref={sectionRef} className="flex h-full w-[200vw]">
        
        {/* Product 1: Black Shirt */}
        <div className="w-screen h-full flex items-center justify-center relative p-12">
          <div className="relative group w-full max-w-lg aspect-[3/4]">
             {/* Liquid Distortion Filter */}
             <svg className="absolute w-0 h-0">
              <filter id="heat-haze-1">
                <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" />
              </filter>
            </svg>
            
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2574&auto=format&fit=crop)', // Black shirt vibe
                filter: 'url(#heat-haze-1)' 
              }}
            />
            <div className="absolute bottom-8 left-8 text-obsidian mix-blend-difference">
              <h3 className="text-4xl font-serif italic">The Obsidian</h3>
              <p className="font-mono text-xs mt-2">Endemic Adaptation</p>
            </div>
          </div>
        </div>

        {/* Product 2: White Shirt */}
        <div className="w-screen h-full flex items-center justify-center relative p-12 bg-obsidian text-alabaster">
           <svg className="absolute w-0 h-0">
              <filter id="heat-haze-2">
                <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" />
              </filter>
            </svg>
          <div className="relative group w-full max-w-lg aspect-[3/4]">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop)', // White shirt vibe
                 filter: 'url(#heat-haze-2)'
              }}
            />
            <div className="absolute bottom-8 right-8 text-right mix-blend-difference">
              <h3 className="text-4xl font-serif italic">The Alabaster</h3>
              <p className="font-mono text-xs mt-2">Thrive in Harmony</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
