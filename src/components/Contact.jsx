import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const contactInfo = [
  { icon: <HiMail />, label: 'Email', value: 'pratham.p039@gmail.com', href: 'mailto:pratham.p039@gmail.com' },
  { icon: <HiPhone />, label: 'Phone', value: '+91 9879666624', href: 'tel:+919879666624' },
]

const socials = [
  { icon: <FaLinkedinIn />, href: 'https://linkedin.com/in/prathampatel', label: 'LinkedIn' },
  { icon: <FaGithub />, href: 'https://github.com/prathampatel', label: 'GitHub' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20%' })

  return (
    <section id="contact" className="py-32 md:py-48 bg-bg-secondary relative border-t border-border-subtle">
      <div ref={ref} className="px-[5%] max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Massive Ambient Glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-oryzo-orange/20 blur-[150px] pointer-events-none"
        />

        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="text-center w-full z-10"
        >
           <span className="oryzo-subtext text-oryzo-orange mb-6 block">START A PROJECT</span>
           <h2 className="oryzo-heading text-[12vw] md:text-[10vw] lg:text-[11vw] text-white tracking-tighter leading-none hover:text-oryzo-orange transition-colors duration-700 cursor-default">
             LET'S TALK<span className="text-oryzo-orange">.</span>
           </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-24 w-full flex flex-col md:flex-row gap-8 justify-center z-10"
        >
           <a
             href="mailto:pratham.p039@gmail.com"
             className="oryzo-subtext group flex items-center justify-center gap-4 px-10 py-5 border border-border-subtle hover:border-oryzo-orange text-white hover:bg-oryzo-orange hover:text-bg-primary transition-all duration-300 rounded-full bg-bg-primary/50"
           >
             <HiMail className="text-xl" /> DROP ME A LINE
           </a>
           
           <div className="flex gap-4 justify-center">
             {socials.map((s) => (
               <a
                 key={s.label}
                 href={s.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-[60px] h-[60px] rounded-full border border-border-subtle bg-bg-primary/50 flex items-center justify-center text-xl text-white hover:bg-white hover:text-black transition-all duration-300"
               >
                 {s.icon}
               </a>
             ))}
           </div>
        </motion.div>

      </div>
    </section>
  )
}
