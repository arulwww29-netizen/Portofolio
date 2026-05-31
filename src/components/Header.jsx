import { useState, useEffect } from 'react'
import GradientButton from './GradientButton'
import './Header.css'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll('section')
      let current = 'home'
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id') || 'home'
        }
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="navbar-wrapper">
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        {/* Desktop Navigation */}
        <div className="navbar-body">
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            MKR<span>.</span>
          </a>

          <nav className="navbar-items">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`navbar-link ${activeSection === item.href.slice(1) ? 'navbar-link--active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="navbar-actions">
            <GradientButton
              as="a"
              href="#contact"
              size="sm"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Hire Me
            </GradientButton>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="navbar-mobile-header">
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            MKR<span>.</span>
          </a>

          <button
            className={`navbar-toggle ${menuOpen ? 'navbar-toggle--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="navbar-toggle-bar" />
            <span className="navbar-toggle-bar" />
            <span className="navbar-toggle-bar" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar-mobile-menu ${menuOpen ? 'navbar-mobile-menu--open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`navbar-mobile-link ${activeSection === item.href.slice(1) ? 'navbar-mobile-link--active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <div className="navbar-mobile-actions">
            <GradientButton
              as="a"
              href="#contact"
              size="sm"
              onClick={(e) => { handleNavClick(e, '#contact'); setMenuOpen(false) }}
            >
              Hire Me
            </GradientButton>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
