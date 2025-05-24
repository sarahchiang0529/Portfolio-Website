import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between">
        {/* Left: Logo */}
        <div className="order-1 md:order-1">
          <Link href="#home" className="font-bold text-xl">
            Sarah<span className="text-primary">Chiang</span>
          </Link>
        </div>

        {/* Center: Copyright */}
        <div className="my-4 md:my-0 order-3 md:order-2 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sarah Chiang. All rights reserved.
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="order-2 md:order-3 flex gap-4">
          <a
            href="https://github.com/sarahchiang0529"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/sarahchiang0529/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:schiang0529@gmail.com"
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