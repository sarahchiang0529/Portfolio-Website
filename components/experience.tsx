"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"

export default function Experience() {
  const work = [
    {
      logo: "/logos/western.png",
      position: "Front-end & Unity Developer",
      company: "Alice-a-Bruxelles Interactive WebGL Experience",
      period: "May 2025 – Present",
      description:
        "Built an interactive 3D art exhibition website with Unity for immersive virtual navigation.",
    },
    {
      logo: "/logos/empowherto.png",
      position: "Project Manager & Developer",
      company: "EmpowHERto",
      period: "Feb 2025 – Present",
      description:
        "Engineered FINANCE4HER, a React/Node.js financial literacy app with secure authentication and real-time data visualization.",
    },
    {
      logo: "/logos/go-hockey.png",
      position: "Project Manager",
      company: "GO Hockey",
      period: "Sept 2024 – Jan 2025",
      description:
        "Developed a React registration portal featuring Stripe payments and real-time Supabase synchronization.",
    },
    {
      logo: "/logos/lhsc.avif",
      position: "Database Developer",
      company: "London Health Sciences Centre",
      period: "May 2024 – Aug 2024",
      description:
        "Developed an automated NLP pipeline—leveraging spaCy, custom regex rules, and LLM-driven prompts—to systematically extract and standardize critical clinical data from unstructured patient notes.",
    },
    {
      logo: "/logos/tsi.png",
      position: "Frontend Developer",
      company: "UWO Tech for Social Impact",
      period: "May 2024 – Aug 2024",
      description:
        "Implemented responsive React interfaces and consumed RESTful APIs for community outreach projects.",
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and roles
          </p>
        </motion.div>

        <Tabs defaultValue="work" className="max-w-4xl mx-auto">
          <TabsContent value="work" className="space-y-6">
            {work.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="bg-card dark:bg-card border border-border dark:border-border rounded-lg">
                  <div className="flex items-start gap-6 p-6">
                    {/* Logo */}
                    <div className="w-16 h-16 flex-shrink-0 relative">
                      <Image
                        src={item.logo}
                        alt={`${item.company} logo`}
                        fill
                        className="object-contain rounded-md"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      {/* Company Name */}
                      <h3 className="text-xl font-bold text-foreground dark:text-foreground">
                        {item.company}
                      </h3>

                      {/* Position Subtitle */}
                      <p className="mt-1 text-blue-600 dark:text-blue-400 font-medium">
                        {item.position}
                      </p>

                      {/* Period */}
                      <p className="mt-1 text-sm text-muted-foreground dark:text-muted-foreground">
                        {item.period}
                      </p>

                      {/* Description */}
                      <p className="mt-4 text-foreground dark:text-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}