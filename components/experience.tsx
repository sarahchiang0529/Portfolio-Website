// src/components/Experience.tsx
"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const work = [
    {
      logo: "/logos/western.jpg",
      position: "Software Developer",
      company: "ALICE A BRUXELLES",
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
      logo: "/logos/go-hockey.jpg",
      position: "Project Manager",
      company: "GO Hockey",
      period: "Sept 2024 – Jan 2025",
      description:
        "Developed a React registration portal featuring Stripe payments and real-time Supabase synchronization.",
    },
    {
      logo: "/logos/lhsc.avif",
      position: "Software Developer",
      company: "London Health Sciences Centre",
      period: "May 2024 – Aug 2024",
      description:
        "Developed an automated NLP pipeline—leveraging spaCy, custom regex rules, and LLM-driven prompts—to systematically extract and standardize critical clinical data from unstructured patient notes.",
    },
    {
      logo: "/logos/uwo-tsi.png",
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
                <Card>
                  <div className="flex items-start gap-6 p-6">
                    {/* Logo column */}
                    <div className="w-16 h-16 relative flex-shrink-0">
                      <Image
                        src={item.logo}
                        alt={`${item.company} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Details column */}
                    <div className="flex-1">
                      <CardHeader className="p-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <CardTitle>{item.position}</CardTitle>
                          <Badge variant="outline">{item.period}</Badge>
                        </div>
                        <p className="text-primary font-medium mt-1">
                          {item.company}
                        </p>
                      </CardHeader>

                      <CardContent className="p-0 mt-4">
                        <p>{item.description}</p>
                      </CardContent>
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
