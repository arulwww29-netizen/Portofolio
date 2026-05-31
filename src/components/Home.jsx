import mainImg from '../assets/main.jpg'
import GradientButton from './GradientButton'
import AuroraTextEffect from './AuroraTextEffect'
import './Home.css'

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-img">
        <img src={mainImg} alt="Muhammad Kholilur Rahman" />
      </div>
      <div className="home-content">
        <h1>Hi, It's <AuroraTextEffect text="Muhammad Kholilur Rahman" fontSize="inherit" /></h1>
        <h3 className="typing-text">I'm a <span></span></h3>
        <p>
          Passionate web developer and digital creator with a keen eye for
          design. I specialize in building modern, responsive websites and
          delivering creative digital solutions that make an impact.
        </p>
        <div className="social-icons">
          <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
          <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" aria-label="TikTok"><i className="fa-brands fa-tiktok"></i></a>
        </div>
        <GradientButton as="a" href="#contact" size="md">
          Hire Me
        </GradientButton>
      </div>
    </section>
  )
}

export default Home

