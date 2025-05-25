import Script from "next/script";
import "@/src/app/globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-poppins",
});

// Server component: we define <head> here directly, no separate head.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* favicon & SEO */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Sarah Chiang | Computer Science Portfolio</title>
        <meta
          name="description"
          content="Portfolio website of Sarah Chiang, a computer science student at Western University."
        />

        {/* Load the Spline viewer as an ES module before React hydrates */}
        <Script
          src="https://unpkg.com/@splinetool/viewer@0.9.361/build/spline-viewer.js"
          strategy="beforeInteractive"
          type="module"
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}