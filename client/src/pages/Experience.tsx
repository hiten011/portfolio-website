import { motion } from "framer-motion";
import { experience } from "@/constants/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 flex items-center gap-3" data-testid="text-page-title">
            <Briefcase className="h-10 w-10 text-primary" />
            Work Experience
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            My professional journey and contributions in software development.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            {/* Experience Items */}
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                  {/* Content Card */}
                  <div className="md:ml-20">
                    <Card className="hover:shadow-lg transition-shadow" data-testid={`card-experience-${exp.id}`}>
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                          <div>
                            <CardTitle className="text-2xl">{exp.role}</CardTitle>
                            <p className="text-lg text-primary font-medium mt-1">{exp.company}</p>
                          </div>
                          <div className="text-sm text-muted-foreground md:text-right">
                            <p className="font-medium">{exp.period}</p>
                            <p>{exp.location}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex gap-3">
                              <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                              <span className="text-muted-foreground">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
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
