"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Server, Smartphone, PenTool, Cpu, Layers } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "C/C++", "Java", "JavaScript", "TypeScript", "HTML/CSS"],
    },
    {
      name: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "REST APIs"],
    },
    {
      name: "Backend & Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "GraphQL", "SQL"],
    },
    {
      name: "DevOps & Tools",
      icon: <Server className="h-6 w-6" />,
      skills: ["Git", "Docker", "CI/CD", "Linux/Unix", "Bash"],
    },
    {
      name: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["React Native", "iOS Development", "Swift"],
    },
    {
      name: "AI & Machine Learning",
      icon: <Cpu className="h-6 w-6" />,
      skills: ["NLP", "PyTorch", "TensorFlow", "Scikit-learn", "Computer Vision"],
    },
    {
      name: "Data Science & Tools",
      icon: <Layers className="h-6 w-6" />,
      skills: [
        "NumPy", "Pandas", "SciPy", "MATLAB", "Jupyter Notebook","Google Colab", "Anaconda",],
    },
    {
      name: "UI/UX Design",
      icon: <PenTool className="h-6 w-6" />,
      skills: ["Figma", "Adobe XD"],
    }
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
