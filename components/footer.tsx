import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start">
          <Link href="#home" className="font-bold text-xl">
            John<span className="text-primary">Doe</span>
          </Link>
          <p className="text-sm text-muted-foreground mt-1">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>

        <nav className="flex gap-4">
          <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Experience
          </Link>
          <Link href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:john.doe@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}