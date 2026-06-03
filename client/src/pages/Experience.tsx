import { motion } from "framer-motion";
import { experience } from "@/constants/data";

export default function Experience() {
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
              <span className="font-mono text-xs text-primary">02</span>
              <span className="h-px w-6 bg-primary/50" />
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                Work Experience
              </span>
            </div>
            <h1
              className="font-display text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-none mb-4"
              data-testid="text-page-title"
            >
              Where I've<br />
              <span className="text-primary">Worked</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
              Professional experience building production systems that ship to real users.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-10">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative md:pl-14"
                  data-testid={`card-experience-${exp.id}`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-0 top-6 w-8 h-8 rounded-full bg-background border-2 border-primary items-center justify-center -translate-x-1/2 z-10">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  {/* Card */}
                  <div className="rounded-lg border border-border bg-card hover:border-primary/40 transition-colors duration-300 overflow-hidden">

                    {/* Card header */}
                    <div className="px-6 py-5 border-b border-border/60 bg-muted/20">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div>
                          <h2 className="font-display text-xl font-bold text-foreground">{exp.role}</h2>
                          <p className="text-primary font-semibold mt-0.5">{exp.company}</p>
                        </div>
                        <div className="sm:text-right flex-shrink-0">
                          <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
                          <p className="font-mono text-xs text-muted-foreground">{exp.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="px-6 py-5">
                      <ul className="space-y-3">
                        {exp.responsibilities.map((r, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.12 + j * 0.05 }}
                            className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                          >
                            <span className="font-mono text-primary mt-0.5 flex-shrink-0 text-xs">→</span>
                            <span>{r}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
