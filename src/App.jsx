import { useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import InteractiveGridBackground from './components/InteractiveGridBackground'

function App() {
  // Scroll reveal: observe sections and fade them in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <InteractiveGridBackground
      gridSize={50}
      gridColor="#1a1a2e"
      effectColor="rgba(180, 76, 224, 0.5)"
      trailLength={4}
      glowRadius={25}
      fadeIntensity={25}
      idleRandomCount={5}
    >
      <Header />
      <Home />
      <About />
      <Skills />
      <Services />
      <Education />
      <Contact />
      <Footer />
    </InteractiveGridBackground>
  )
}

export default App

