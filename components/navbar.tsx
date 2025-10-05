// components/navbar.tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/src/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle" 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      {/* anchor‐offset for smooth scroll */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 4rem;
        }
      `}</style>

      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-colors duration-300",
          scrolled
            ? "bg-white/80 dark:bg-background/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="#home" className="font-bold text-xl">
            Sarah<span className="text-primary">Chiang</span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* ← Theme toggle button */}
            <ThemeToggle />

            {/* resume */}
            <Button asChild size="sm">
              <a href="/SarahChiangResumee.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </nav>

          {/* mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* mobile drawer */}
        {isOpen && (
          <div className="md:hidden bg-white/95 dark:bg-background/95 backdrop-blur-md shadow-inner">
            <nav className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* toggle in mobile */}
              <ThemeToggle />

              {/* resume */}
              <Button asChild className="mt-4 w-full">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}