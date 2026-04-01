import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'INTRO', href: '#hero' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'CERTIFICATES', href: '#certifications' },
  { name: 'PHOTOGRAPHY', href: '#photography' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'backdrop-blur-md bg-transparent' : 'bg-transparent'
      }`}
    >
      <div className="px-6 md:px-12 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center group relative z-50"
        >
          <span className="text-xl md:text-2xl font-bold font-[Poppins] tracking-tighter uppercase text-text-primary">
            PRATHAM <span className="text-oryzo-orange">PATEL</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="oryzo-subtext text-white hover:text-oryzo-orange transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-oryzo-orange transition-all duration-300 group-hover:w-full" style={{ borderBottom: '1px dotted #D35400' }} />
            </a>
          ))}
          <a
            href="/Resume.pdf"
            download
            className="oryzo-subtext text-white hover:text-oryzo-orange transition-colors duration-300"
          >
            RESUME
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white text-2xl p-2 relative z-50"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-bg-primary/98 backdrop-blur-xl z-40 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="oryzo-heading text-4xl text-text-primary hover:text-oryzo-orange transition-colors uppercase"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                href="/Resume.pdf"
                download
                className="oryzo-subtext mt-8 text-oryzo-orange border border-oryzo-orange px-8 py-4 rounded-full hover:bg-oryzo-orange hover:text-white transition-all"
              >
                DOWNLOAD RESUME
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
