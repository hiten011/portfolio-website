import { motion } from "framer-motion";
import { projects } from "@/constants/data";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-5">
              <span className="font-mono text-xs text-primary">01</span>
              <span className="h-px w-6 bg-primary/50" />
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                All Projects
              </span>
            </div>
            <h1
              className="font-display text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-none mb-4"
              data-testid="text-page-title"
            >
              What I've<br />
              <span className="text-primary">Built</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Projects spanning AI platforms, full-stack web apps, embedded systems, and algorithms.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  date={project.date}
                />
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
}
