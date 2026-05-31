import './Services.css'

const servicesData = [
  { icon: 'fas fa-desktop', title: 'Web Development', desc: 'Building responsive and modern websites with clean code and optimal performance for the best user experience.' },
  { icon: 'fas fa-paint-brush', title: 'Graphic Design', desc: 'Creating stunning visual designs that communicate your brand message effectively and leave a lasting impression.' },
  { icon: 'fas fa-chart-line', title: 'Digital Marketing', desc: 'Strategic digital marketing solutions to grow your online presence and reach your target audience effectively.' },
  { icon: 'fas fa-mobile-alt', title: 'App Development', desc: 'Developing intuitive and high-performance mobile applications that solve real-world problems.' },
  { icon: 'fas fa-camera-retro', title: 'Photography', desc: 'Capturing moments with artistic vision and professional quality for your personal or commercial needs.' },
  { icon: 'fas fa-pencil-ruler', title: 'UI/UX Design', desc: 'Designing user-centered interfaces that are both beautiful and functional for seamless digital experiences.' },
]

function Services() {
  return (
    <section className="services fade-in" id="services">
      <div className="content">
        <div className="title"><span>My Services</span></div>
        <div className="boxes">
          {servicesData.map((service) => (
            <div className="box" key={service.title}>
              <div className="icon"><i className={service.icon}></i></div>
              <div className="topic">{service.title}</div>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
