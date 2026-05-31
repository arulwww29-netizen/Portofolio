import './Skills.css'

const skillsData = [
  { name: 'HTML', percent: 90 },
  { name: 'CSS', percent: 80 },
  { name: 'JavaScript', percent: 70 },
  { name: 'PHP', percent: 60 },
]

function Skills() {
  return (
    <section className="skills fade-in" id="skills">
      <div className="content">
        <div className="title"><span>My Skills</span></div>
        <div className="skills-detail">
          <div className="text">
            <div className="topic">Skills Reflect Our Knowledge</div>
            <p>
              Continuously learning and improving my technical skills to
              deliver the best solutions. Here are some of the technologies
              I work with on a daily basis.
            </p>
            <div className="experience">
              <div className="num">4</div>
              <div className="exp">Years Of <br />Experience</div>
            </div>
          </div>
        </div>
        <div className="boxes">
          {skillsData.map((skill) => (
            <div className="box" key={skill.name}>
              <div className="topic">{skill.name}</div>
              <div className="skill-bar">
                <div className="skill-per" style={{ width: `${skill.percent}%` }}>
                  <span className="tooltip">{skill.percent}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
