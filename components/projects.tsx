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
      title: "TaskMate",
      description: "A modern, web-based project management and issue-tracking platform designed to streamline team collaboration and delivery with Kanban boards, advanced analytics, calendar integration, and secure role-based access.",
      image: "/projects/taskmate.jpg",
      tags: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Vite"],
      github: "https://github.com/sarahchiang0529/TaskMate",
      /*
      demo: "https://TaskMate.vercel.app",
      */
    },
    {
      title: "Alice à Bruxelles",
      description: "An immersive art exhibition website showcasing 3D galleries, allowing users to virtually navigate and explore curated artworks in a seamless, interactive experience.",      
      image: "/projects/alice-a-bruxelles.jpg",
      tags: ["Unity", "WebGL", "C", "React", "JavaScript"],
      github: "https://github.com/sarahchiang0529/Alice-a-Bruxelles-Website",
      /*
      demo: "https://alice-bruxelles.vercel.app",
      */
    },
    {
      title: "FINANCE4HER",
      description: "A financial literacy platform offering interactive modules, budgeting tools and tips to empower women in managing personal finances.",
      image: "/projects/finance4her.jpg",
      tags: ["React", "JavaScript", "Tailwind CSS", "Auth0", "Express", "Supabase", "Material UI"], 
      github: "https://github.com/sarahchiang0529/FINANCE4HER",
      /*
      demo: "https://finance4her.com",
      */
    },
    {
      title: "GO Hockey",
      description: "A full‐stack e-commerce website for hockey enthusiasts to sign up for events and purchase merchandise.",        
      image: "/projects/go-hockey.jpg",
      tags: ["Angular", "Bootstrap", "Node.js", "Express"],
      /*
      demo: "https://gohockey.org",
      */
    },    
    {
      title: "UWO TSI",
      description: "An IoT dashboard for Western’s TSI lab: real-time device monitoring, customizable automations, and historical data visualizations.",
      image: "/projects/uwo-tsi.jpg",
      tags: ["HTML", "Vite", "React", "Tailwind CSS", "Figma"],
      github: "https://github.com/dahan8473/Club_Website",
      demo: "https://uwotsi.com",
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and personal projects.
          </p>
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
                    src={project.image}
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
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
            <Button
              onClick={showMoreProjects}
              variant="outline"
              className="gap-2"
            >
              Load More Projects <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
