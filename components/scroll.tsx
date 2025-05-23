// src/components/Scroll.tsx
"use client"

import React from "react"
import { motion } from "@/src/lib/motion"
import { ArrowDown } from "lucide-react"

export default function Scroll() {
  return (
    <motion.div
      className="home__scroll flex justify-center items-center mt-24 md:mt-32 text-muted-foreground"
      animate={{ y: [0, 8, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <a
        href="#about"
        className="home__scroll-button inline-flex items-center gap-2"
        onClick={(e) => {
          e.preventDefault()
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        <svg
          width="32"
          height="32"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          fill="none"
          stroke="currentColor"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M123.359,79.775l0,72.843" />
          <path
            d="M236.717,123.359
               c0,-62.565 -50.794,-113.359 -113.358,-113.359
               c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237
               c0,62.565 50.794,113.359 113.359,113.359
               c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
          />
        </svg>

        <span className="home__scroll-name">Scroll Down</span>
        <ArrowDown className="h-5 w-5 text-current" />
      </a>
    </motion.div>
  )
}