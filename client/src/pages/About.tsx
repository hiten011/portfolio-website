import { motion } from "framer-motion";
import { personalInfo, skills, education, additionalInfo } from "@/constants/data";
import SkillBadge from "@/components/SkillBadge";
import { GraduationCap, Award, Heart, BookOpen } from "lucide-react";

const skillGroups = [
  { label: "Languages", items: skills.languages },
  { label: "Web", items: skills.web },
  { label: "Embedded", items: skills.embedded },
  { label: "Databases & Tools", items: skills.databases },
];

export default function About() {
  return (
    <div className="min-h-screen py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          {/* Header */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-5">
              <span className="font-mono text-xs text-primary">03</span>
              <span className="h-px w-6 bg-primary/50" />
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">About</span>
            </div>
            <h1
              className="font-display text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-none mb-4"
              data-testid="text-page-title"
            >
              About<br />
              <span className="text-primary">Me</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-4 w-4 text-primary" />
              <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-wide">Education</h2>
              <span className="flex-1 h-px bg-border/60" />
            </div>

            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <div className="px-6 py-5 border-b border-border/60 bg-muted/20">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{education.degree}</h3>
                    <p className="text-primary font-semibold mt-0.5">{education.school}</p>
                    <p className="font-mono text-xs text-muted-foreground mt-1">{education.location}</p>
                  </div>
                  <div className="sm:text-right flex-shrink-0">
                    <p className="font-mono text-xs text-muted-foreground">{education.period}</p>
                    <p className="font-display text-2xl font-extrabold text-foreground mt-1">{education.gpa}</p>
                    <p className="font-mono text-[11px] text-muted-foreground">GPA</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-5 space-y-4">
                <div>
                  <p className="font-mono text-xs text-primary mb-2 uppercase tracking-widest">Scholarship</p>
                  <p className="text-sm text-muted-foreground">{education.scholarship}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-primary mb-3 uppercase tracking-widest">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((c) => (
                      <SkillBadge key={c} skill={c} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-4 w-4 text-primary" />
              <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-wide">Technical Skills</h2>
              <span className="flex-1 h-px bg-border/60" />
            </div>

            <div className="space-y-5">
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">{g.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <SkillBadge key={s} skill={s} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Certifications & Activities */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-4 w-4 text-primary" />
              <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-wide">Certifications & Activities</h2>
              <span className="flex-1 h-px bg-border/60" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="rounded-lg border border-border bg-card px-6 py-5">
                <p className="font-mono text-xs text-primary mb-3 uppercase tracking-widest">Certifications</p>
                <ul className="space-y-2">
                  {additionalInfo.certifications.map((c) => (
                    <li key={c} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="font-mono text-primary mt-0.5 flex-shrink-0 text-xs">→</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card px-6 py-5">
                <p className="font-mono text-xs text-primary mb-3 uppercase tracking-widest">Activities</p>
                <div className="flex flex-wrap gap-2">
                  {additionalInfo.activities.map((a) => (
                    <SkillBadge key={a} skill={a} />
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Hobbies */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Heart className="h-4 w-4 text-primary" />
              <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-wide">Hobbies</h2>
              <span className="flex-1 h-px bg-border/60" />
            </div>
            <div className="flex flex-wrap gap-2">
              {additionalInfo.hobbies.map((h) => (
                <SkillBadge key={h} skill={h} />
              ))}
            </div>
          </motion.section>

        </motion.div>
      </div>
    </div>
  );
}
