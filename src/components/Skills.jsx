import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiFigma, SiHtml5, SiCss, SiJavascript, SiPython,
  SiReact, SiNodedotjs, SiTailwindcss, SiMongodb, SiMysql,
  SiGit, SiGithub, SiDocker, SiPostman, SiCanva,
  SiFirebase, SiFlutter
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { FaJava, FaMicrosoft, FaDatabase, FaPalette } from 'react-icons/fa'

const skillCategories = [
  {
    name: 'DESIGN',
    color: '#E50914',
    skills: [
      { name: 'Figma', icon: <SiFigma /> },
      { name: 'Adobe XD', icon: <FaPalette /> },
      { name: 'Canva', icon: <SiCanva /> },
      { name: 'Photoshop', icon: <FaPalette /> },
    ],
  },
  {
    name: 'LANGUAGES',
    color: '#6366F1',
    skills: [
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss /> },
    ],
  },
  {
    name: 'FRAMEWORKS',
    color: '#26A69A',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Flutter', icon: <SiFlutter /> },
    ],
  },
  {
    name: 'DATABASES',
    color: '#FFB74D',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'SQL', icon: <FaDatabase /> },
    ],
  },
  {
    name: 'TOOLS / CLOUD',
    color: '#42A5F5',
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'VS Code', icon: <VscVscode /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Azure', icon: <FaMicrosoft /> },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20%' })

  return (
    <section id="skills" className="py-32 md:py-48 bg-bg-secondary relative">
      <div ref={ref} className="px-[5%] max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        
        {/* Left: Sticky Header */}
        <div className="lg:w-1/3">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             className="sticky top-40 flex flex-col"
          >
             <span className="oryzo-subtext text-oryzo-orange mb-6">TECHNOLOGIES</span>
             <h2 className="oryzo-heading text-6xl md:text-8xl text-white tracking-tighter leading-none mb-4">
               TOOL<br/>KIT<span className="text-oryzo-orange">.</span>
             </h2>
             <p className="text-text-muted mt-6 max-w-sm font-light text-lg">
               Mastering the ecosystem to transform complex ideas into modern, scalable solutions.
             </p>
          </motion.div>
        </div>

        {/* Right: Skills List */}
        <div className="lg:w-2/3 flex flex-col gap-16 md:gap-24 pt-4">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <h3 className="oryzo-heading text-3xl md:text-5xl text-white mb-8 pb-4 border-b border-border-subtle group-hover:border-oryzo-orange/50 transition-colors">
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -4, backgroundColor: 'rgba(211,84,0,0.1)', borderColor: 'rgba(211,84,0,0.5)' }}
                    className="flex items-center gap-3 px-6 py-4 rounded-full border border-border-subtle bg-bg-primary/50 cursor-default transition-all duration-300"
                  >
                    <span className="text-2xl text-text-muted" style={{ color: category.color }}>
                      {skill.icon}
                    </span>
                    <span className="text-base font-medium text-text-secondary">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
