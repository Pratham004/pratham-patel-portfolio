import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCamera } from 'react-icons/hi'

const photos = [
  'IMG_4825.jpeg',
  'IMG_5201.jpeg',
  'IMG_5246.jpeg',
  'IMG_5462.jpeg',
  'IMG_5465.jpeg',
  'IMG_5469.jpeg',
  'IMG_5470.jpeg',
  'IMG_5471.jpeg',
  'IMG_5472.jpeg',
  'IMG_5473.jpeg',
  'IMG_5474.jpeg',
  'IMG_5475.jpeg',
]

// Duplicate logic removed (1) files are ignored manually.

export default function Photography() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="photography" className="py-32 md:py-48 bg-bg-secondary relative">
      <div ref={ref} className="px-[5%] max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 flex flex-col items-center text-center"
        >
          <span className="oryzo-subtext text-oryzo-orange mb-6">HOBBY & PASSION</span>
          <h2 className="oryzo-heading text-6xl md:text-8xl lg:text-9xl text-white mb-6">
            LENS<span className="text-oryzo-orange">.</span>
          </h2>
          <p className="text-text-muted mt-6 max-w-2xl text-lg font-light">
            Beyond the screen and pixels, I capture the raw, untamed beauty of the world. 
            A curated collection of my professional wildlife and nature photography.
          </p>
        </motion.div>

        {/* Masonry Image Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {photos.map((photo, i) => (
            <motion.div
              key={photo}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative group overflow-hidden rounded-xl break-inside-avoid bg-bg-secondary w-full"
            >
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/20 transition-colors z-10 pointer-events-none duration-300" />
              <img
                src={`/wildlife and nature photos/${photo}`}
                alt="Wildlife and Nature Photography by Pratham Patel"
                loading="lazy"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
