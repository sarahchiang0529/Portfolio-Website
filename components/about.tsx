"use client"

import Image from "next/image"
import { Download } from "lucide-react"
import { motion } from "@/src/lib/motion"
import { fadeIn, fadeInLeft, fadeInRight } from "@/src/lib/motion"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-2 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="relative aspect-square max-w-md mx-auto blob"
          >
            <Image
              src="/sarah.jpg"
              alt="Sarah Chiang"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/10"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Hi, I'm Sarah!</h3>
            <p className="text-muted-foreground">
              I am a Computer Science student @ Western University pursuing a career in software development. 
              I am currently looking for Fall 2025 internships!
            </p>
            <p className="text-muted-foreground">
              I love collaborating in teams to create high-quality software.
              I build mostly in TypeScript and Python with strong competences in React, Node.js, GraphQL, PyTorch, and SQL databases.
            </p>
            <p className="text-muted-foreground">
              Outside of academics, I enjoy contributing to open-source projects, and staying current with the latest technological 
              developments. When I’m not coding, you’ll often find me taking photos, exploring new places, or vlogging about my adventures.
            </p>

            <Button asChild size="lg" className="mt-4">
              <a href="/SarahChiangResume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}