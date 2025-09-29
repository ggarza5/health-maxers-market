import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-cyan-600">Max</span>
              <span className="text-slate-900 dark:text-white">Health</span>
            </h1>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="/partners" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              Partners
            </Link>
            <Link href="/resources" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:inline-flex">
              Join our newsletter
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}