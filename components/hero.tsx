"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "@/src/lib/motion"
import Scroll from "@/components/scroll"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Computer Science Student"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)
    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <motion.div
          className="text-center space-y-6 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Heading with waving-hand emoji */}
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl flex justify-center items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I’m <span className="text-primary">Sarah Chiang</span>
            <motion.span
              className="text-4xl"
              animate={{ rotate: [0, 20, -20, 20, -20, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              👋
            </motion.span>
          </motion.h1>

          {/* Typing subtitle */}
          <h2 className="text-2xl sm:text-3xl text-muted-foreground h-8">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>

          {/* Blurb */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            at the University of Western Ontario
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="lg">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-6 pt-6">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/sarahchiang0529"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/sarahchiang0529/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:schiang0529@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
        <Scroll />
      </div>
    </section>
  )
}