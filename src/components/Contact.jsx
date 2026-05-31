import { useState } from 'react'
import GradientButton from './GradientButton'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact fade-in" id="contact">
      <div className="content">
        <div className="title"><span>Contact Me</span></div>
        <div className="contact-content">
          <div className="text">
            <div className="topic">Have Any Project?</div>
            <p>Feel free to reach out if you have a project in mind, want to collaborate, or just want to say hello!</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <GradientButton type="submit" size="md">
              Send Message
            </GradientButton>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
