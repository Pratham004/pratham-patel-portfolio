import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import BackgroundPhysics from './components/BackgroundPhysics'

// Lazy load below-the-fold sections for performance
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Experience = lazy(() => import('./components/Experience'))
const Skills = lazy(() => import('./components/Skills'))
const Certifications = lazy(() => import('./components/Certifications'))
const Leadership = lazy(() => import('./components/Leadership'))
const Photography = lazy(() => import('./components/Photography'))
const Contact = lazy(() => import('./components/Contact'))

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="w-10 h-10 border-2 border-oryzo-orange border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary relative overflow-hidden">
      <BackgroundPhysics />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Certifications />
          <Leadership />
          <Photography />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
