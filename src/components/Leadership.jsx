import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiUserGroup, HiDocumentText } from 'react-icons/hi'
import { FaPaintBrush } from 'react-icons/fa'

const activities = [
  {
    role: 'Head of Reports & Documentation Authority',
    org: 'E-Cell IGNITE',
    icon: <HiDocumentText />,
    description: 'Ensuring accuracy, clarity, and professionalism in all official records; coordinating across teams to capture outcomes and growth opportunities.',
    highlights: ['Documentation Leadership', 'Team Management', 'Strategic Reporting'],
    color: '#E50914',
  },
  {
    role: 'Volunteer SQA Analyst',
    org: 'Microsoft',
    icon: <HiUserGroup />,
    description: 'Conducted OS testing, feature evaluation, and bug reporting; provided quality feedback with a focus on UI/UX sensitivity and system troubleshooting.',
    highlights: ['Quality Assurance', 'UI/UX Evaluation', 'Bug Reporting'],
    color: '#0078D4',
  },
  {
    role: 'Affiliate Program Partner',
    org: 'Perplexity',
    icon: <HiUserGroup />,
    description: 'Partnered with Perplexity AI, driving product awareness and user acquisition through strategic content promotion and community engagement.',
    highlights: ['Community Engagement', 'Product Awareness', 'Content Promotion'],
    color: '#26A69A',
  },
]

export default function Leadership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20%' })

  return (
    <section id="leadership" className="py-32 md:py-48 bg-bg-primary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-oryzo-orange/20 to-transparent" />
      <div ref={ref} className="px-[5%] max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 flex flex-col items-center text-center"
        >
          <span className="oryzo-subtext text-oryzo-orange mb-6">BEYOND CODE</span>
          <h2 className="oryzo-heading text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter">
            LEADERSHIP<span className="text-oryzo-orange">.</span>
          </h2>
        </motion.div>
        
        <div className="flex flex-col border-t border-border-subtle">
          {activities.map((a, i) => (
            <motion.div
              key={a.role}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group py-12 md:py-20 border-b border-border-subtle hover:border-oryzo-orange/50 transition-colors flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center justify-between"
            >
              <div className="lg:w-1/3 flex flex-col">
                <span className="oryzo-subtext text-text-muted mb-2">{a.org.toUpperCase()}</span>
                <h3 className="oryzo-heading text-4xl md:text-5xl text-white group-hover:text-oryzo-orange transition-colors">{a.role.toUpperCase()}</h3>
              </div>
              
              <div className="lg:w-2/3 flex flex-col">
                <p className="text-text-secondary text-lg md:text-2xl font-light leading-relaxed mb-6">{a.description}</p>
                <div className="flex flex-wrap gap-2">
                  {a.highlights.map((h) => (
                    <span key={h} className="px-4 py-2 text-xs font-medium rounded-full bg-bg-secondary text-text-muted border border-border-subtle">{h.toUpperCase()}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
