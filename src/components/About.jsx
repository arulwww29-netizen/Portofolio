import mainImg from '../assets/main.jpg'
import GradientButton from './GradientButton'
import './About.css'

function About() {
  return (
    <section className="about fade-in" id="about">
      <div className="content">
        <div className="title"><span>About Me</span></div>
        <div className="about-details">
          <div className="left">
            <img src={mainImg} alt="About Muhammad Kholilur Rahman" />
          </div>
          <div className="right">
            <div className="topic">Designing Is My Passion</div>
            <p>
              I am a creative and detail-oriented developer who loves turning
              ideas into reality through clean code and beautiful design.
              With experience in web development, graphic design, and digital
              marketing, I bring a holistic approach to every project.
            </p>
            <div className="button">
              <GradientButton size="md">
                Download CV
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

