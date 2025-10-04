import { motion } from "framer-motion";
import { ArrowRight, Download, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { personalInfo, projects, skillCategories, experience } from "@/constants/data";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import { Link } from "wouter";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const latestExperience = experience[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6" data-testid="text-hero-name">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8" data-testid="text-hero-title">
              {personalInfo.title}
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12" data-testid="text-hero-bio">
              {personalInfo.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild data-testid="button-view-projects">
                <Link href="/projects">
                  <a className="flex items-center">
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild data-testid="button-download-resume">
                <a href={personalInfo.resumeUrl} download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
              Featured Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  date={project.date}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" asChild data-testid="button-view-all-projects">
                <Link href="/projects">
                  <a>View All Projects</a>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Preview Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center flex items-center justify-center gap-3">
              <Briefcase className="h-8 w-8 text-primary" />
              Current Experience
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-2xl">{latestExperience.role}</CardTitle>
                      <p className="text-lg text-primary font-medium mt-1">{latestExperience.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground md:text-right">
                      <p className="font-medium">{latestExperience.period}</p>
                      <p>{latestExperience.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {latestExperience.responsibilities[0]}
                  </p>
                  <Button variant="outline" asChild data-testid="button-view-all-experience">
                    <Link href="/experience">
                      <a>View Full Experience</a>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
              Skills & Technologies
            </h2>
            
            <div className="space-y-12">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-foreground mb-6 text-center md:text-left">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      >
                        <SkillCard name={skill.name} icon={skill.icon} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <Button size="lg" asChild data-testid="button-contact-me">
              <Link href="/contact">
                <a>Get in Touch</a>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
