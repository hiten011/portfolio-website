import { education } from '../constants/data';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="education-card">
            <h3>{education.degree}</h3>
            <p className="institution">{education.institution}</p>
            <p className="location">{education.location}</p>
            <p className="graduation">{education.graduation}</p>
            <div className="education-details">
              <p><strong>GPA:</strong> {education.gpa}</p>
              <p><strong>Scholarship:</strong> {education.scholarship}</p>
            </div>
            <div className="coursework">
              <h4>Relevant Coursework:</h4>
              <ul>
                {education.coursework.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
