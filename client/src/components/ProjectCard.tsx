import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <CardHeader>
          <div className="flex justify-between items-start gap-4">
            <CardTitle className="text-xl">{title}</CardTitle>
            <span className="text-xs text-muted-foreground whitespace-nowrap">{date}</span>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1">
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs" data-testid={`badge-tech-${tech.toLowerCase()}`}>
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex gap-2">
          {liveUrl && (
            <Button
              variant="default"
              size="sm"
              asChild
              className="flex-1"
              data-testid="button-live-demo"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1"
              data-testid="button-github"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
