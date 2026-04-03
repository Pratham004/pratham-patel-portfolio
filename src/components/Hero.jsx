import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      {/* Background Technical Decoration */}
      <div className="absolute top-24 left-[5%] opacity-20 hidden md:block">
        <div className="tech-barcode mb-2" />
        <span className="scientific-label">STRATEGIC DESIGN UNIT / 00-1</span>
      </div>
      
      <div className="absolute bottom-24 left-[5%] opacity-20 hidden md:block">
        <span className="scientific-label mb-2 block">LAT: 23.0225° N / LONG: 72.5714° E</span>
        <div className="w-32 h-px bg-white/20" />
      </div>

      {/* Ambient background glow & Photo Parallax */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
           animate={{
             rotate: [0, 360],
             scale: [1, 1.1, 1]
           }}
           transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
           className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-r from-oryzo-orange/20 to-transparent blur-[80px] hidden md:block"
        />
        
        {/* Creative Image Float */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute z-0 mix-blend-luminosity opacity-40 ml-40 md:ml-80 rounded-[40px] overflow-hidden border border-border-subtle shadow-2xl"
        >
          <motion.img 
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            src="/pratham.jpg" 
            alt="Pratham Background" 
            width="500"
            height="500"
            fetchpriority="high"
            className="w-[300px] md:w-[500px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
        </motion.div>
      </div>

      <div className="relative z-10 w-full px-[5%] mx-auto flex flex-col justify-center select-none pt-20">
        
        {/* Subtitle / Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mb-4 flex items-center gap-4"
        >
          <span className="oryzo-subtext text-text-secondary tracking-[0.3em] pl-2 border-l-2 border-oryzo-orange">
            AVAILABLE FOR OPPORTUNITIES
          </span>
          <div className="tech-barcode opacity-20 scale-75" />
        </motion.div>

        {/* Massive Main Heading */}
        <div className="flex flex-col relative">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="oryzo-heading text-[15vw] md:text-[12vw] leading-[0.85] uppercase text-text-primary z-10 drop-shadow-2xl"
          >
            PRATHAM
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="oryzo-heading text-[15vw] md:text-[12vw] leading-[0.85] uppercase text-gradient-accent z-10 drop-shadow-2xl md:ml-20"
          >
            PATEL<span className="text-white">.</span>
          </motion.h1>
        </div>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="mt-12 md:mt-16 flex flex-wrap items-center gap-4"
        >
           <span className="glass px-6 py-3 rounded-full scientific-label text-white hover:border-oryzo-orange transition-colors">UI/UX DEVELOPER</span>
           <span className="glass px-6 py-3 rounded-full scientific-label text-white hover:border-oryzo-orange transition-colors">CLOUD ENTHUSIAST</span>
           <span className="glass px-6 py-3 rounded-full scientific-label text-white hover:border-oryzo-orange transition-colors">PHOTOGRAPHER</span>
        </motion.div>

        {/* Scroll Indicator Minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="absolute bottom-12 right-[5%] flex flex-col items-center gap-2"
        >
          <span className="scientific-label text-[10px]" style={{ writingMode: 'vertical-rl' }}>SCROLL_INDEX</span>
          <motion.div
            animate={{ opacity: [0, 1, 0], y: [0, 20, 40] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] bg-oryzo-orange/50 h-10 relative"
          />
        </motion.div>
      </div>
    </section>
  )
}
