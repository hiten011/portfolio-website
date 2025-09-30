import { experience } from '../constants/data';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experience.map((job, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>{job.title}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <div className="experience-meta">
                  <p className="period">{job.period}</p>
                  <p className="location">{job.location}</p>
                </div>
              </div>
              <ul className="experience-description">
                {job.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
