"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "@/src/lib/motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3)

  const projects = [
    {
      title: "AI-Powered Study Assistant",
      description:
        "A web application that uses natural language processing to help students study more effectively by generating quizzes, summarizing content, and providing personalized learning paths.",
      image: "/ai-study-assistant-app.png",
      tags: ["React", "Python", "TensorFlow", "NLP", "Firebase"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, payment integration, and admin dashboard for managing products and orders.",
      image: "/placeholder.svg?height=400&width=600&query=e-commerce website dashboard",
      tags: ["Next.js", "MongoDB", "Stripe", "Redux", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Smart Home IoT Dashboard",
      description:
        "An IoT dashboard for monitoring and controlling smart home devices. Features include real-time data visualization, device management, automation rules, and mobile responsiveness.",
      image: "/placeholder.svg?height=400&width=600&query=smart home IoT dashboard",
      tags: ["React", "Node.js", "MQTT", "Chart.js", "Socket.io"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Fitness Tracking Mobile App",
      description:
        "A cross-platform mobile application for tracking workouts, nutrition, and fitness progress. Includes features like custom workout plans, calorie counter, and progress analytics.",
      image: "/placeholder.svg?height=400&width=600&query=fitness tracking mobile app",
      tags: ["React Native", "Firebase", "Redux", "Health API", "Expo"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Algorithmic Trading Bot",
      description:
        "A Python-based trading bot that uses machine learning algorithms to analyze market data and execute trades automatically based on predefined strategies.",
      image: "/placeholder.svg?height=400&width=600&query=trading bot dashboard with charts",
      tags: ["Python", "Machine Learning", "API Integration", "Data Analysis"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Collaborative Code Editor",
      description:
        "A real-time collaborative code editor with syntax highlighting, code execution, and video chat capabilities for remote pair programming sessions.",
      image: "/placeholder.svg?height=400&width=600&query=collaborative code editor interface",
      tags: ["JavaScript", "WebSockets", "Monaco Editor", "WebRTC"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  const showMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length))
  }

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A selection of my recent work and personal projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-12">
            <Button onClick={showMoreProjects} variant="outline" className="gap-2">
              Load More Projects <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}