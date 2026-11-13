import { ExternalLink, Github, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
  date,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="bracket-card group h-full"
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="h-full flex flex-col rounded-lg border border-border bg-card hover:border-primary/40 transition-colors duration-300 overflow-hidden">

        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border/60 bg-muted/30">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-border" />
            <span className="w-2.5 h-2.5 rounded-full bg-border" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
          </div>
          <span className="font-mono text-[11px] text-muted-foreground flex items-center gap-1.5">
            <Calendar className="h-3 w-3" />
            {date}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col px-5 py-5">
          <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
            {description}
          </p>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-accent text-muted-foreground border border-border/60"
                data-testid={`badge-tech-${tech.toLowerCase()}`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity duration-200"
                data-testid="button-live-demo"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-transparent text-foreground text-xs font-semibold hover:bg-accent hover:border-primary/40 transition-all duration-200"
                data-testid="button-github"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
            {!liveUrl && !githubUrl && (
              <span className="font-mono text-xs text-muted-foreground italic">
                Private project
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
