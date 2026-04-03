import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '2+', label: 'YEARS EXP' },
  { value: '15+', label: 'PROJECTS' },
  { value: '21', label: 'CERTIFICATES' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 bg-bg-primary relative overflow-hidden">
      <div ref={ref} className="px-[5%] max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-32">
        
        {/* Left: Floating Minimalist Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-5/12 relative flex justify-center perspective-1000"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-oryzo-orange/20 blur-[100px] rounded-full scale-110" />
          
          <motion.div 
            whileHover={{ rotateY: 10, rotateX: 5 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="w-72 h-96 lg:w-[400px] lg:h-[550px] relative z-10 overflow-hidden shadow-2xl rounded-sm"
          >
             <img
              src="/pratham.jpg"
              alt="Pratham Patel"
              loading="lazy"
              width="400"
              height="550"
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* Right: Typography-centric Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full md:w-7/12 flex flex-col justify-center"
        >
          <div className="mb-4">
             <span className="oryzo-subtext text-oryzo-orange">WHO AM I</span>
          </div>
          
          <h2 className="oryzo-heading text-4xl md:text-5xl lg:text-7xl mb-8 leading-tight">
            BRIDGING DESIGN <br/> AND <span className="text-oryzo-orange">ENGINEERING.</span>
          </h2>

          <p className="text-text-secondary text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-12">
            <span className="text-white font-medium">Passionate UI/UX Developer with 2+ years of experience</span> in designing intuitive, user-centered digital experiences. Skilled in wireframing, prototyping, and frontend development using Figma, Adobe XD, HTML, CSS, and JavaScript. Strong foundation in Computer Science with hands-on expertise in building scalable web applications.
          </p>

          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                className="flex flex-col border-t border-border-subtle pt-4"
              >
                <span className="oryzo-heading text-3xl md:text-4xl text-white mb-2">{stat.value}</span>
                <span className="oryzo-subtext text-text-muted">{stat.label}</span>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
