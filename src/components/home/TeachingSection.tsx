/**
 * @file TeachingSection.tsx
 * @description Teaching experience summarized in simple cards.
 */

/**
 * @typedef TeachingItem
 * @description Shape of a teaching entry.
 */
interface TeachingItem {
  /** Course code and title */
  course: string
  /** Institution or program */
  institution: string
  /** Academic term */
  term: string
  /** Role in the course */
  role: string
}

/**
 * TeachingSection component
 * @description Lists selected teaching experiences.
 */
export function TeachingSection() {
  const items: TeachingItem[] = [
    {
      course: 'CS 501 · Advanced Machine Learning',
      institution: 'Your University',
      term: 'Spring 2025',
      role: 'Teaching Assistant',
    },
    {
      course: 'CS 231 · Introduction to Machine Learning',
      institution: 'Your University',
      term: 'Fall 2024',
      role: 'Teaching Assistant',
    },
    {
      course: 'Data Science for Engineers',
      institution: 'Summer School',
      term: 'Summer 2023',
      role: 'Guest Lecturer',
    },
  ]

  return (
    <section id="teaching" className="mb-10">
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-slate-900">
        Teaching
      </h2>
      <p className="mb-4 text-sm text-slate-700">
        I enjoy teaching and mentoring students. Below is a selection of courses I have
        been involved in.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <article
            key={`${item.course}-${item.term}`}
            className="rounded-lg border border-slate-200 bg-white p-3 text-xs shadow-sm"
          >
            <h3 className="mb-1 text-sm font-semibold text-slate-900">
              {item.course}
            </h3>
            <p className="mb-1 text-slate-700">{item.institution}</p>
            <p className="text-slate-500">
              {item.term} · {item.role}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
