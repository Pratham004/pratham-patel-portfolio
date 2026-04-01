import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiExternalLink } from 'react-icons/hi'
import { FaNodeJs, FaReact, FaPython, FaFigma } from 'react-icons/fa'
import { SiMongodb, SiTailwindcss, SiFirebase, SiFigma } from 'react-icons/si'

const projects = [
  {
    title: 'Pulse AI',
    category: 'AI / HEALTHCARE',
    serial: 'MD-992-X',
    description: 'AI-powered healthcare platform that provides personalized health monitoring and risk assessment using machine learning. Acting as an intelligent intermediary between doctors and patients.',
    tech: ['NodeJS', 'MongoDB', 'AI/ML', 'Express'],
    color: '#3498DB',
    image: '/assets/renders/pulse_ai.png',
    gradient: 'from-blue-900/20 to-transparent'
  },
  {
    title: 'NourishIQ',
    category: 'AI / HEALTH',
    serial: 'FQ-441-S',
    description: 'AI-powered food analytics and nutrition tracking application with smart dietary recommendations.',
    tech: ['React', 'Firebase', 'Gemini AI', 'Cloud Run'],
    color: '#4CAF50',
    image: '/assets/renders/nourishiq.png',
    gradient: 'from-green-900/20 to-transparent'
  },
  {
    title: 'Oryzo Device',
    category: 'UI / UX / HW',
    serial: 'OR-001-A',
    description: 'Highly immersive, minimalist portfolio design inspired by leading physical product AI companies. Utilizing heavy typography and abstract space.',
    tech: ['React', 'Tailwind', 'Framer'],
    color: '#D35400',
    image: '/assets/renders/oryzo_device.png',
    gradient: 'from-orange-900/20 to-transparent'
  },
  {
    title: 'Eco REDESIGN',
    category: 'DESIGN SYSTEM',
    serial: 'EC-772-G',
    description: 'Complete redesign of an e-commerce platform focusing on user flow optimization and conversion rate improvement with heavy emphasis on typography.',
    tech: ['Figma', 'User Research', 'Prototyping'],
    color: '#F5F5F5',
    image: '/assets/renders/eco_redesign.png',
    gradient: 'from-gray-900/20 to-transparent'
  }
]

function ProjectBlock({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20%' })
  const isEven = index % 2 === 0

  return (
    <div ref={ref} className="py-32 md:py-56 min-h-[80vh] flex items-center relative border-t border-border-subtle overflow-hidden">
      
      {/* Background Technical Prop (Barcode/Serial) */}
      <div className="absolute top-10 right-10 opacity-10 select-none hidden md:block">
        <div className="tech-barcode mb-2" />
        <span className="scientific-label">{project.serial}</span>
      </div>

      <div className={`w-full px-[5%] max-w-7xl mx-auto flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center relative z-10`}>
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full"
        >
          <div className="mb-8 flex items-center gap-6">
            <span className="scientific-label text-oryzo-orange font-bold tracking-widest">{project.category}</span>
            <div className="h-px flex-1 bg-border-subtle max-w-[100px]" />
          </div>

          <h3 className="oryzo-heading text-6xl md:text-8xl text-white mb-10 tracking-tighter leading-[0.9] hover:text-oryzo-orange transition-colors cursor-default">
            {project.title.toUpperCase()}<span className="text-oryzo-orange">.</span>
          </h3>

          <p className="text-text-secondary text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            {project.tech.map((t) => (
              <span key={t} className="scientific-label px-4 py-2 border border-border-subtle rounded-md text-text-muted hover:text-white transition-colors">
                {t}
              </span>
            ))}
          </div>

          <button className="oryzo-subtext group flex items-center gap-4 text-white hover:text-oryzo-orange transition-all">
            <span className="w-10 h-[1px] bg-white group-hover:bg-oryzo-orange transition-colors" />
            CASE STUDY 01 / VERIFIED
          </button>
        </motion.div>

        {/* High-End 3D Render Presentation */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8, rotateY: isEven ? 10 : -10 }}
           animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
           className="flex-1 w-full relative perspective-1000 group"
        >
           {/* Shadow/Glow */}
           <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-40 blur-[100px] -z-10 group-hover:opacity-60 transition-opacity duration-1000`} />
           
           {/* Rendering Frame */}
           <div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-black/20 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <motion.img 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-cover hover:scale-110 transition-transform duration-1000 mix-blend-screen opacity-90"
              />
              
              {/* Overlay labels */}
              <div className="absolute bottom-6 left-6 flex flex-col gap-1 p-4 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="scientific-label text-[8px] text-white/50">SYSTEM STATUS: OPTIMAL</span>
                <span className="scientific-label text-[8px] text-oryzo-orange">{project.serial}</span>
              </div>
           </div>

           {/* Decorative floating prop next to image */}
           <motion.div 
             animate={{ y: [20, -20, 20], rotate: 360 }}
             transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
             className="absolute -top-10 -right-10 w-24 h-24 opacity-20 pointer-events-none grayscale invert"
           >
              <img src="/assets/renders/tech_props.png" alt="Prop" className="w-full h-full object-contain" />
           </motion.div>
        </motion.div>

      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-bg-primary pt-24">
      {/* Intro Header with Scientific Details */}
      <div className="px-[5%] py-32 md:py-48 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
         <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
         >
           <span className="scientific-label text-oryzo-orange mb-4 block">PORTFOLIO INDEX / 2024</span>
           <h2 className="oryzo-heading text-8xl md:text-9xl lg:text-[10rem] text-white leading-none tracking-tighter">
             WORK<span className="text-oryzo-orange">.</span>
           </h2>
         </motion.div>
         
         <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="md:w-1/3 border-l border-border-subtle pl-8"
         >
           <p className="text-text-muted text-sm font-light leading-relaxed mb-6">
             A highly curated selection of industrial-grade digital solutions and strategic design engineering.
           </p>
           <div className="tech-barcode" />
         </motion.div>
      </div>

      <div className="overflow-hidden">
        {projects.map((project, index) => (
          <ProjectBlock key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
