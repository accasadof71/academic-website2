/**
 * @file PublicationsSection.tsx
 * @description Publication list grouped by type, similar to academic CV sections.
 */

/**
 * @typedef Publication
 * @description Shape of a single publication entry.
 */
interface Publication {
  /** Publication title */
  title: string
  /** Author list in citation order */
  authors: string
  /** Venue, conference, or journal name */
  venue: string
  /** Year of publication */
  year: string
  /** Optional link to paper or preprint */
  link?: string
  /** Type of publication (e.g., Journal, Conference) */
  type: 'Journal' | 'Conference'
}

/**
 * PublicationsSection component
 * @description Renders a structured publication list grouped by type.
 */
export function PublicationsSection() {
  const publications: Publication[] = [
    {
      title: 'Robust Representations via Distributionally Aware Contrastive Learning',
      authors: 'Your Name*, Coauthor Name*, Another Author',
      venue: 'NeurIPS',
      year: '2024',
      link: '#',
      type: 'Conference',
    },
    {
      title: 'Interpretable Risk Scores for Clinical Decision Support',
      authors: 'Your Name, Medical Collaborator, Senior Author',
      venue: 'Journal of Machine Learning Research',
      year: '2023',
      link: '#',
      type: 'Journal',
    },
    {
      title: 'Efficient Evaluation Pipelines for Large Language Models',
      authors: 'Your Name, Collaborators',
      venue: 'ICML Workshop on LLM Evaluation',
      year: '2023',
      link: '#',
      type: 'Conference',
    },
  ]

  const byType: Record<'Journal' | 'Conference', Publication[]> = {
    Journal: publications.filter((p) => p.type === 'Journal'),
    Conference: publications.filter((p) => p.type === 'Conference'),
  }

  return (
    <section id="publications" className="mb-10">
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-slate-900">
        Publications
      </h2>
      <p className="mb-4 text-sm text-slate-700">
        A selection of recent publications. For a full list, please refer to my CV or
        Google Scholar profile.
      </p>

      <div className="space-y-6 text-sm text-slate-800">
        {(['Journal', 'Conference'] as const).map((type) => {
          const list = byType[type]
          if (list.length === 0) return null

          return (
            <div key={type}>
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                {type} articles
              </h3>
              <ol className="space-y-2 pl-4">
                {list.map((pub) => (
                  <li key={pub.title} className="list-decimal">
                    <span className="font-medium">{pub.authors}</span>.{' '}
                    <span className="font-semibold italic">{pub.title}</span>.{' '}
                    <span>{pub.venue}</span>, <span>{pub.year}</span>.
                    {pub.link && (
                      <>
                        {' '}
                        <a
                          href={pub.link}
                          className="text-indigo-600 hover:underline"
                        >
                          PDF / Link
                        </a>
                      </>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          )
        })}
      </div>
    </section>
  )
}
