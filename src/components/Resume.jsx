import { personalInfo, skills, experience, education, projects, additionalInfo } from '../constants/data';

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="resume-header">
          <h2 className="section-title">Resume</h2>
          <button onClick={handlePrint} className="btn btn-primary print-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 6 2 18 2 18 9"/>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <rect x="6" y="14" width="12" height="8"/>
            </svg>
            Print / Download
          </button>
        </div>
        
        <div className="resume-content">
          <div className="resume-section resume-personal">
            <h1 className="resume-name">{personalInfo.name}</h1>
            <div className="resume-contact">
              <span>{personalInfo.email}</span>
              <span>|</span>
              <span>{personalInfo.phone}</span>
              <span>|</span>
              <span>{personalInfo.location}</span>
            </div>
            <div className="resume-links">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                {personalInfo.github.replace('https://', '')}
              </a>
              <span>|</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                {personalInfo.linkedin.replace('https://', '')}
              </a>
              <span>|</span>
              <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer">
                {personalInfo.leetcode.replace('https://', '')}
              </a>
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Skills</h3>
            <div className="resume-skills">
              <div><strong>Languages:</strong> {skills.languages.join(', ')}</div>
              <div><strong>Web:</strong> {skills.web.join(', ')}</div>
              <div><strong>Databases:</strong> {skills.databases.join(', ')}</div>
              <div><strong>Tools:</strong> {skills.tools.join(', ')}</div>
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Experience</h3>
            {experience.map((job, index) => (
              <div key={index} className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <strong>{job.title}, {job.company}</strong>
                  </div>
                  <div className="resume-item-date">{job.period}</div>
                </div>
                <div className="resume-item-location">{job.location}</div>
                <ul className="resume-list">
                  {job.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Education</h3>
            <div className="resume-item">
              <div className="resume-item-header">
                <div>
                  <strong>{education.institution}</strong>
                </div>
                <div className="resume-item-date">{education.graduation}</div>
              </div>
              <div className="resume-item-location">{education.location}</div>
              <div>{education.degree}</div>
              <ul className="resume-list resume-list-compact">
                <li>GPA: {education.gpa}, {education.scholarship}</li>
                <li>Relevant Coursework: {education.coursework.join(', ')}</li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Projects</h3>
            {projects.map((project, index) => (
              <div key={index} className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <strong>{project.title}</strong>
                  </div>
                  <div className="resume-item-date">{project.period}</div>
                </div>
                {(project.website || project.github) && (
                  <div className="resume-project-links">
                    {project.website && <span>Website: {project.website}</span>}
                    {project.website && project.github && <span> | </span>}
                    {project.github && <span>Code: {project.github}</span>}
                  </div>
                )}
                <ul className="resume-list">
                  {project.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="resume-tech">
                  <strong>Tech Stack:</strong> {project.techStack.join(', ')}
                </div>
              </div>
            ))}
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Additional Information</h3>
            <div className="resume-additional">
              <div><strong>Activities:</strong> {additionalInfo.activities.join(' | ')}</div>
              <div><strong>Hobbies:</strong> {additionalInfo.hobbies.join(', ')}</div>
              <div><strong>Certifications:</strong> {additionalInfo.certifications.join('; ')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
