import './Footer.css'

function Footer() {
  return (
    <footer className="footerglow">
      {/* Background glow blobs */}
      <div className="fg-blobs">
        <div className="fg-blob fg-blob-1" />
        <div className="fg-blob fg-blob-2" />
      </div>

      {/* Glass card */}
      <div className="fg-glass">
        {/* Left: brand */}
        <div className="fg-brand">
          <a href="#home" className="fg-logo-link">
            <span className="fg-logo-circle">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            <span className="fg-logo-name">MKR</span>
          </a>
          <p className="fg-bio">
            Web developer & digital creator. Building modern, responsive websites and creative digital solutions that make an impact.
          </p>
          <div className="fg-socials">
            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="TikTok"><i className="fa-brands fa-tiktok"></i></a>
          </div>
        </div>

        {/* Right: nav */}
        <nav className="fg-nav">
          <div className="fg-nav-group">
            <div className="fg-nav-heading">Navigate</div>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>
          <div className="fg-nav-group">
            <div className="fg-nav-heading">More</div>
            <ul>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Portfolio</a></li>
            </ul>
          </div>
          <div className="fg-nav-group">
            <div className="fg-nav-heading">Connect</div>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">TikTok</a></li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Copyright */}
      <div className="fg-copyright">
        &copy; 2026 Muhammad Kholilur Rahman. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
