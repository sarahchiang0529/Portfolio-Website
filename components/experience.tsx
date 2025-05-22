"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

export default function Experience() {
  const [activeTab, setActiveTab] = useState("education")

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2020 - Present",
      description:
        "Focusing on Artificial Intelligence, Web Development, and Data Structures & Algorithms. Current GPA: 3.8/4.0",
      achievements: ["Dean's List (2020-2023)", "Best Student Project Award (2022)"],
    },
    {
      degree: "High School Diploma",
      institution: "Science Academy",
      period: "2016 - 2020",
      description: "Advanced courses in Mathematics, Physics, and Computer Science.",
      achievements: ["Valedictorian", "National Science Competition Finalist"],
    },
  ]

  const work = [
    {
      position: "Software Development Intern",
      company: "Tech Innovations Inc.",
      period: "Summer 2023",
      description:
        "Developed and maintained web applications using React and Node.js. Collaborated with senior developers to implement new features and fix bugs.",
      technologies: ["React", "Node.js", "MongoDB", "Git"],
    },
    {
      position: "Research Assistant",
      company: "University AI Lab",
      period: "2022 - Present",
      description:
        "Assisting in research projects focused on natural language processing and machine learning algorithms. Implementing and testing models using Python and TensorFlow.",
      technologies: ["Python", "TensorFlow", "NLP", "Data Analysis"],
    },
    {
      position: "Freelance Web Developer",
      company: "Self-employed",
      period: "2021 - Present",
      description:
        "Designing and developing responsive websites for small businesses and startups. Managing client relationships and delivering projects on time.",
      technologies: ["HTML/CSS", "JavaScript", "WordPress", "UI/UX Design"],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container">
        <div className="space-y-2 text-center mb-12 opacity-0 animate-fadeIn">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My academic background and professional journey</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid w-full grid-cols-2 mb-8 bg-muted rounded-lg overflow-hidden">
            <button
              className={`flex items-center justify-center gap-2 py-3 px-4 font-medium transition-colors ${activeTab === "education" ? "bg-primary text-primary-foreground" : "hover:bg-muted-foreground/10"}`}
              onClick={() => setActiveTab("education")}
            >
              <GraduationCap className="h-4 w-4" /> Education
            </button>
            <button
              className={`flex items-center justify-center gap-2 py-3 px-4 font-medium transition-colors ${activeTab === "work" ? "bg-primary text-primary-foreground" : "hover:bg-muted-foreground/10"}`}
              onClick={() => setActiveTab("work")}
            >
              <Briefcase className="h-4 w-4" /> Work Experience
            </button>
          </div>

          <div className="space-y-6">
            {activeTab === "education" &&
              education.map((item, index) => (
                <div key={index} className="opacity-0 animate-fadeInUp" style={{ animationDelay: `${index * 150}ms` }}>
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <CardTitle>{item.degree}</CardTitle>
                        <Badge variant="outline">{item.period}</Badge>
                      </div>
                      <p className="text-primary font-medium">{item.institution}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>{item.description}</p>
                      {item.achievements.length > 0 && (
                        <div>
                          <p className="font-medium">Achievements:</p>
                          <ul className="list-disc list-inside text-muted-foreground">
                            {item.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}

            {activeTab === "work" &&
              work.map((item, index) => (
                <div key={index} className="opacity-0 animate-fadeInUp" style={{ animationDelay: `${index * 150}ms` }}>
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <CardTitle>{item.position}</CardTitle>
                        <Badge variant="outline">{item.period}</Badge>
                      </div>
                      <p className="text-primary font-medium">{item.company}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}