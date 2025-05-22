"use client"

// Import specific components from framer-motion
import { motion, AnimatePresence, useAnimation, useScroll, useTransform, useInView } from "framer-motion"

// Re-export only what you need
export { motion, AnimatePresence, useAnimation, useScroll, useTransform, useInView }

// Define common animations
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}
