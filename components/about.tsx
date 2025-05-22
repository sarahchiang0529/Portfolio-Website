"use client"

import Image from "next/image"
import { Download } from "lucide-react"
import { motion } from "@/src/lib/motion"
import { fadeIn, fadeInLeft, fadeInRight } from "@/src/lib/motion"

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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me and my journey in computer science
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="relative aspect-square max-w-md mx-auto"
          >
            <Image
              src="/computer-science-student-portrait.png"
              alt="John Doe"
              width={400}
              height={400}
              className="rounded-2xl object-cover shadow-lg"
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
            <h3 className="text-2xl font-bold">Hello, I'm John Doe</h3>
            <p className="text-muted-foreground">
              I'm a passionate Computer Science student at University of Technology with a strong interest in software
              development, artificial intelligence, and creating innovative solutions to real-world problems.
            </p>
            <p className="text-muted-foreground">
              My journey in computer science began when I was 14 years old, tinkering with HTML and CSS to build simple
              websites. Since then, I've expanded my skills to include various programming languages, frameworks, and
              tools.
            </p>
            <p className="text-muted-foreground">
              Outside of academics, I enjoy participating in hackathons, contributing to open-source projects, and
              staying up-to-date with the latest technological advancements. When I'm not coding, you can find me
              hiking, playing chess, or reading science fiction novels.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-blue-600">3+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mt-4"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}