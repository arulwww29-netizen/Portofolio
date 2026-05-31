import './Education.css'

const educationData = [
  { icon: 'fas fa-graduation-cap', year: '2026 - 2030', title: "Telkom University", desc: 'Computer Science / Information Technology' },
  { icon: 'fas fa-school', year: '2023 - 2026', title: 'SMA Muhammadiyah 23 Jakarta', desc: 'Science & Technology Major' },
]

function Education() {
  return (
    <section className="education fade-in" id="education">
      <div className="content">
        <div className="title"><span>Education</span></div>
        <div className="education-boxes">
          {educationData.map((edu) => (
            <div className="education-box" key={edu.year}>
              <div className="edu-icon"><i className={edu.icon}></i></div>
              <div className="edu-details">
                <span className="edu-year">{edu.year}</span>
                <h3>{edu.title}</h3>
                <p>{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
