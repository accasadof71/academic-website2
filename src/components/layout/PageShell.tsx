/**
 * @file PageShell.tsx
 * @description Provides the main page layout with navigation, content container, and footer
 * for the academic portfolio site inspired by minimal-mistakes / al-folio.
 */

import type { ReactNode } from 'react'
import { Github, Linkedin, Menu } from 'lucide-react'

/**
 * @typedef PageShellProps
 * @description Props for the PageShell layout component.
 */
interface PageShellProps {
  /** Page title shown in the navbar */
  title: string
  /** Main content of the page */
  children: ReactNode
}

/**
 * PageShell component
 * @description Wraps pages with a consistent layout: top nav, main content, and footer.
 */
export function PageShell({ title, children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader title={title} />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}

/**
 * SiteHeader component
 * @description Sticky top navigation with site title and in-page anchor links.
 */
function SiteHeader({ title }: { title: string }) {
  const navItems: { href: string; label: string }[] = [
    { href: '#about', label: 'About' },
    { href: '#research', label: 'Research' },
    { href: '#publications', label: 'Publications' },
    { href: '#teaching', label: 'Teaching' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
            {title}
          </span>
          <span className="hidden text-xs text-slate-500 sm:inline">
            Academic portfolio
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-indigo-600"
            >
              {item.label}
            </a>
          ))}
          <div className="ml-4 flex items-center gap-3 text-slate-500">
            <a
              href="https://github.com"
              aria-label="GitHub"
              className="transition-colors hover:text-slate-900"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="transition-colors hover:text-slate-900"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </nav>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 sm:hidden"
        >
          <Menu className="h-4 w-4" />
          <span>Menu</span>
        </button>
      </div>
    </header>
  )
}

/**
 * SiteFooter component
 * @description Simple footer with attribution and year.
 */
function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
        <p>
          &copy; {year} Your Name. All rights reserved.
        </p>
        <p className="flex flex-wrap items-center gap-1">
          <span>Built with</span>
          <span className="font-semibold text-slate-700">React</span>
          <span>inspired by</span>
          <a
            href="https://github.com/alshedivat/al-folio"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-indigo-600 hover:underline"
          >
            al-folio
          </a>
          <span>and</span>
          <a
            href="https://mademistakes.com/work/minimal-mistakes-jekyll-theme/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-indigo-600 hover:underline"
          >
            minimal-mistakes
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
