import ProjectCard from "../ProjectCard";

export default function ProjectCardExample() {
  return (
    <div className="p-6 max-w-md">
      <ProjectCard
        title="CatWiz – AI Challenge Website"
        description="Developed a challenge-based AI interaction platform for the AI/ML Club event, with ~50 participants competing to extract hidden passwords from an AI."
        technologies={["React", "Express.js", "SQL"]}
        liveUrl="https://catwiz.onrender.com/"
        githubUrl=""
        date="Aug 2025 - Present"
      />
    </div>
  );
}
