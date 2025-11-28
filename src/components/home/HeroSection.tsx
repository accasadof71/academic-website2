/**
 * @file HeroSection.tsx
 * @description Hero section with profile photo, name, title, and primary actions.
 */

import { Mail, FileText } from 'lucide-react'

/**
 * HeroSection component
 * @description Top-of-page introduction similar to al-folio's profile block.
 */
export function HeroSection() {
  return (
    <section
      id="top"
      className="mb-10 grid gap-6 border-b border-slate-200 pb-8 pt-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] md:items-center"
    >
      <div className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-600">
          Computer Science · Machine Learning
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Your Name
        </h1>
        <p className="text-base text-slate-600 sm:text-lg">
          I am a researcher in machine learning and artificial intelligence, focusing on
          robust models and interpretable systems. I enjoy bridging theory and practice.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
            Affiliation · University / Lab
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
            Location · City, Country
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
            Interests · ML, NLP, Robustness
          </span>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50"
          >
            <FileText className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative h-40 w-40 overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-sm sm:h-48 sm:w-48">
          <img
            src="https://pub-cdn.sider.ai/u/U0L5HA13V54/web-coder/692a01a1d9e33362d25be237/resource/ca6d7062-1ccc-4241-9223-c98e9e249967.jpg"
            alt="Profile portrait"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
