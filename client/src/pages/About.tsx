import { motion } from "framer-motion";
import { personalInfo, skills, education, additionalInfo } from "@/constants/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SkillBadge from "@/components/SkillBadge";
import { GraduationCap, Award, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-page-title">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            {personalInfo.bio}
          </p>

          {/* Education Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{education.degree}</CardTitle>
                <p className="text-muted-foreground">{education.school} • {education.location}</p>
                <p className="text-sm text-muted-foreground">{education.period}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">GPA: {education.gpa}</p>
                  <p className="text-muted-foreground">{education.scholarship}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <SkillBadge key={course} skill={course} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Technical Skills
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Web Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.web.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Certifications & Activities */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Certifications & Activities
            </h2>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Certifications</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {additionalInfo.certifications.map((cert) => (
                      <li key={cert}>{cert}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Activities</h3>
                  <div className="flex flex-wrap gap-2">
                    {additionalInfo.activities.map((activity) => (
                      <SkillBadge key={activity} skill={activity} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Hobbies */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              Hobbies & Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {additionalInfo.hobbies.map((hobby) => (
                <SkillBadge key={hobby} skill={hobby} />
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
