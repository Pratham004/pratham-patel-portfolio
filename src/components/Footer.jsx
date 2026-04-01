import { motion } from 'framer-motion'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-bg-primary pt-20 pb-10 border-t border-border-subtle relative overflow-hidden">
      <div className="px-[5%] max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Massive Logo / Name */}
        <div 
           onClick={scrollToTop}
           className="cursor-pointer mb-12 w-full text-center group"
        >
          <h2 className="oryzo-heading text-[12vw] md:text-[14vw] text-bg-secondary group-hover:text-text-primary transition-colors duration-700 tracking-tighter leading-none select-none">
            PRATHAM<span className="text-oryzo-orange group-hover:text-oryzo-orange/50 transition-colors duration-700">.</span>
          </h2>
        </div>

        {/* Info & Copyright */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 border-t border-border-subtle pt-8">
           <span className="oryzo-subtext text-text-muted">
             © {new Date().getFullYear()} PRATHAM PATEL
           </span>
           <span className="oryzo-subtext text-text-muted">
             ALL RIGHTS RESERVED
           </span>
           <button 
             onClick={scrollToTop}
             className="oryzo-subtext text-white hover:text-oryzo-orange transition-colors"
           >
             BACK TO TOP ↑
           </button>
        </div>

      </div>
    </footer>
  )
}
