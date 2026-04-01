import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    role: 'UI/UX Developer',
    company: 'Stenzo Tech',
    location: 'India',
    period: '2024 — PRESENT',
    type: 'Full-time',
    description: [
      'Lead end-to-end UI/UX design for web and mobile applications',
      'Create high-fidelity prototypes and interactive wireframes using Figma',
      'Collaborate with cross-functional teams to deliver user-centered products',
    ],
  },
  {
    role: 'UI/UX Developer Intern',
    company: 'DMG Group',
    location: 'India',
    period: '2023 — 2024',
    type: 'Internship',
    description: [
      'Designed user interfaces for client projects from wireframe to final deliverable',
      'Developed responsive frontend components using HTML, CSS, and JavaScript',
      'Assisted in user flow optimization that improved engagement metrics',
    ],
  },
  {
    role: 'Volunteer QA Analyst',
    company: 'Microsoft',
    location: 'Remote',
    period: '2023 — 2023',
    type: 'Volunteer',
    description: [
      'Participated in quality assurance testing for Microsoft products',
      'Identified and reported UI/UX issues and accessibility improvements',
      'Contributed to improving user experience across Microsoft platforms',
    ],
  },
]

function ExperienceRow({ exp, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20%' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="py-12 md:py-20 border-b border-border-subtle group hover:border-oryzo-orange/50 transition-colors duration-500"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left: Period & Meta */}
        <div className="md:w-1/3 flex flex-col shrink-0">
          <span className="oryzo-subtext text-oryzo-orange mb-4">{exp.period}</span>
          <span className="oryzo-heading text-2xl md:text-3xl text-text-secondary uppercase group-hover:text-white transition-colors">
            {exp.company}
          </span>
          <div className="flex items-center gap-3 mt-4 text-text-muted text-sm tracking-wider">
             <span>{exp.location.toUpperCase()}</span>
             <span className="w-1 h-1 rounded-full bg-border-subtle" />
             <span>{exp.type.toUpperCase()}</span>
          </div>
        </div>

        {/* Right: Role & Description */}
        <div className="md:w-2/3">
          <h3 className="oryzo-heading text-4xl md:text-5xl lg:text-6xl text-white mb-8 group-hover:text-oryzo-orange transition-colors">
            {exp.role.toUpperCase()}
          </h3>
          <div className="flex flex-col gap-4">
            {exp.description.map((point, i) => (
              <p key={i} className="text-text-secondary text-lg md:text-xl font-light leading-relaxed">
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="bg-bg-secondary py-32 md:py-48 px-[5%]">
      <div className="max-w-7xl mx-auto">
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="mb-24 md:mb-32 flex flex-col items-center text-center"
         >
           <span className="oryzo-subtext text-oryzo-orange mb-6">CAREER PATH</span>
           <h2 className="oryzo-heading text-6xl md:text-8xl lg:text-9xl text-white">
             EXPERIENCE<span className="text-oryzo-orange">.</span>
           </h2>
         </motion.div>

         <div className="flex flex-col border-t border-border-subtle">
           {experiences.map((exp, i) => (
             <ExperienceRow key={exp.company + exp.role} exp={exp} index={i} />
           ))}
         </div>
      </div>
    </section>
  )
}
