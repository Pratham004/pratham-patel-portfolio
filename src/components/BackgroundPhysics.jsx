import { motion, useScroll, useTransform } from 'framer-motion'

const equations = [
  { latex: "E = mc²", top: "15%", left: "12%", size: "text-3xl" },
  { latex: "iℏ ∂/∂t Ψ = ĤΨ", top: "42%", left: "75%", size: "text-2xl" },
  { latex: "Δx Δp ≥ ℏ/2", top: "78%", left: "18%", size: "text-xl" },
  { latex: "R_μν - 1/2Rg_μν = 8πGT_μν", top: "28%", left: "68%", size: "text-2xl" },
  { latex: "S = k ln Ω", top: "62%", left: "8%", size: "text-xl" },
  { latex: "e^iπ + 1 = 0", top: "85%", left: "80%", size: "text-2xl" },
]

export default function BackgroundPhysics() {
  const { scrollYProgress } = useScroll()
  
  // Parallax layers
  const blueprintY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"])
  const wireframesY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"])
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 15])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* Layer 1: Dense Blueprint / Equations Overlay */}
      <motion.div 
        style={{ y: blueprintY }}
        className="absolute inset-0 w-full h-[300%] opacity-15 md:opacity-20 mix-blend-screen overflow-visible"
      >
        <div 
          className="w-full h-full bg-repeat opacity-40"
          style={{ 
            backgroundImage: 'url("/assets/renders/physics_blueprint.png")',
            backgroundSize: '800px auto'
          }}
        />
      </motion.div>

      {/* Layer 2: Technical 3D Wireframes Parallax */}
      <motion.div 
        style={{ y: wireframesY, rotate: rotation }}
        className="absolute inset-0 w-full h-[400%] opacity-10 md:opacity-[0.15] mix-blend-screen pointer-events-none"
      >
        <div 
          className="w-full h-full bg-repeat opacity-30"
          style={{ 
            backgroundImage: 'url("/assets/renders/physics_wireframes.png")',
            backgroundSize: '1000px auto',
            backgroundPosition: 'center center'
          }}
        />
      </motion.div>

      {/* Floating Dynamic Equation Labels */}
      {equations.map((eq, i) => (
        <motion.div
          key={i}
          style={{ 
            top: eq.top, 
            left: eq.left,
            y: useTransform(scrollYProgress, [0, i+1], [0, (i + 1) * -100]) 
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          className={`absolute scientific-label ${eq.size} font-mono italic text-white/60 whitespace-nowrap blur-[0.3px] z-10`}
        >
          {eq.latex}
        </motion.div>
      ))}

      {/* Hero-specific focal prop */}
      <motion.div 
        style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 360]) }}
        className="absolute top-[20%] right-[15%] w-[400px] h-[400px] opacity-[0.03] border border-dashed border-white/20 rounded-full flex items-center justify-center p-20 hidden md:flex"
      >
        <div className="w-full h-full border border-white/10 rounded-full flex items-center justify-center animate-spin-slow">
            <div className="w-1/2 h-1/2 border-l border-white/20 rotate-45" />
            <div className="absolute scientific-label text-[8px] -top-6 tracking-[2em]">VECTOR_01</div>
        </div>
      </motion.div>

    </div>
  )
}
