import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, ChevronRight } from "lucide-react";
import { personalInfo, projects, skillCategories, experience } from "@/constants/data";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";

const roles = [
  "Junior Software Engineer",
  "Embedded Systems Dev",
  "Full-Stack Builder",
  "CS Student @ UofA",
];

function TypingTitle() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const current = roles[roleIdx];
    if (!deleting && displayed.length < current.length) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout.current);
  }, [displayed, deleting, roleIdx]);

  return (
    <div className="flex items-center gap-1 h-9">
      <span className="font-mono text-xl md:text-2xl text-primary font-medium">
        {displayed}
      </span>
      <span className="font-mono text-2xl text-primary cursor-blink">_</span>
    </div>
  );
}

interface StatProps { value: string; label: string }
function Stat({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="font-display text-3xl md:text-4xl font-extrabold text-foreground">{value}</div>
      <div className="font-mono text-xs text-muted-foreground mt-1 uppercase tracking-widest">{label}</div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const latestExp = experience[0];

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">

        {/* Dot grid background */}
        <div className="absolute inset-0 dot-grid opacity-30" />

        {/* Glow orb */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/5 w-56 h-56 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-6">
              <span className="font-mono text-xs text-primary">hello, world</span>
              <span className="h-px w-12 bg-primary/50" />
              <MapPin className="h-3 w-3 text-muted-foreground" />
              <span className="font-mono text-xs text-muted-foreground">{personalInfo.location}</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground tracking-tight leading-none mb-4"
            >
              {personalInfo.name.split(" ").map((word, i) => (
                <span key={i} className={i === 0 ? "block" : "block text-primary"}>
                  {word}
                </span>
              ))}
            </motion.h1>

            {/* Typing title */}
            <motion.div variants={fadeUp} custom={2} className="mb-6">
              <TypingTitle />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-muted-foreground text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} custom={4} className="flex flex-col sm:flex-row gap-3">
              <Link href="/projects">
                <a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity duration-200">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Link>
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-accent hover:border-primary/40 transition-all duration-200"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 flex flex-wrap justify-start gap-10 md:gap-16 border-t border-border pt-10"
          >
            <Stat value="66+" label="Countries shipped" />
            <Stat value="5k+" label="Units sold" />
            <Stat value="2+" label="Years coding" />
            <Stat value="6.67" label="GPA / 7.0" />
          </motion.div>
        </div>

        {/* Section index label */}
        <div className="absolute bottom-6 right-6 font-mono text-xs text-muted-foreground/40 select-none">
          01 / INTRO
        </div>
      </section>

      {/* ── Current Role ── */}
      <section className="py-16 md:py-20 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <span className="font-mono text-xs text-primary">02</span>
              <span className="h-px w-6 bg-primary/50" />
              <h2 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                Currently
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-2">
                  {latestExp.role}
                </p>
                <p className="text-primary font-semibold text-lg mb-4">{latestExp.company}</p>
                <p className="font-mono text-xs text-muted-foreground mb-6">{latestExp.period} · {latestExp.location}</p>
                <Link href="/experience">
                  <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    Full experience
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </Link>
              </div>
              <div className="space-y-3">
                {latestExp.responsibilities.slice(0, 3).map((r, i) => (
                  <div key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-mono text-primary mt-0.5 flex-shrink-0">→</span>
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-16 md:py-20 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-primary">03</span>
                <span className="h-px w-6 bg-primary/50" />
                <h2 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                  Selected Work
                </h2>
              </div>
              <Link href="/projects">
                <a className="hidden sm:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  All projects
                  <ChevronRight className="h-4 w-4" />
                </a>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
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

            <div className="mt-8 sm:hidden text-center">
              <Link href="/projects">
                <a className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  All projects <ChevronRight className="h-4 w-4" />
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="py-16 md:py-20 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-10">
              <span className="font-mono text-xs text-primary">04</span>
              <span className="h-px w-6 bg-primary/50" />
              <h2 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                Skills & Tech
              </h2>
            </div>

            <div className="space-y-8">
              {skillCategories.map((cat, ci) => (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: ci * 0.08 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                      {cat.category}
                    </span>
                    <span className="flex-1 h-px bg-border/60" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                    {cat.skills.map((skill, si) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: si * 0.03 }}
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

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs text-primary">05</span>
                <span className="h-px w-6 bg-primary/50" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Let's build<br />
                <span className="text-primary">something</span> together.
              </h2>
            </div>
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity duration-200 whitespace-nowrap">
                Get in touch
                <ArrowRight className="h-5 w-5" />
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
