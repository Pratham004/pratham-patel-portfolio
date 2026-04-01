import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiChevronLeft, HiChevronRight, HiExternalLink } from 'react-icons/hi'
import { FaMicrosoft, FaGoogle, FaDatabase, FaLinkedin, FaRocket, FaMedal } from 'react-icons/fa'
import { SiNvidia } from 'react-icons/si'

const certifications = [
  {
    title: 'AI for Business',
    issuer: 'LinkedIn Learning',
    icon: <FaLinkedin />,
    color: '#0A66C2',
    category: 'AI',
    url: 'https://www.linkedin.com/learning/certificates/836efb8e1f86af1f46d292966543ebc44b8b43611c6ce68ce97de5cc8af42aad'
  },
  {
    title: 'AI for Business (Advanced)',
    issuer: 'LinkedIn Learning',
    icon: <FaLinkedin />,
    color: '#0A66C2',
    category: 'AI',
    url: 'https://www.linkedin.com/learning/certificates/977ee8f4ca31243f19d6183771c07e0e7350e2b530cae9c25bee67c1ff80d915'
  },
  {
    title: 'AI Infrastructure & Operations',
    issuer: 'NVIDIA',
    icon: <SiNvidia />,
    color: '#76B900',
    category: 'AI',
    url: 'https://www.coursera.org/account/accomplishments/verify/8RXB16LFQVEW'
  },
  {
    title: 'Introduction to AI',
    issuer: 'Google',
    icon: <FaGoogle />,
    color: '#4285F4',
    category: 'AI',
    url: 'https://www.coursera.org/account/accomplishments/verify/27UUCT4HYEB2'
  },
  {
    title: 'Intro to Generative AI',
    issuer: 'Google Skills',
    icon: <FaGoogle />,
    color: '#4285F4',
    category: 'AI',
    url: 'https://www.skills.google/public_profiles/e55023ab-98bc-49d8-9edc-1de831c54680/badges/20054921'
  },
  {
    title: 'Generative AI',
    issuer: 'ISRO',
    icon: <FaRocket />,
    color: '#FF6B6B',
    category: 'AI',
    url: 'https://courses.kodacy.com/kodacy-certificate/?cert_hash=66d965af2f1dd51e'
  },
  {
    title: 'Prompt Engineering',
    issuer: 'ISRO',
    icon: <FaRocket />,
    color: '#FF6B6B',
    category: 'AI',
    url: 'https://courses.kodacy.com/kodacy-certificate/?cert_hash=760e7967d0585226'
  },
  {
    title: 'Rocket Propulsion & Spacecraft',
    issuer: 'ISRO',
    icon: <FaRocket />,
    color: '#FF6B6B',
    category: 'Space',
    url: 'https://courses.kodacy.com/kodacy-certificate/?cert_hash=99ff7d5cda51d1c0'
  },
  {
    title: 'Astronomy',
    issuer: 'ISRO',
    icon: <FaRocket />,
    color: '#FF6B6B',
    category: 'Space',
    url: 'https://courses.kodacy.com/kodacy-certificate/?cert_hash=9731cf4efc2e5bb3'
  },
  {
    title: 'Computer Vision App with Azure',
    issuer: 'Microsoft',
    icon: <FaMicrosoft />,
    color: '#0078D4',
    category: 'Cloud',
    url: 'https://www.coursera.org/account/accomplishments/verify/BF0SZRGAIB2A'
  },
  {
    title: 'Azure Fundamentals',
    issuer: 'Microsoft',
    icon: <FaMicrosoft />,
    color: '#0078D4',
    category: 'Cloud',
    url: 'https://www.coursera.org/account/accomplishments/verify/VGGPTCCXCR34'
  },
  {
    title: 'Scalable Cloud Infra with Azure',
    issuer: 'Microsoft',
    icon: <FaMicrosoft />,
    color: '#0078D4',
    category: 'Cloud',
    url: 'https://www.coursera.org/account/accomplishments/verify/YY817DL90X6U'
  },
  {
    title: 'Managing Azure Infrastructure',
    issuer: 'Microsoft',
    icon: <FaMicrosoft />,
    color: '#0078D4',
    category: 'Cloud',
    url: 'https://www.coursera.org/account/accomplishments/verify/EQ7VC1VS5TOZ'
  },
  {
    title: 'AZ-900 Azure Exam Prep',
    issuer: 'Microsoft',
    icon: <FaMicrosoft />,
    color: '#0078D4',
    category: 'Cloud',
    url: 'https://www.coursera.org/account/accomplishments/verify/OZ6RAG4P9JH9'
  },
  {
    title: 'Azure Fundamentals (Specialization)',
    issuer: 'Microsoft',
    icon: <FaMicrosoft />,
    color: '#0078D4',
    category: 'Cloud',
    url: 'https://www.coursera.org/account/accomplishments/specialization/9XDEXDR1GF40'
  },
  {
    title: 'Fundamentals of UI/UX Design',
    issuer: 'Microsoft',
    icon: <FaMicrosoft />,
    color: '#0078D4',
    category: 'Design',
    url: 'https://www.coursera.org/account/accomplishments/verify/IIQ0WB5K7FL9'
  },
  {
    title: 'Foundations of Cybersecurity',
    issuer: 'Google',
    icon: <FaGoogle />,
    color: '#4285F4',
    category: 'Security',
    url: 'https://www.coursera.org/account/accomplishments/verify/GMC2WNO34GON'
  },
  {
    title: 'Foundations of UX Design',
    issuer: 'Google',
    icon: <FaGoogle />,
    color: '#4285F4',
    category: 'Design',
    url: 'https://www.coursera.org/account/accomplishments/verify/YKUUUHOP1NZD'
  },
  {
    title: 'Intro to Data Analytics',
    issuer: 'IBM',
    icon: <FaDatabase />,
    color: '#054ADA',
    category: 'Data',
    url: 'https://www.coursera.org/account/accomplishments/verify/Y5GBBLZLUP55'
  },
  {
    title: 'Tic Tech Toe 2024',
    issuer: 'ULSA',
    icon: <FaMedal />,
    color: '#FFD700',
    category: 'Event',
    url: 'https://certificate.givemycertificate.com/c/de526b28-707d-4840-a1a1-00819ed166bc'
  },
  {
    title: 'Tech Nirvana',
    issuer: 'Tech Nirvana',
    icon: <FaMedal />,
    color: '#FFD700',
    category: 'Event',
    url: 'https://credsverse.com/credentials/5845040e-a584-4509-af82-7f3ed7e2d72c'
  }
]

