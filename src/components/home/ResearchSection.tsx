/**
 * @file ResearchSection.tsx
 * @description Highlights of ongoing research projects in a card layout.
 */

import { ExternalLink } from 'lucide-react'

/**
 * @typedef ResearchProject
 * @description Shape of a research project entry.
 */
interface ResearchProject {
  /** Project title */
  title: string
  /** Short project description */
  description: string
  /** Venue or type */
  venue: string
  /** Year of the project or publication */
  year: string
  /** Optional external link */
  link?: string
  /** Keyword tags */
  tags: string[]
}

/**
 * ResearchSection component
 * @description Grid of project cards similar to the research overview in al-folio.
 */
export function ResearchSection() {
  const projects: ResearchProject[] = [
    {
      title: 'Robust Contrastive Learning under Distribution Shift',
      description:
        'Studying theoretical and practical aspects of contrastive learning when training and test distributions differ.',
      venue: 'NeurIPS (under review)',
      year: '2025',
      link: '#',
      tags: ['Robustness', 'Representation Learning', 'Theory'],
    },
    {
      title: 'Interpretable Models for Clinical Decision Support',
      description:
        'Developing interpretable models with calibrated uncertainty for high-stakes medical decision-making.',
      venue: 'JMLR (2024)',
      year: '2024',
      link: '#',
      tags: ['Interpretability', 'Healthcare', 'Uncertainty'],
    },
    {
      title: 'Efficient Evaluation of Large Language Models',
      description:
        'Designing protocols and tooling for scalable and reliable evaluation of large language models.',
      venue: 'Workshop on LLM Evaluation',
      year: '2023',
      link: '#',
      tags: ['LLMs', 'Evaluation', 'Tooling'],
    },
  ]

  return (
    <section id="research" className="mb-10">
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Research
        </h2>
        <a
          href="#"
          className="text-xs font-medium text-indigo-600 hover:underline"
        >
          View full research statement
        </a>
      </div>
      <p className="mb-4 text-sm text-slate-700">
        My work spans theoretical foundations of machine learning, robustness under
        distribution shift, and practical systems for deploying ML in the wild. Below is a
        selection of recent projects.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <header className="mb-2">
              <h3 className="text-sm font-semibold text-slate-900">
                {project.title}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                {project.venue} · {project.year}
              </p>
            </header>
            <p className="mb-3 text-xs leading-relaxed text-slate-700">
              {project.description}
            </p>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-medium text-indigo-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-indigo-600 hover:underline"
                >
                  <span>Learn more</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
