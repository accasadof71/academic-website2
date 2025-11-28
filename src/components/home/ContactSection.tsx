/**
 * @file ContactSection.tsx
 * @description Contact information and a simple contact form UI.
 */

import { Mail, MapPin, Globe } from 'lucide-react'

/**
 * ContactSection component
 * @description Displays contact details and a non-functional contact form for UI purposes.
 */
export function ContactSection() {
  return (
    <section id="contact" className="mb-8">
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-slate-900">
        Contact
      </h2>
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-3 text-sm text-slate-700">
          <p>
            I am always happy to discuss research, collaboration opportunities, or
            speaking engagements. The best way to reach me is via email.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-slate-500" />
              <a
                href="mailto:you@example.com"
                className="font-medium text-indigo-600 hover:underline"
              >
                you@example.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-slate-500" />
              <span>Department of Computer Science, Your University, City, Country</span>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-slate-500" />
              <a
                href="https://scholar.google.com"
                className="text-indigo-600 hover:underline"
              >
                Google Scholar
              </a>
              <span className="text-slate-400">·</span>
              <a
                href="https://github.com"
                className="text-indigo-600 hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <form className="space-y-3 rounded-lg border border-slate-200 bg-white p-4 text-xs shadow-sm">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              className="block w-full rounded-md border border-slate-300 bg-slate-50 px-2 py-1.5 text-xs text-slate-900 shadow-sm outline-none ring-indigo-500 transition focus:border-indigo-500 focus:bg-white focus:ring-1"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="block w-full rounded-md border border-slate-300 bg-slate-50 px-2 py-1.5 text-xs text-slate-900 shadow-sm outline-none ring-indigo-500 transition focus:border-indigo-500 focus:bg-white focus:ring-1"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="block w-full rounded-md border border-slate-300 bg-slate-50 px-2 py-1.5 text-xs text-slate-900 shadow-sm outline-none ring-indigo-500 transition focus:border-indigo-500 focus:bg-white focus:ring-1"
              placeholder="Briefly describe why you're reaching out."
            />
          </div>
          <p className="text-[11px] text-slate-500">
            This form is a visual placeholder. Please use the email address listed to
            contact me directly.
          </p>
        </form>
      </div>
    </section>
  )
}
