"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Server, Smartphone, Terminal, PenTool, Cpu } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS"],
    },
    {
      name: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "REST APIs"],
    },
    {
      name: "Backend & Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "PostgreSQL", "Firebase", "GraphQL", "Redis", "SQL"],
    },
    {
      name: "DevOps & Tools",
      icon: <Server className="h-6 w-6" />,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Bash"],
    },
    {
      name: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["React Native", "Flutter", "Android Studio", "iOS Development"],
    },
    {
      name: "AI & Machine Learning",
      icon: <Cpu className="h-6 w-6" />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"],
    },
    {
      name: "UI/UX Design",
      icon: <PenTool className="h-6 w-6" />,
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"],
    },
    {
      name: "Other Skills",
      icon: <Terminal className="h-6 w-6" />,
      skills: ["Problem Solving", "Algorithms", "Data Structures", "Agile Methodology", "Technical Writing"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="space-y-2 text-center mb-12 opacity-0 animate-fadeIn">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="opacity-0 animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{category.icon}</div>
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="bg-muted text-muted-foreground text-sm px-3 py-1 rounded-full">
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}