function CertCard({ cert, index }) {
  const number = (index + 1).toString().padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border-b border-border-subtle py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors"
    >
      {cert.url && (
        <a 
          href={cert.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute inset-0 z-10"
          aria-label={`View ${cert.title} certificate`}
        />
      )}

      {/* Left: Number & Icon */}
      <div className="flex items-center gap-8 md:w-1/4">
        <span className="oryzo-subtext text-3xl font-light text-text-muted group-hover:text-oryzo-orange transition-colors">
          {number}
        </span>
        <div 
           className="text-4xl text-text-muted group-hover:scale-110 transition-transform duration-500"
           style={{ color: cert.color }}
        >
          {cert.icon}
        </div>
      </div>

      {/* Middle: Title & Meta */}
      <div className="md:w-2/4 flex flex-col">
        <h3 className="oryzo-heading text-2xl md:text-3xl text-white mb-2 group-hover:text-oryzo-orange transition-colors">
          {cert.title.toUpperCase()}
        </h3>
        <div className="flex items-center gap-3">
          <span className="oryzo-subtext text-text-muted">{cert.issuer.toUpperCase()}</span>
          <span className="w-1 h-1 rounded-full bg-border-subtle" />
          <span className="oryzo-subtext text-text-secondary" style={{ color: cert.color }}>{cert.category.toUpperCase()}</span>
        </div>
      </div>

      {/* Right: Action */}
      <div className="md:w-1/4 flex justify-start md:justify-end">
         {cert.url && (
           <motion.div 
             className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center text-white group-hover:border-oryzo-orange group-hover:bg-oryzo-orange transition-all duration-500"
           >
             <HiExternalLink className="text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
           </motion.div>
         )}
      </div>

    </motion.div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 md:py-48 bg-bg-primary">
      <div className="px-[5%] max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="mb-24 flex flex-col items-start"
        >
           <span className="oryzo-subtext text-oryzo-orange mb-6">CREDENTIALS</span>
           <h2 className="oryzo-heading text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter">
             CERTIFICATES<span className="text-oryzo-orange">.</span>
           </h2>
        </motion.div>

        {/* List */}
        <div className="flex flex-col border-t border-border-subtle">
          {certifications.map((cert, index) => (
            <CertCard key={cert.title + index} cert={cert} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
