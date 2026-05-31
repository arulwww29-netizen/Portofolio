import { useState, useEffect } from 'react'
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
  const [sticky, setSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active nav link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
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
    <header className={sticky ? 'sticky' : ''}>
      <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
        Muhammad Kholilur Rahman
      </a>

      <div
        className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}
        id="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      />

      <nav className={menuOpen ? 'active' : ''}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={activeSection === item.href.slice(1) ? 'active' : ''}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
